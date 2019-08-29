import AddPost from './AddPost'
import React from 'react'
import { usePosts } from '../hooks/usePosts'

export default () => {
  const { loading, error, posts } = usePosts()

  if (loading) return <h1>Posts are Loading</h1>
  if (error) return <h1>Error loading posts</h1>

  return (
    <div>
      <ul>
        {posts.map(p => (
          <li key={p.id}>{`${p.body} by ${
            p.postedBy ? p.postedBy.name : 'unknown'
          }`}</li>
        ))}
      </ul>
      <AddPost />
    </div>
  )
}
