import { useEffect, useMemo, useState } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'

import ALL_POSTS from '../queries/all_posts'
import CREATE_POST from '../mutations/create_post'

export const usePosts = () => {
  // state
  const [allPosts_Filters, setAllPosts_Filters] = useState({})
  const [allPosts_Loading, setAllPosts_Loading] = useState(false)
  const [allPosts_Error, setAllPosts_Error] = useState(null)
  const [allPosts, setAllPosts] = useState([])
  const [createPost_Loading, setCreatePost_Loading] = useState(false)
  const [createPost_Error, setCreatePost_Error] = useState(null)
  const [createdPost, setCreatedPost] = useState(null)

  // queries & mutations
  const { loading, error, data } = useQuery(ALL_POSTS, {
    variables: allPosts_Filters
  })
  const [createPost, { loading: l2, error: e2, data: d2 }] = useMutation(
    CREATE_POST
  )

  useEffect(() => {
    setAllPosts_Loading(!!loading)
    setAllPosts_Error(error)
    if (data) {
      setAllPosts(data.allPosts)
    } else {
      setAllPosts([])
    }

    setCreatePost_Loading(!!l2)
    setCreatePost_Error(e2)
    if (d2) {
      setCreatedPost(d2.createPost)
    } else {
      setCreatedPost(null)
    }
  }, [data, loading, error, d2, l2, e2])

  const addAPost = body => {
    createPost({
      variables: {
        body
      },
      refetchQueries: [
        {
          query: ALL_POSTS,
          variables: allPosts_Filters
        }
      ]
    })
  }

  return {
    allPosts_Loading,
    allPosts_Error,
    allPosts,
    setAllPosts_Filters,
    createPost_Loading,
    createPost_Error,
    createdPost,
    addAPost
  }
}
