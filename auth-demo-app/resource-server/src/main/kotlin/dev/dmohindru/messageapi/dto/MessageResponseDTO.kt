package dev.dmohindru.messageapi.dto

import java.time.Instant

data class MessageResponseDTO(
    val message: String,
    val timeStamp: Instant? = null
)
