const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const mongoose = require('mongoose');

const resolvers = require('./resolvers');

mongoose.connect('mongodb://localhost:27017/graphqllinkedin',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
});

server.start();
console.log('Server is on! 🚀');