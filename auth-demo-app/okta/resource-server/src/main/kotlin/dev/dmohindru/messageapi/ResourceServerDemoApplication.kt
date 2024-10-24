package dev.dmohindru.messageapi

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ResourceServerDemoApplication

fun main(args: Array<String>) {
	runApplication<ResourceServerDemoApplication>(*args)
}
