import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const SIGNIN_USER = gql`
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

export default () => {
  const [signinUser, { loading, error, data }] = useMutation(SIGNIN_USER)

  return (
    <>
      <button
        onClick={() =>
          signinUser({
            variables: {
              email: 'harry@harry.com',
              password: '123456'
            }
          })
        }
      >
        <h2>Sign In</h2>
      </button>
      {loading && 'Loading...'}
      {error && 'Error...'}
      {data && (
        <div>
          <div>{`data.signinUser.token: ${data.signinUser.token}`}</div>
          <div>{`data.signinUser.user: ${JSON.stringify(
            data.signinUser.user,
            null,
            2
          )}`}</div>
        </div>
      )}
    </>
  )
}
