# RadioLogger Development Setup

## Table of Contents

- [RadioLogger Development Setup](#radiologger-development-setup)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Project Structure and Setup](#project-structure-and-setup)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
  - [Deployment](#deployment)
  - [Testing and Debugging and Logging](#testing-and-debugging-and-logging)
  - [API Documentation](#api-documentation)
  - [Code of Conduct and Community Guidelines](#code-of-conduct-and-community-guidelines)

## Prerequisites

This project requires a NodeJS and MongoDB installation. We suggest using the current LTS version of NodeJS.

Create a MongoDB installation
Create a MongoDB user with its id and username
Create a MongoDB database called 'radiologger'

## Installation

These dependencies can be installed using npm, the Node Package Manager.

For example, to install the dependencies for the client directory, navigate to the directory in the terminal and run the command npm install. This will install all the dependencies listed in the package.json file for the client directory. Similarly, the dependencies for the server directory can be installed by navigating to the directory and running the same command. To do this,

1. Clone or Fork the repository to your local machine.
2. Navigate to the client directory and run npm install to install the client dependencies.
3. Navigate to the server directory and run npm install to install the server dependencies.

## Configuration

The following configuration files are included with the application:

.env: contains environment variables that are used to configure the server. You will need to create this file and set the appropriate values for your environment.

There is MONGO_

## Project Structure and Setup

The project is organized as follows:

- Frontend: React application
  - `src` folder contains the main React components and application logic
- Backend: Express application
  - `server.js` file sets up the Express server and connects to the database
- Database: MongoDB
  - Stores data for users, posts, likes, and comments
- `package.json` file lists all dependencies and scripts

To set up the project locally, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Start the database server: `npm run db-start`

## Frontend

The frontend is built using Bootstrap 5 and FontAwesome.  Express server handles the client side routing.

## Backend

The backend is built using Express, Node.js, and MongoDB.

- Routes:
  - `server.js` file sets up the Express server and connects to the database
- Models:
  - `models` folder contains the Mongoose models for users, posts, likes, and comments
- Controllers:
  - `controllers` folder contains the controller functions for handling API requests

Mongoose is used as the ORM for MongoDB.

## Database

The database is MongoDB, which stores data for users, posts, likes, and comments.

- Users:
  - `src/models/user.js` file contains the User schema and model

## Deployment

To deploy the application, follow these steps:

1. Set up a production environment (e.g., using Vercel or Netlify)
2. Build the frontend and backend: `npm run build`
3. Configure environment variables and secrets for sensitive data
4. Deploy the application and database

## Testing and Debugging and Logging

- Use mocha and chai for testing
- Use Prettier and ESLint for code formatting and linting

## API Documentation

- Document the available API endpoints, request methods, expected responses, and any authentication or authorization requirements

## Code of Conduct and Community Guidelines

- Include a section on the project's code of conduct and community guidelines to ensure a positive and inclusive contribution environment.
