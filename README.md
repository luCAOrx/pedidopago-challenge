# pedidopago-challenge
Desafio em nodejs da pedidopago

## Requisitos para rodar a aplicação
 - [NodeJS latest](https://nodejs.org/pt-br/)
 - [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

 ## Configurando os contêineres do docker
  ### Iniciando os containers com docker-compose
   - Entre no diretório `microservices/products` e execute o comando `sudo make up`

   - Entre no diretório `microservices/pharmacy` e execute o comando `sudo make up`

   - Entre no diretório `api` e execute o comando `sudo make up`

  ### Descobrindo o host do contêiner
   - No terminal execute o comando `sudo docker ps`
   - Copie o nome do contêiner que você quer descobrir o host.

   - No terminal execute o comando `sudo docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' nome_do_container`
   - Substitua nome_do_container pelo nome do contêiner que copiou.

  #### Atenção :warning:
   - Adicione o host do contêiner do banco de dados na variável de ambiente `MARIADB_ROOT_HOST`
   
   - Adicione o host do contêiner do micro-serviço de produtos na variável de ambiente `GRPC_PRODUCTS_SERVER_URL`

   - Adicione o host do contêiner do micro-serviço de farmácia na variável de ambiente `GRPC_PHARMACY_SERVER_URL`
   
   - Renicie o contêiner para ele ler as novas variáveis  de ambiente, utilize o comando `sudo make restart nome_do_contêiner`

  ### Concedendo privilégios para o usuário mariadb
   Isso é necessário porquê o mariadb não concede permissão de `CREATE, ALTER, DROP` na criação de novos usuários, e sem essas permissões, não será possível realizar as migrações para o banco de dados.
   
   - No terminal execute o comando `sudo docker ps`
   
     Copie o CONTAINER ID do contêiner com o nome do banco de dados que você está trabalhando no momento.

   - No terminal execute o comando `sudo docker exec -it containerid bash`
   
     Substitua o `containerid` pelo CONTAINER ID que copiou.

   - No terminal dentro do contêiner execute o comando `mysql -u root -p` e insira a senha que você definiu na variável de ambiente MARIADB_ROOT_PASSWORD no arquivo .env

   - No terminal do mysql execute o comando `GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO 'MARIADB_USER'@'%'; FLUSH PRIVILEGES;`

   - Saia do terminal do mysql executando o comando `\q` e saia do terminal do contêiner executando o comando `exit`

 ## Realizando as migrações do prisma para o banco de dados
  ### Para o micro-serviço de produtos
   - Entre no diretório microservices/products e execute o comando `yarn prisma migrate dev`
   
  ### Para o micro-serviço de farmácia
   - Entre no diretório microservices/pharmacy e execute o comando `yarn prisma migrate dev`

 ### Pronto, a configuração da aplicação com docker está completa. 🚀
 
 ## Iniciando a aplicação sem o docker
 - Instalando as dependências: entre no diretório api, microservice/pharmacy, microservice/products e execute o comando `yarn`

 - Realizar as migrações para o banco de dados: execute o comando `yarn prisma migrate dev`
 
 - Executando o projeto em desenvolvimento: execute o comando `yarn dev`
 
 ## Consumindo o microserviço
 Para isso, você vai precisar de um cliente de requisições, você pode utilizar o insomnia, postman ou outro de sua preferência para isso.
 
 Aqui está o arquivo em `.json` para você importar no seu cliente de requisições [insomnia enviroment collection](.github/).

 ## Visualizando os dados no banco de dados
 Entre no diretório microservices/pharmacy, microservices/products e execute `yarn prisma studio`.

 O prisma vai abrir uma guia em seu navegador, lá você poderá visualizar os dados.
 
 ## Rotas para a farmácia
 
 | MÉTODO  | ROTA |
| ------------- | ------------- |
| POST  | /createPharmacy  |
| GET  | /getPharmacyByName  |
| GET  | /getAllPharmacys  |
| PUT  | /updatePharmacyData/1  |
| DELETE  | /deletePharmacy/1  |

 ## Rotas para a filial
 
 | MÉTODO  | ROTA |
| ------------- | ------------- |
| POST  | /createSubsidiary/1  |
| GET  | /getSubsidiaryByName  |
| GET  | /getAllSubsidiarys  |
| PUT  | /updateSubsidiaryData/1  |
| DELETE  | /deleteSubsidiary/1  |

 ## Rotas para o produto
 
 | MÉTODO  | ROTA |
| ------------- | ------------- |
| POST  | /createProduct  |
| POST  | /cloneProduct/1  |
| GET  | /getProductsByName  |
| GET  | /getAllProducts  |
| PUT  | /updateProductData/1  |
| DELETE  | /deleteProduct/1  |
