import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';

const AllChefs = () => {

    const [allChefs, setAllChefs] = useState([]);

    useEffect (() => {
        fetch('http://localhost:5000/chefData')
        .then(res => res.json())
        .then(data => setAllChefs(data))
    },[])
    return (
        <div className='container mx-auto mb-12'>
            <h3 className='mt-5 text-center text-5xl font-semibold'>Let's Explore <br /> <span className='text-warning'>Chefs & Recipe</span></h3>
            <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 mt-3'>
            {
                allChefs.map (chef => <Chef
                key={chef.id}
                chef={chef}
                ></Chef>) 
            }
            </div>
        </div>
    );
};

export default AllChefs;