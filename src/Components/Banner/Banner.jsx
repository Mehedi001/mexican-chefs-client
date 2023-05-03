import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-[400px] lg:min-h-[600px]" style={{ backgroundImage: `url("https://images.pexels.com/photos/7613554/pexels-photo-7613554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold tracking-tighter text-center">HOLA, GENTE <span className='tracking-widest'>MEXICANA</span></h1>
                    <p className="mb-5">Find Your All Favourite Food with Expert Chef's in One Place !!!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;