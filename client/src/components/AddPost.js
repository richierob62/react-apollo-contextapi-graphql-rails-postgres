import React, { useState } from 'react'

import { usePosts } from '../hooks/usePosts'

export default () => {
  const [val, setVal] = useState('')

  const { savePost } = usePosts()

  return (
    <div>
      <form
        onSubmit={() => {
          savePost(val)
          setVal('')
        }}
      >
        <input value={val} onChange={e => setVal(e.target.value)} />
        <button>Save</button>
      </form>
    </div>
  )
}
