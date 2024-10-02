package dev.dmohindru.messageapi.controller

import dev.dmohindru.messageapi.dto.MessageResponseDTO
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/dadjoke")
class DadJokeController {

    @GetMapping
    fun getDadJoke(): MessageResponseDTO {
        return MessageResponseDTO(
            message = "Basic dad Joke"
        )
    }
}