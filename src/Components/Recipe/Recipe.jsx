import React from 'react';

const Recipe = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center'>
 <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                <h2 className='font-bold text-3xl'>Chef Popular Recipe</h2>
                    <h2 className="card-title">Recipe:</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary mx-auto">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;