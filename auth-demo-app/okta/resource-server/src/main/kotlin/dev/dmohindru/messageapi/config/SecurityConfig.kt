package dev.dmohindru.messageapi.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter
import org.springframework.security.web.SecurityFilterChain
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter

@EnableWebSecurity
@Configuration
class SecurityConfig {

    @Bean
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .cors {}
            .authorizeHttpRequests { it.anyRequest().authenticated() }
            .oauth2ResourceServer { it.jwt{ } }
        return http.build()
    }

    private fun jwtAuthenticationConverter()= JwtAuthenticationConverter()

    @Bean
    fun corsFilter(): CorsFilter {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()

        // Allow credentials (e.g. authorization headers)
        config.allowCredentials = true

        // Specify which origins should be allowed to access the resource server
        config.addAllowedOrigin("http://localhost:3000")

        // Specify which HTTP methods are allowed
        config.addAllowedMethod("*")

        // Allow headers such as Authorization, Content-Type, etc.
        config.addAllowedHeader("*")

        source.registerCorsConfiguration("/**", config)
        return CorsFilter(source)
    }
}