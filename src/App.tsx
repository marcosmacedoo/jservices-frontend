import React from 'react'

import { MyRoutes } from './routes'

import { GlobalProvider } from './contexts/GlobalContext'

import './styles/global.css'

function App() {
  return (
    <GlobalProvider>
      <MyRoutes />
    </GlobalProvider>
  )
}

export default App
