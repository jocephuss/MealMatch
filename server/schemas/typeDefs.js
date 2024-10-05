// profile will be user's info
// 
const typeDefs = `
type Profile {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile(profileId: ID!): Profile
  }

`

// might need to have a way to add favorites here, to be continued


module.exports = typeDefs;

