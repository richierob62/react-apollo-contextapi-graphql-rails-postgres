import React, { useMemo, useState } from 'react'

const initialState = {}

export const WidgetContext = React.createContext([initialState, () => {}])

export default ({ children }) => {
  const [widget, setWidget] = useState(initialState)

  const widgetState = useMemo(() => ({ widget, setWidget }), [
    widget,
    setWidget
  ])

  return (
    <WidgetContext.Provider value={widgetState}>
      {children}
    </WidgetContext.Provider>
  )
}
