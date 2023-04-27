import React from 'react';
import pic from '../assets/pics1.jpg'

const Images = () => {
    return (
        <>
        <h1 className='text-center mt-6 underline text-4xl uppercase tracking-wide font-medium'>Whats being searched</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4'>
        <img src={pic} alt="test img"></img>
        <img src={pic} alt="test img"></img>
        <img src={pic} alt="test img"></img>
        <img src={pic} alt="test img"></img>
        <img src={pic} alt="test img"></img>
        <img src={pic} alt="test img"></img>
        <img src={pic} alt="test img"></img>
        <img src={pic} alt="test img"></img>
            </div>
        </>
    );
}

export default Images;
