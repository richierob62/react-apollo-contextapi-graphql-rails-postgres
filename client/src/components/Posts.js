import AddPost from './AddPost'
import React from 'react'
import { usePosts } from '../hooks/usePosts'

export default () => {
  const { allPosts_Loading, allPosts_Error, allPosts } = usePosts()

  if (allPosts_Loading) return <h1>Posts are Loading</h1>
  if (allPosts_Error) return <h1>Error loading posts</h1>

  return (
    <div>
      <ul>
        {allPosts.map(p => (
          <li key={p.id}>{`${p.body} by ${
            p.postedBy ? p.postedBy.name : 'unknown'
          }`}</li>
        ))}
      </ul>
      <AddPost />
    </div>
  )
}
