import React from 'react'
import SIGNIN_USER from '../mutations/signin'
import { useMutation } from '@apollo/react-hooks'

export default () => {
  const [signinUser, { loading, error, data }] = useMutation(SIGNIN_USER)

  if (data) {
    localStorage.setItem('token', data.signinUser.token)
  }

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
