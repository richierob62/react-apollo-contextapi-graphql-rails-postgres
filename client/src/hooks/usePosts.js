import { useContext, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'

import ALL_POSTS from '../queries/all_posts'
import CREATE_POST from '../mutations/create_post'
import { PostsContext } from '../state/posts'

export const usePosts = (filters = {}) => {
  // validate filters
  const validFilters = {}
  if (filters.filter) validFilters['filter'] = filters.filter
  if (filters.count) validFilters['count'] = filters.count
  if (filters.skip) validFilters['skip'] = filters.skip

  // state via context
  const { posts, setPosts } = useContext(PostsContext)

  // query for all posts matching filter
  const {
    loading: loadingPosts,
    error: loadingPostsError,
    data: { allPosts }
  } = useQuery(ALL_POSTS, {
    variables: validFilters
  })

  useEffect(() => {
    if (allPosts) {
      setPosts(allPosts)
    }
  }, [allPosts, loadingPosts, loadingPostsError])

  // mutation to add a post
  const [
    createPost,
    { loading: addingPost, error: addingPostError, data: addedPost }
  ] = useMutation(CREATE_POST)

  const savePost = body => {
    createPost({
      variables: {
        body
      }
      // refetchQueries: [
      //   {
      //     query: ALL_POSTS,
      //     variables: filters
      //   }
      // ]
    })
  }

  return {
    loadingPosts,
    loadingPostsError,
    posts,
    addingPost,
    addingPostError,
    savePost
  }
}
