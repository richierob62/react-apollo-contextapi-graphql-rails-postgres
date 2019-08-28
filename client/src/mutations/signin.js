import gql from 'graphql-tag'

export default gql`
  mutation($email: String!, $password: String!) {
    signinUser(signinInput: { email: $email, password: $password }) {
      token
      user {
        id
        name
        email
      }
    }
  }
`
