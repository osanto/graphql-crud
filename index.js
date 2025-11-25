import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import schema from './data/schema.js';
import resolvers from './data/resolvers.js';

dotenv.config();

const PORT = process.env.PORT || 8080;
const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?appName=${process.env.MONGO_APP}`;

const app = express();

// Connect to MongoDB before setting up routes
mongoose.connect(dbURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });

const root = resolvers;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  customFormatErrorFn: (error) => {
        console.error('GraphQL Error:', error);
        return error;
  }
}));

// Wait for MongoDB connection before listening
mongoose.connection.once('connected', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});