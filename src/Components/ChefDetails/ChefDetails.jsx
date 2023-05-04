import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {FaRegBookmark} from 'react-icons/fa';

const ChefDetails = () => {
    
    const { id } = useParams();
    const [chefDetails, setChefDetails] = useState([]);
    useEffect (()=>{
        fetch(`http://localhost:5000/chefData/${id}`)
        .then (res => res.json())
        .then (data => setChefDetails (data))
    },[])
    return (
        <div className='container mx-2 lg:mx-auto flex flex-col lg:flex-row gap-6 mt-20 mb-20'>
            <div className='w-full lg:w-1/2'>
            <img className='w-96 lg:w-full rounded-lg' src={chefDetails.banner_photo} alt="" />
            </div>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-row-reverse items-center lg:justify-between justify-around'>
                <h1 className='font-bold text-2xl lg:text-6xl'>{chefDetails.name}</h1>
                <img className='h-[100px] w-[100px] rounded-full' src={chefDetails.photo} alt="" />
            </div>
            <p className='mt-2 text-justify'>{chefDetails.bioData}</p>
            <p className='mt-6'>Total: <span className='font-bold text-2xl'>{chefDetails.like}</span> Likes</p>
            <p className='mt-2'>Experience Year: <span className='font-bold text-2xl'>{chefDetails.experience}</span> Year</p>
            <p className='mt-2'>Total Recipe: <span className='font-bold text-2xl'> {chefDetails.totalRecipe}</span> Recipe </p>
            </div>
        </div>
    );
};

export default ChefDetails;