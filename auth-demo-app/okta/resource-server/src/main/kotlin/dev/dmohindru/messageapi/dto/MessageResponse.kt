package dev.dmohindru.messageapi.dto

import java.time.Instant

data class MessageResponse(
    val message: String,
    val timeStamp: Instant? = null
)
