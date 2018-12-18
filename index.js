const { ApolloServer } = require('apollo-server');

const typeDefs = require('./src/types.js');
const resolvers = require('./src/resolvers.js');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
