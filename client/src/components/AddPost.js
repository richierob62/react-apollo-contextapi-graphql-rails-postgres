import React, { useState } from 'react'

import { useAddPost } from '../hooks/useAddPost'

export default () => {
  const { savePost } = useAddPost()

  const [val, setVal] = useState('')

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
