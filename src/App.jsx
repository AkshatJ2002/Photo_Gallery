import React from 'react'
import Routers from './Routers'
import Header from './components/Header'
import { Pic_Provider } from './ContextAPI/Pic_context'

const App = () => {
  return (
  <Pic_Provider>
  <Header/>
  <Routers/>
  </Pic_Provider>
  )
}

export default App