include .env

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

down:
	docker-compose down

.PHONY: restart-microservice

restart-microservice:
	docker-compose restart product_microservice

.PHONY: restart-database

restart-database:
	docker-compose restart product_database

.PHONY: logs-microservice

logs-microservice:
	docker-compose logs -f product_microservice

.PHONY: logs-database

logs-database:
	docker-compose logs -f product_database