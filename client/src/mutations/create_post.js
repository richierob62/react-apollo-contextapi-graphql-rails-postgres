import gql from 'graphql-tag'

export default gql`
  mutation($body: String!) {
    createPost(body: $body) {
      id
      body
      postedBy {
        name
      }
    }
  }
`
