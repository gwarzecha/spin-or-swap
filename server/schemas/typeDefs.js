// imoprts the gql tagged template function
const { gql } = require('apollo-server-express');

// create the typeDefs
const typeDefs = gql`
  type Query {
    me: [User]
    users: [User]
  }

  type User {
    _id: ID
    firstName: String
    email: String
  }

  type album {
    title: String
    artist: String
    albumArt: String
    year: Int
    linkToSong: String
  }
`;

// export the typeDefs
module.exports = typeDefs;