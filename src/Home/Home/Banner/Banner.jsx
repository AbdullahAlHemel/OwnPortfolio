import React from 'react';
import CV from '../../../../public/Resume of Abdullah.pdf'


const Banner = () => {
    return (
        <div>
            <div className='flex bg-[#fffaf7]'>
            <div className='w-1/2  my-auto text-center'>
            <h2 className='text-4xl font-bold text-amber-400'>Hi, I am Abdullah</h2>
            <h2 className='text-2xl font-semibold text-cyan-600 mt-3 mb-8'>Junior Web Developer</h2>
            <a className='btn mr-6 btn-outline btn-secondary' href="">Hire me</a>
            <a className='btn btn-outline btn-secondary' href={CV} download>Download CV</a>

            <img src='' alt="" />
            </div>
            
            <div className='p-16 pb-0'>
                <img src='https://i.ibb.co/TqWGH1s/1690760453520-1.jpg' alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;