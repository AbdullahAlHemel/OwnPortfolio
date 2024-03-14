import React from 'react';
import web from '../../../../public/web/Screenshot (203).png'
import { GiArmoredBoomerang } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certification = () => {
    AOS.init({duration:1000})
    return (<>
            <h2 data-aos="fade-up" className=' text-center font-Headline font-black text-2xl uppercase mt-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600 '>Certification</h2>

        <div className='flex md:flex-row flex-col-reverse max-w-6xl m-auto py-2 md:py-8 gap-5 md:gap-20 mb-5'>
            <div  data-aos="zoom-in-right"  className=' w-full md:w-1/2 text-center my-auto font-body3 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-violet-500 '>
            <h2 className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-violet-500 '>Complete web Development Course</h2>
            <h2 className='text-2xl font-body4 border-b border-[1px] w-80 m-auto my-2'></h2>
            <p className='font-body4 w-80 md:w-1/2 text-center m-auto leading-4 mt-2 py-1.5'>A Professional Course on web design and development on <span className='text-amber-600'>6 month </span></p>
            <h2 className='text-xl mt-1 text-indigo-600'><span className='text-sm mr-1 text-black'>By </span><a href="https://www.programming-hero.com/">Programming Hero</a></h2>
            <div className='w-24 flex mx-auto'>
                <a href="https://drive.google.com/file/d/1f_8NX0vKvvXeFtBhsO6QrxgT7jSJlVzS/view?usp=sharing" className=' border border-indigo-600 rounded text-indigo-700 p-1 pr-3 pb-2 hover:scale-110 duration-150 hover:shadow-lg hover:text-white hover:bg-indigo-800 mt-3'>Certificate<GiArmoredBoomerang className='ml-20 mt-[-20px]'/></a></div>
            </div>
            <div className='w-96 p-4 md:p-0 md:w-1/3 m-auto '><img data-aos="fade-up"  className='rounded' src={web} alt="" /></div>

        </div>
        </>
    );
};

export default Certification;