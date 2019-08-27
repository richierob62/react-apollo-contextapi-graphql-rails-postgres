import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import React from 'react'
import SignIn from './components/SignIn'
import { createHttpLink } from 'apollo-link-http'

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:3001/graphql'
  }),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <SignIn />
      <h1>TO DO</h1>
      <h2>display posts</h2>
      <h2>create post if signed in</h2>
      <h2>like if signed in</h2>
    </ApolloProvider>
  )
}

export default App
