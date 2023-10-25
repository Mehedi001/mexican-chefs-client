import React, { useContext, useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ImSpinner } from "react-icons/im";

const AllChefs = () => {

    const [allChefs, setAllChefs] = useState([]);

    const {loading, setLoading} = useContext(AuthContext);

    useEffect (() => {
        setLoading(true)
        fetch('https://mexican-cheifs-server-mehedi001.vercel.app/chefData')
        .then(res => res.json())
        .then(data => {
            setAllChefs(data);
            setLoading(false)

        })
        
    },[])
    if (loading) {
        return (<div className='my-48'><ImSpinner className='text-9xl mx-auto animate-spin '/></div>)
    }
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