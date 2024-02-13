<div align=center>

<img src="https://github.com/melissaveraherbst/envelope-budget-api/assets/84316275/a1c47de7-a75b-4b8c-81ad-efe9580e586b" width=30% />

# Envelope Budget API

**A Codecademy Pro project for the Backend Engineer Career Path**  

![Static Badge](https://img.shields.io/badge/JavaScript-grey?style=flat-square&logo=javascript)
![Static Badge](https://img.shields.io/badge/Node.js-grey?style=flat-square&logo=node.js)
![Static Badge](https://img.shields.io/badge/Express.js-grey?style=flat-square&logo=express)
![Static Badge](https://img.shields.io/badge/Postman-grey?style=flat-square&logo=postman)
![Static Badge](https://img.shields.io/badge/Codecademy%20Project-grey?style=flat-square&logo=codecademy)

<hr>
</div>

The Envelope Budget API is designed to manage a portfolio budget using a budget envelope strategy. It allows you to create, read, update, and delete envelopes to help them track how much money you're spending on certain categories in your budget.

> [!NOTE]
> This API is part of a larger full-stack project. The complete project comprises a database, a front-end interface, and this API to handle the backend functionalities.
>
> While the full-stack project is in progress, the API has been developed and made available here. The database and front-end components will most likely reside in separate GitHub repositories for which I will provide a link to in this repository on completion.

## Getting Started

### Prerequisites

Node.js installed on your machine

### Installation

1. Clone the repository:

    ```bash
    git clone <https://github.com/yourusername/budget-api.git>
    ```

2. Navigate to the project directory:

    ```bash
    cd budget-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the app

To run the application locally:

```bash
npm start
```

Once the app is running, you can access the API at **<http://localhost:3000/>**

## API Endpoints

The following endpoints are available:

* Retrieve all envelopes:  
GET /api/v1/envelopes

* Retrieve a specific envelope by ID:  
GET /api/v1/envelopes/{id}

* Create a new envelope:  
POST /api/v1/envelopes

* Update an existing envelope by ID:  
PUT /api/v1/envelopes/{id}

* Delete an envelope by ID:  
DELETE /api/v1/envelopes/{id}

* Transfer money between envelopes:  
POST /api/v1/envelopes/{senderID}/transfer/{recipientID}

## Usage

Use a tool like Postman or cURL to interact with the API endpoints.
Ensure proper authentication and data validation for production use.

## Acknowledgements

This API was initially developed as part of the Backend Engineer Path on Codecademy. Course projects serve as the foundation, and I continuously strive to expand and enhance them to deepen my understanding and proficiency in utilizing the technologies covered.

## Contributions

Contributions are welcome! I apreciate any recommendations for improvement.

Made with 💛 by Melissa V. Herbst
