import * as React from 'react'
import { useResponsive } from './hooks/useResponsive'

const App = () => {
  React.useEffect(() => {
    console.log(
      'COMPONENT RENDER----------------------------------------------------------'
    )
  })
  const userBrowser = useResponsive()
  return (
    <>
      <h1>Hello World!</h1>
      <p>{`cssMediaQuery: ${userBrowser.query}`}</p>
    </>
  )
}

export default App
