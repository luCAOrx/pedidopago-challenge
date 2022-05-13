include .env

.PHONY: up-api

up-api:
	docker-compose up -d

.PHONY: down-api

down-api:
	docker-compose down

.PHONY: restart-api

restart-api:
	docker-compose restart api

.PHONY: logs-api

logs-api:
	docker-compose logs -f api