import React from 'react';

const Chef = ({chef}) => {

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chef.photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-primary-content">{chef.name}</h2>
                    {/* <p>{chef.bioData ? chef.bioData.slice(0, 150): 'no data'}</p> */}
                    <p>Experience: {chef.experience} Years</p>
                    <p><span className='font-semibold'>{chef.like}</span> Like</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;