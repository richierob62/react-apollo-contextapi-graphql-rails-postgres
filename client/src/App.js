import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Posts from './components/Posts'
import React from 'react'
import SignIn from './components/SignIn'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token
    }
  }
})

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <SignIn />
      <Posts />
    </ApolloProvider>
  )
}

export default App
