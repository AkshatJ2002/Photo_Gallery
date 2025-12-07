import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Photos = () => {
    const [photo, setphoto] = useState([])
    const [tag, settag] = useState("")
    const [SP] = useSearchParams();
    const id=SP.get("id")
    const fecher=async()=>{
    const data=await axios.get(`https://api.unsplash.com/photos/${id}?client_id=6lD3xg8nh1ZEZRMqw4e-2H8obqb3PesHNdD3LB7niYY`)
    setphoto(data.data)
    settag(data.data.tags[1].title)
  }
  
  

  const [photoss,setphotoss]=useState([])
  const fecherr=async()=> {

      const info=await axios.get(`https://api.unsplash.com/search/photos?query=${tag}&client_id=6lD3xg8nh1ZEZRMqw4e-2H8obqb3PesHNdD3LB7niYY&per_page=30`)
      setphotoss(info.data.results)
  }
  
  useEffect(() => {
    fecher()
  }, [id])
  useEffect(() => {
    if(tag){
    console.log(tag)
    fecherr()}
  }, [tag]);
 
  return (
    <div className='flex flex-row'>
      <div className=' flex flex-col gap-4  px-10'>
        <img src={photo.urls?.raw} alt="" className=' h-132 rounded-3xl'/>
        <div className='rounded-3xl p-2 flex flex-col '>
          <h1 className='font-bold text-xl'>{photo.alt_description}</h1>
          <h1>Author: {photo.user?.name}</h1>
          {/* <Link to={photo.url} className='px-4 py-1 w-16 rounded-md bg-zinc-400'>Visit</Link> */}
        </div>
      </div>
      <div className='rounded-3xl bg-zinc-200 p-8 columns-4 gap-8 '>
      {
            photoss.map((elem)=>(
              <div key={elem.id} className=''>
                <Link to={`/photo?id=${elem.id}`} className='w-full'>
               <img src={elem.urls.thumb} alt="" className='rounded-md mb-8'/>
               </Link>
              </div>
            ))
        }
      </div>
    </div>
    
  );
}

export default Photos;
