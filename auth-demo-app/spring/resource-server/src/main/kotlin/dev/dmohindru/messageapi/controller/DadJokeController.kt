package dev.dmohindru.messageapi.controller

import dev.dmohindru.messageapi.dto.MessageResponse
import dev.dmohindru.messageapi.service.MessageService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/v1")
class DadJokeController(val messageService: MessageService) {

    @GetMapping("/dadjoke")
    fun getDadJoke(): Mono<MessageResponse> {
        return messageService.getDadJoke()
    }

    @GetMapping("/quote")
    fun getQuoteOfDay(): Mono<MessageResponse> {
        return messageService.getQuoteOfDay()
    }
}