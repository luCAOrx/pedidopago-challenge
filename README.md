# pedidopago-challenge
Desafio em nodejs da pedidopago

## Atenção :warning:
O docker não está funcionando corretamente.

## Requisitos para rodar a aplicação
 - NodeJS latest
 - yarn
 
 ## Iniciando a aplicação
 Primeiramente em cada ditetório, você precisa rodar o comando `yarn` para instalar todas as dependências.
 
 Em desenvolvimento `yarn dev`
 
 Em produção `yarn start`
 
 ## Consumindo a aplicação
 Você pode utilizar o insomnia, postman ou outro de sua preferência para isso.
 
 Aqui está o arquivo em json para você importar no seu cliente de requisições [insomnia enviroment collection](.github/).
 
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
