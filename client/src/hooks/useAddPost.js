import CREATE_POST from '../mutations/create_post'
import { useMutation } from '@apollo/react-hooks'

export const useAddPost = () => {
  // mutation to add a post
  const [createPost, { loading, error }] = useMutation(CREATE_POST)

  const savePost = body => {
    createPost({
      variables: {
        body
      }
    })
  }

  return {
    loading,
    error,
    savePost
  }
}
