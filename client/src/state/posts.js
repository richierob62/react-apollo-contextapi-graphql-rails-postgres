import React, { useMemo, useState } from 'react'

const initialState = []

export const PostsContext = React.createContext([initialState, () => {}])

export default ({ children }) => {
  const [posts, setPosts] = useState(initialState)

  const postsState = useMemo(() => ({ posts, setPosts }), [posts, setPosts])

  return (
    <PostsContext.Provider value={postsState}>{children}</PostsContext.Provider>
  )
}
