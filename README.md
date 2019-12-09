# BeCode: NodeJs course

> 🔨 REST API for a todo list with node es6 and mongo

* * *

## About

In this course, we will see step by step how to create a server node with a mongoDB database. The server will be used as an API connected to its db.

## Usage

The server will only be used to send data to a future client but not to send a displayable result.

it will be equipped with several routes allowing it to perform different actions such as creating, editing or deleting a todo list.

## Installation/Development

The API is developed in `node.js`.
The code is written with `ES2015` standards.
It use **MongoDB** as database.
It use the **docker and docker-compose** to build and start stuff for the endpoints.

To run it locally for testing and/or improve the codebase, enter the following commands:

1. **Clone** the repository and navigate into it.
2. You will need some external files in your repository:
	1. The file `server/.env` that you will create. it contain this following resources ->
	````
	HOST_PORT=5000
	HOST_URL=http://localhost
	````	
3. `npm install` (install project's dependencies)
4. `npm run install:all` (install all child project's dependencies)
5. `npm run start:build` (build and start all project's)

December 2019, [bertrand](https://github.com/BertrandMarlair).
