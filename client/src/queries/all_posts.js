import gql from 'graphql-tag'

export default gql`
  query($filter: PostFilter, $count: Int, $skip: Int) {
    allPosts(filter: $filter, count: $count, skip: $skip) {
      id
      body
      postedBy {
        id
        name
      }
    }
  }
`
