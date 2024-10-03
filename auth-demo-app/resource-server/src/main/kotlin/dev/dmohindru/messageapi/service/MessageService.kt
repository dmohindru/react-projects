package dev.dmohindru.messageapi.service

import dev.dmohindru.messageapi.dto.DadJokeApiResponse
import dev.dmohindru.messageapi.dto.MessageResponse
import dev.dmohindru.messageapi.dto.QuotesApiResponse
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono
import java.time.Instant

@Service
class MessageService(webClientBuilder: WebClient.Builder) {
    private val dadJokeClient = webClientBuilder
        .baseUrl("https://icanhazdadjoke.com")
        .build()

    private val quotesApiClient = webClientBuilder
        .baseUrl("https://zenquotes.io")
        .build()

    fun getDadJoke(): Mono<MessageResponse> {
        return dadJokeClient.get()
            .uri("/")
            .header(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
            .retrieve()
            .bodyToMono(DadJokeApiResponse::class.java)
            .map {
                MessageResponse(
                    message = it.joke,
                    timeStamp = Instant.now()
                )
            }
    }

    fun getQuoteOfDay(): Mono<MessageResponse> {
        return quotesApiClient.get()
            .uri("/api/random")
            .retrieve()
            .bodyToMono(Array<QuotesApiResponse>::class.java)
            .map { quotes ->
                val quote = quotes.first()
                MessageResponse(
                    message = quote.q,
                    timeStamp = Instant.now()
                )
            }
    }
}