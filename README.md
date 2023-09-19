# TaskManager-Server

TaskManager-Server is a server application developed using Express.js and PostgreSQL. This project provides functionality for managing tasks and implements a user authentication and registration system.

## Features

The TaskManager-Server project includes the following core features:

1. **CRUD Operations for Tasks:**
   - Create new tasks.
   - Read tasks (retrieve task lists and individual task information).
   - Update task information.
   - Delete tasks.

2. **User Authentication and Registration:**
   - Register new users 
   - Authenticate users
   
## Technologies and Tools

The TaskManager-Server project utilizes the following technologies and tools:

- **Express.js:** A framework for building JavaScript server applications, used for handling HTTP requests and routing.

- **PostgreSQL:** A relational database used to store information about tasks and users.

## Project Structure

The TaskManager-Server project is organized as follows:

- **Routes:** Define API routes and request handlers for each functionality, such as create, read, update, and delete tasks.

- **Controllers:** Handle requests, interact with the database, and return data to the client.

- **Middleware:** Includes middleware, such as authentication and authorization, to ensure application security.

## Getting Started

To use the TaskManager-Server project, you need to:

1. Install Node.js and PostgreSQL on your server.

2. Clone the repository from GitHub `git clone https://github.com/Wihctoh/TaskManager-Server.git` and install dependencies by running the following commands:
3. `npm install`
4. starting the application `nodemon index`
5. change db.js for connect you own DB.

