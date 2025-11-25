# GraphQL Server - Product API

A GraphQL API server built with Node.js, Express, GraphQL, and MongoDB for managing products with full CRUD operations.

## Features

- GraphQL API with queries and mutations
- Create, read, update, and delete products
- MongoDB database integration with Mongoose
- GraphQL Playground for interactive testing
- Environment variable support for sensitive data
- Error handling and validation
- ES6 modules with Babel transpilation

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB Atlas account
- npm or yarn

### Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd graphql-server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file based on `.env.example` and fill in your MongoDB credentials:

```
PORT=8080
MONGO_USER=yourUser
MONGO_PASSWORD=yourPassword
MONGO_HOST=your-cluster.mongodb.net
MONGO_DB=yourDatabase
MONGO_APP=graphql-app
```

### Running the Server

For development (with auto-reload):

```bash
npm start
```

The server will run on `http://localhost:8080/graphql`

## Usage

Visit `http://localhost:8080/graphql` in your browser to access the GraphQL Playground.

### Example Queries

**Get a product by ID:**
```graphql
query {
  getProduct(id: "65abc123def456789") {
    id
    name
    description
    price
    soldout
    inventory
    stores {
      store
    }
  }
}
```

**Get all products:**
```graphql
query {
  getAllProducts {
    id
    name
    price
    inventory
  }
}
```

### Example Mutations

**Create a product:**
```graphql
mutation {
  createProduct(input: {
    name: "Widget A"
    description: "A useful widget"
    price: 29.99
    soldout: ONSALE
    inventory: 100
    stores: [{store: "Store 1"}]
  }) {
    id
    name
    price
  }
}
```

**Update a product:**
```graphql
mutation {
  updateProduct(input: {
    id: "65abc123def456789"
    price: 39.99
    inventory: 50
  }) {
    id
    name
    price
    inventory
  }
}
```

**Delete a product:**
```graphql
mutation {
  deleteProduct(id: "65abc123def456789")
}
```

## Project Structure

```
graphql-server/
├── index.js                 (entry point, server setup)
├── package.json
├── .env.example             (environment variables template)
├── .babelrc                 (Babel configuration)
├── .gitignore
└── data/
    ├── productModel.js      (MongoDB schema & model)
    ├── resolvers.js         (GraphQL resolvers for queries/mutations)
    └── schema.js            (GraphQL schema definition)
```

## Technologies

- **Express.js** - Web framework
- **GraphQL** - API query language
- **express-graphql** - GraphQL middleware
- **Mongoose** - MongoDB object modeling
- **Babel** - JavaScript transpiler
- **dotenv** - Environment variable management
- **Nodemon** - Auto-reload for development

## License

MIT
