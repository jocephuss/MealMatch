const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'flockchen';
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate profile.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.profile = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    console.log("signToken: ", signToken)
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
