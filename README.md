<h1> SOS_PET_API </h1>

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=sos_pet_api&uri=https%3A%2F%2Fgithub.com%2FWallaceMachado%2FSOS_PET_API%2Fblob%2Fmaster%2FInsomnia_2021-06-25.json)

 
> status:	🚧  SOS_PET_API 🚀 developing...  🚧

Node backend API with typescript and express, serving the front-end of the social network sos_pet 
(front repository: https://github.com/erikaperciliano/SOS-PET-new-version-).


### Features

- [x] Allows users to register


## Table of Contents

* <p><a href="#prerequisites">Prerequisites</a> </p>  
* <p><a href="#setting-database">Setting Database</a></p>  
* <p><a href="#starting-project">Starting Project</a></p>
* <p><a href="#routes">Routes</a></p>
* <p><a href="#running-the-tests">Running the tests</a></p>
* <p><a href="#autor">Autor</a></p>



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
# Clone this repository
$ git clone https://github.com/WallaceMachado/SOS_PET_API.git

# Access the project folder in the terminal/cmd
$ cd SOS_PET_API

# Install dependencies
$ npm install

or

$ yarn

# Make changes to the database connection data in the ormconfig.json file
$ yarn typeorm migration:run

# Server is running:3333 - acesse <http://localhost:3333>
```

## Routes

| Route  |  HTTP Method  | Params  |  Description  |  Auth Method  |
| :---: | :---: | :---: | :---: | :---: |
|  /users |  POST |  Body with user's name, email, password, username and user_type  |  Create a new User |  ❌ |

## Running the tests

[Jest](https://jestjs.io/) was the choice to test the app, to run:

```bash

$ yarn test

```

## Autor


Feito com ❤️ por [Wallace Machado](https://github.com/WallaceMachado) 🚀🏽 Entre em contato!

[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/wallace-machado-b2054246/) 
