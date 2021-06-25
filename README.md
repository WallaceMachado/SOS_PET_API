<h1> SOS_PET_API </h1>

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=sos_pet_api&uri=https%3A%2F%2Fgithub.com%2FWallaceMachado%2FSOS_PET_API%2Fblob%2Fmaster%2FInsomnia_2021-06-25.json)

 
> status:	🚧  SOS_PET_API 🚀 developing...  🚧

Node backend API with typescript and express, serving the front-end of the social network sos_pet 
(front repository: https://github.com/erikaperciliano/SOS-PET-new-version-).

Done so far: Allows users to register


Table of Contents
=================
* <p><a href="#prerequisites">Prerequisites</a> </p>  
* <p><a href="#setting-database">Setting Database</a></p>  
* <p><a href="#starting-project">Starting Project</a></p>



## Prerequisites

Before starting, you will need to have the following tools installed on your machine:
* [Git](https://git-scm.com) 
* [Node.js](https://nodejs.org/en/)
* [Postgres](https://www.postgresql.org/)

Besides, it's good to have an editor to work with the code like: [VSCode](https://code.visualstudio.com/)


## Setting Database

Create database on postgres:

* sos_pet
* sos_pet_test

## Starting Project

```bash
# Clone este repositório
$ git clone <https://github.com/WallaceMachado/SOS_PET_API.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd SOS_PET_API

# Instale as dependências
$ npm install

or

$ yarn


# Server is running:3333 - acesse <http://localhost:3333>
```


make changes to the database connection data in the ormconfig.json file:
