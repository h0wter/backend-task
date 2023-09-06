## Application Description:
The backend application is built using such technologies: Express, Postgres, Sequelize, Docker and implements the principles of REST API.

API for CRUD operations of users is created:
 - Ability to create a user.
 - Ability to get all users.
 - Ability to get users of a specified role.
 - Ability to update user data.
 - Ability to delete a user.

To test the API, you need to use the URL: `http://localhost:3000/api`.

In the repository is a JSON file with a [Postman collection](https://github.com/h0wter/backend-task/blob/main/Backend-UserProfiles.postman_collection.json) for ease of testing.

## Routes:

1. GET /users - To get all users.
2. POST /users - To add a user.
3. GET /users?role=admin - To get a user with a specified role.
4. GET /users/:userId - To get a user by id.
5. PUT /users/:userId - To update a user by id.
6. DELETE /users/:userId - To delete a user by id.

## Run instructions:

1. Make sure you have Docker installed on your computer. [Download and install](https://www.docker.com/products/docker-desktop/) if necessary.
2. Start docker-container with the `docker-compose up` command
3. To stop the container, use the `docker-compose down` command.
