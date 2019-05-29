var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    testing: String
    id: Int
    boss: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
    testing: () => {
        return 'Testing';
    },
    id: () => {
        return 5;
    },
    boss: () => {
        return "Nordine";
    }
};

var app = express();
app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, '0.0.0.0');
console.log('Running a GraphQL API server at 0.0.0.0:4000');
