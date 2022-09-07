import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const container = document.getElementById('root')
if (container === undefined || container === null) {
  throw new Error('container is not defined')
}
const root = createRoot(container)
root.render(<App />)
