import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
const Recipe = () => {
    const data = useLoaderData();
    const recipe = data.recipe;


    const toggleButton = () => {
        toast.success('Added to favourite' )
      };
      
    
    return (
        <div className='container mx-auto p-2 lg:p-0'>

            <div className=' flex gap-2 items-center lg:justify-center mt-6'>
                <div>
                    <img className='h-[100px] w-[100px] rounded-full' src={data.photo} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-6xl'>{data.name}</h1>
                </div>
            </div>



            <h1 className='font-bold text-2xl lg:text-3xl mt-6 text-center'>Total {data.totalRecipe} Recipe </h1>


        <div>
            {
                recipe.map(r => 
                    <div key={r.id} className='rounded-md shadow-lg p-0 lg:p-6 mb-2 lg:mb-4'>
                <h1 className='font-bold text-xl text center'>Recipe Name: {r.name} </h1>
                <p className='mt-4'> ingredients: <span className='font-light'>{r.ingredients}</span> </p>
                <p className='mt-4'> Cooking Method: <span className='font-light'>{r.method}</span> </p>
                <div className='text-right'>
                    <div className="rating mr-4">
                        <input type="radio" name="rating-3" className="mask mask-star " />
                        <input type="radio" name="rating-3" className="mask mask-star" />
                        <input type="radio" name="rating-3" className="mask mask-star " />
                        <input type="radio" name="rating-3" className="mask mask-star " defaultChecked />
                        <input type="radio" name="rating-3" className="mask mask-star " />
                    </div>
                    <button onClick={toggleButton}  title='Add to favorite' className='text-red-500 py-2  text-2xl'><FaHeart /></button>
                    </div>
            </div>
                    )
            }
        </div>

            


        </div>
    );
};

export default Recipe;