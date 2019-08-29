import { useContext, useEffect } from 'react'

import ALL_POSTS from '../queries/all_posts'
import { PostsContext } from '../state/posts'
import { useQuery } from '@apollo/react-hooks'

export const usePosts = (filters = {}) => {
  // validate filters
  const validFilters = {}
  if (filters.filter) validFilters['filter'] = filters.filter
  if (filters.count) validFilters['count'] = filters.count
  if (filters.skip) validFilters['skip'] = filters.skip

  // state via context
  const { posts, setPosts } = useContext(PostsContext)

  // query for all posts matching filter
  const { loading, error, data } = useQuery(ALL_POSTS, {
    variables: validFilters
  })

  useEffect(() => {
    if ('allPosts' in data) {
      setPosts(data.allPosts)
    }
  }, [loading, error, data])

  return {
    loading,
    error,
    posts
  }
}
