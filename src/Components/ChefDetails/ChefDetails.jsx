import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';



const ChefDetails = () => {
    
    const { id } = useParams();
    const [chefDetails, setChefDetails] = useState([]);
    useEffect (()=>{
        fetch(`https://mexican-cheifs-server-mehedi001.vercel.app/chefData/${id}`)
        .then (res => res.json())
        .then (data => setChefDetails (data))
    },[])
    return (
        <div>
            <div className='container mx-2 lg:mx-auto flex flex-col items-center lg:flex-row gap-6 mt-20 mb-20'>
            <div className='w-full lg:w-1/2'>
            <img className='w-96 lg:w-full rounded-lg' src={chefDetails.banner_photo} alt="" />
            </div>
            <div className='w-full lg:w-1/2'>

            <div className='flex flex-row-reverse items-center lg:justify-between justify-around'>
                <h1 className='font-bold text-2xl lg:text-6xl'>{chefDetails.name}</h1>
                <img className='h-[100px] w-[100px] rounded-full' src={chefDetails.photo} alt="" />
            </div>
            
            <p className='mt-2 px-2 text-justify'>{chefDetails.bioData}</p>
            <div className=' mt-8 flex flex-col items-center lg:flex-row gap-4'>
            <p className='flex w-40 justify-center items-center gap-1 h-24 inline-block rounded-md bg-emerald-600 p-4 text-white'><span className='font-bold text-3xl'>{chefDetails.like}</span> Likes</p>
            <p className='flex justify-center h-24 w-40 flex-col items-center gap-1 inline-block rounded-md bg-emerald-600 p-4 text-white'><span className='font-bold text-3xl'>{chefDetails.experience} </span> Year Experience</p>
            <div className='flex flex-col bg-emerald-600 h-24 w-40 items-center rounded-md'>
            <p className='flex justify-center w-40 items-center gap-1 rounded-md inline-block py-2 pt-3 text-white'>Total: <span className='font-bold text-3xl'> {chefDetails.totalRecipe}</span> Recipe
             </p>
             <Link to={`/recipe/${chefDetails.id}`} className='btn btn-sm text-warning py-2 btn-link'>  Recipe Details</Link>
            </div>
            </div>
            </div>
        </div>
        
        </div>
    );
};

export default ChefDetails;