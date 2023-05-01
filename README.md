# RadioLogger

[![Node.js Version](https://img.shields.io/node/v/your-package-name)](https://nodejs.org/en/)
[![Express.js Version](https://img.shields.io/npm/v/express)](https://www.npmjs.com/package/express)
[![Mongoose Version](https://img.shields.io/npm/v/mongoose)](https://www.npmjs.com/package/mongoose)
[![MongoDB Version](https://img.shields.io/npm/v/mongodb)](https://www.npmjs.com/package/mongodb)

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.nodejs.com)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com)
[![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://www.nodejs.com)

This project is an amateur radio and shortwave radio logging application built using Node.js, Express.js, Mongoose, and MongoDB.

## Table of Contents

- [RadioLogger](#radiologger)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Documentation](#api-documentation)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Amateur Radio "Ham" Logging
- Shortwave Radio Logging
- MW DX Logging
- Scanner Logging
- Contest Logging
- QSL Card Database

## Requirements

There are some requirements and prerequisites to developing this project.

- Node.js version (e.g., v14.0.0 or higher)

  Note: We suggest using the latest LTS version, shown on NodeJS's current download page.

- MongoDB version (e.g., v4.0.0 or higher)

## Installation

Assuming you already have MongoDB and NodeJS installed, here are the installation requirements

1. Clone this repository
2. Change to the project directory
3. Install client dependencies
4. Install server dependencies
5. Create a `.env` file in the project root with the following contents
6. Start the mongod server with `mongod`
7. Start the application
   a. Change to /src/server
   b. Start the server with npm start
   c. Wait till node & nodemon start and connect to mongoose / MongoDB
   d. Go to your browser and navigate to localhost:3000

## Usage

Provide detailed instructions on how to use your application, including examples of the main features.

## API Documentation

Provide a link to your API documentation, or include a brief overview of the available endpoints and their functionality.

## Testing

We use Mocha and Chai to do our testing

1. Run tests:

- Run npm test

## Contributing

We have a list of TODO's in [here](TODO.md).  If you would like to work on any of these, let us know which one you would like to work on.
Please read the [Contributing](CONTRIBUTING.md) document. If you think it will take you more than 3 days/72 hours to complete a task let us know that as well so we can keep issues from going stale. Please submit all PR's with a screenshot and assign the PR to yourself.

## License

Currently we are using the [GPL-3.0-only](https://opensource.org/license/gpl-3-0/) license, but may adopt another in the future such as MIT.
