import React from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Header = () => {
  const [search, setsearch] = useState("")
  const navigate=useNavigate();
  const query=(e)=>{
    e.preventDefault()
    search&&navigate(`/search?query=${search}`)
  }
  return (
    <div className='w-full px-16 py-6 flex flex-row gap-32'>
        <Link to="/"><img src="" alt="Photo Gallery" /></Link>
        <form onSubmit={query} className='w-150'>
        <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder='Search' className='bg-zinc-200 p-2 px-4 w-135 rounded-2xl outline-none'/>
        <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Header