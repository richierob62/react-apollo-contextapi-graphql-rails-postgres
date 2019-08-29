import PostsState from './posts'
import React from 'react'
import WidgetState from './widget'

// add states here
const allStates = [PostsState, WidgetState]

export default ({ children }) => {
  let output = null

  allStates.forEach(State => {
    if (!output) {
      output = <State>{children}</State>
    } else {
      output = <State>{output}</State>
    }
  })

  return output
}
