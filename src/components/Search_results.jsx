import React from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Search_results = () => {
    const [sq]=useSearchParams();
    const query=sq.get("query")
      const [photoss,setphotoss]=useState([])
    console.log(query)


    const fecherr=async()=> {

        const info=await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=6lD3xg8nh1ZEZRMqw4e-2H8obqb3PesHNdD3LB7niYY&per_page=30`)
        setphotoss(info.data.results)
    }
    useEffect(() => {
      fecherr()
    }, [query])
    



  return (
    <div  className='p-8 columns-4 gap-8'>
        {
            photoss.map((elem)=>(
              <div key={elem.id} className=''>
                <Link to={`/photo?id=${elem.id}`} className='w-full'>
               <img src={elem.urls?.small_s3} alt="" className='rounded-md mb-8'/>
               </Link>
              </div>
            ))
        }
    </div>
  )
}

export default Search_results