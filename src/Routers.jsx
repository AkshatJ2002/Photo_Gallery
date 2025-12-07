import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Photos from './components/Photos'
import Search_results from './components/Search_results'
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/photo' element={<Photos/>}/>
        <Route path='/search' element={<Search_results/>}/>
    </Routes>
  )
}

export default Routers