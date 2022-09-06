import * as React from 'react'
import {useResponsive} from './hooks/useResponsive';

const App = () => {
  React.useEffect(() => {
    console.log('hi')
  })
  const userBrowser = useResponsive('(min-width: 768px)')
  return <>
    <h1>Hello World!</h1>
    <p>{`cssMediaQuery: ${userBrowser.cssMediaQuery}`}</p>
    <p>{`The view port is ${userBrowser ? 'at least' : 'less than'} 768 pixels wide`}</p>
  </>
}

export default App
