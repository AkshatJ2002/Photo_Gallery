import React from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

export const Pic_Context=createContext(null)
export const Pic_Provider = ({children}) => {

    const [photo,setphoto]=useState([])
    const [page, setpage] = useState(1)
    const fecher=async()=> {
        const data=await axios.get(`https://api.unsplash.com/photos?client_id=6lD3xg8nh1ZEZRMqw4e-2H8obqb3PesHNdD3LB7niYY&per_page=10&page=${page}`)
        setphoto((prev)=>[...prev,...data.data]);
        
    }
    useEffect(() => {
      fecher()
    }, [page])




    const infintescroll=async () => {
        try {
          if(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight){
            setpage((prev)=>prev+1)
          }
        } catch (error) {
          console.log("error");
        }
    }
useEffect(() => {
  window.addEventListener("scroll",infintescroll);

  return () => {
    window.removeEventListener("scroll",infintescroll)
  }
}, [])

  return (
    <Pic_Context.Provider value={photo}>
        {children}
    </Pic_Context.Provider>
  )
}

