package dev.dmohindru.auth

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class AuthServerDemoApplication

fun main(args: Array<String>) {
	runApplication<AuthServerDemoApplication>(*args)
}
