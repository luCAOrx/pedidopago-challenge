# pedidopago-challenge
Desafio em nodejs da pedidopago

## Atenção :warning:
O docker não está funcionando corretamente.

## Requisitos para rodar a aplicação
 - NodeJS latest
 - yarn
 
 ## Iniciando a aplicação
 Para instalar as dependências, entre no diretório api, microservice/pharmacy, microservice/products e execute o comando `yarn`.
 
 Para executar o projeto em desenvolvimento, execute `yarn dev`.
 
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
