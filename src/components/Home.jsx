import { Link } from 'react-router-dom'
import { Pic_Context } from '../ContextAPI/Pic_context'
import { useContext } from 'react'


const Home = () => {
   const data=useContext(Pic_Context)
   console.log(data)
  return (
    <div  className='p-8 columns-4 gap-8'>
        {
            data.map((elem)=>(
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

export default Home

