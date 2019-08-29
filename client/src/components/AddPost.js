import React, { useMemo, useState } from 'react'

import { usePosts } from '../hooks/usePosts'

export default () => {
  const { savePost } = usePosts()

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
