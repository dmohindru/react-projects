package dev.dmohindru.auth.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.security.config.Customizer
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.factory.PasswordEncoderFactories
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.oauth2.core.AuthorizationGrantType
import org.springframework.security.oauth2.core.ClientAuthenticationMethod
import org.springframework.security.oauth2.core.oidc.OidcScopes
import org.springframework.security.oauth2.server.authorization.client.InMemoryRegisteredClientRepository
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository
import org.springframework.security.oauth2.server.authorization.config.annotation.web.configuration.OAuth2AuthorizationServerConfiguration
import org.springframework.security.oauth2.server.authorization.config.annotation.web.configurers.OAuth2AuthorizationServerConfigurer
import org.springframework.security.oauth2.server.authorization.settings.ClientSettings
import org.springframework.security.provisioning.InMemoryUserDetailsManager
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.HttpStatusEntryPoint
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint
import org.springframework.security.web.util.matcher.MediaTypeRequestMatcher
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import java.util.*

@EnableWebSecurity
@Configuration
class WebSecurityConfig {

    @Bean
    @Order(1)
    @Throws(Exception::class)
    fun authorizationServerSecurityFilter(http: HttpSecurity): SecurityFilterChain {
        OAuth2AuthorizationServerConfiguration.applyDefaultSecurity(http)
        http.getConfigurer(OAuth2AuthorizationServerConfigurer::class.java)
            .oidc(Customizer.withDefaults())

        http
            .cors(Customizer.withDefaults())
            .exceptionHandling {
                it.defaultAuthenticationEntryPointFor(
                    LoginUrlAuthenticationEntryPoint("http://localhost:3000/login"),
                    MediaTypeRequestMatcher(MediaType.TEXT_HTML)
                )
            }
            .oauth2ResourceServer {
                it.jwt(Customizer.withDefaults())
            }
        return http.build()
    }

    @Bean
    @Order(2)
    @Throws(Exception::class)
    fun authenticationSecurityFilterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .securityMatcher("/login", "/logout", "/register", "/callback")
            .cors(Customizer.withDefaults())
            .csrf { it.disable() }
            .formLogin {
                it
                    .loginPage("http://localhost:3000/login")
                    .loginProcessingUrl("/login")
                    .successHandler { _, res, _ ->
                        // Set CORS headers after successful login
                        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
                        res.setHeader("Access-Control-Allow-Credentials", "true")
                        res.sendRedirect("http://localhost:3000/callback")
                    }
                    .failureHandler { _, res, _ ->
                        res.status = HttpStatus.UNAUTHORIZED.value()
                        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
                        res.setHeader("Access-Control-Allow-Credentials", "true")
                    }
            }
            .logout {
                it.logoutSuccessUrl("http://localhost:3000/login?logout")
                    .addLogoutHandler { _, res, _ ->
                        // Add CORS headers for the logout process
                        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
                        res.setHeader("Access-Control-Allow-Credentials", "true")

                    }
            }
            .exceptionHandling {
                it.authenticationEntryPoint(HttpStatusEntryPoint(HttpStatus.FORBIDDEN))
            }
            .authorizeHttpRequests {
                it
                    .requestMatchers("/login", "/register").permitAll()
                    .anyRequest().authenticated()
            }

        return http.build()
    }

    @Bean
    @Order(3)
    @Throws(Exception::class)
    fun defaultSecurityFilterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .cors(Customizer.withDefaults())
            .authorizeHttpRequests {
                it.anyRequest().authenticated()
            }

        return http.build()
    }

    @Bean
    fun corsConfigurationSource(): CorsConfigurationSource {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()

        // Set the specific allowed origin
        config.allowedOrigins = listOf("http://localhost:3000")

        // Allow standard HTTP methods
        config.allowedMethods = listOf("GET", "POST", "PUT", "DELETE", "OPTIONS")

        // Allow specific headers
        config.allowedHeaders = listOf("Authorization", "Cache-Control", "Content-Type")

        // Allow credentials (cookies, authorization headers)
        config.allowCredentials = true

        // Ensure the CORS settings apply to all endpoints
        source.registerCorsConfiguration("/**", config)

        return source
    }

    @Bean
    fun registerClientRepository(): RegisteredClientRepository {
        val publicClient = RegisteredClient.withId(UUID.randomUUID().toString())
            .clientId("frontend-react-app")
            .clientAuthenticationMethod(ClientAuthenticationMethod.NONE)
            .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
            .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)
            .redirectUri("http://localhost:3000/callback")
            .scope(OidcScopes.OPENID)
            .scope(OidcScopes.PROFILE)
            .clientSettings(
                ClientSettings.builder()
                    .requireAuthorizationConsent(false)
                    .requireProofKey(true)
                    .build()
            )
            .build()

        val backendClient = RegisteredClient.withId(UUID.randomUUID().toString())
            .clientId("backend-client")
            .clientSecret("{noop}password")
            .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
            .authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
            .scope("read")
            .scope("write")
            .clientSettings(
                ClientSettings.builder()
                    .requireAuthorizationConsent(false)
                    .build()
            )
            .build()

        return InMemoryRegisteredClientRepository(publicClient, backendClient)
    }

    @Bean
    fun userDetailService(passwordEncoder: PasswordEncoder): UserDetailsService {
        val user1 = User.builder()
            .username("admin")
            .password(passwordEncoder.encode("password"))
            .build()

        val user2 = User.builder()
            .username("user")
            .password(passwordEncoder.encode("password"))
            .build()

        return InMemoryUserDetailsManager(user1, user2)
    }

    @Bean
    fun passEncoder(): PasswordEncoder {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder()
    }
}