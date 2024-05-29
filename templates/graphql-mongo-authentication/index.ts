import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";

import mongoose from "mongoose";
import "dotenv/config";
import { typeDefs } from "./types";

// Create a new ApolloServer instance, pass in the schema data
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Getting the URI from the .env file
const uri: any = process.env.URI;

try { 
    // Connect to the MongoDB database
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const connection = mongoose.connection;

    connection.once("open", () => {
        console.log("MongoDB database connection established successfully");
    });
} catch (error) {
    console.log(error);
}

// Start the server
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
