include .env

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

down:
	docker-compose down

.PHONY: list-containers
list-containers:
	docker ps

.PHONY: database-cli
database-cli:
	docker exec -it product-database mysql -u root -p

.PHONY: restart-microservice

restart-microservice:
	docker-compose restart product-microservice

.PHONY: restart-database

restart-database:
	docker-compose restart product-database

.PHONY: down-product-microservice
down-product-microservice:
	docker stop product-microservice &&	docker rm product-microservice

.PHONY: logs-microservice

logs-microservice:
	docker-compose logs -f product-microservice

.PHONY: logs-database

logs-database:
	docker-compose logs -f product-database
