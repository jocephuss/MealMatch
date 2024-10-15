import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql`
  query profile($username: String!) {
    user(username: $username) {
      _id
      username
      email
      favorite {
        _id
        name
        image
        link
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
