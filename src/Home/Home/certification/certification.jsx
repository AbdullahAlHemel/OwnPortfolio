import React from 'react';
import web from '../../../../public/web/Screenshot (203).png'
import { GiArmoredBoomerang } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certification = () => {
    AOS.init({duration:1000})
    return (<>
            <h2 className=' text-center font-body2 font-bold text-2xl mt-4'>Certification</h2>
        <div className='flex max-w-6xl m-auto py-8 gap-20'>
            <div  data-aos="zoom-in-right"  className='float-right w-1/2 text-center my-auto font-body3'>
            <h2 className='text-2xl'>Complete web Development Course</h2>
            <p className='font-body4 w-1/2 text-center m-auto leading-4 mt-2 py-2'>A Professional Course on web design and development on <span className='text-amber-600'>6 month </span></p>
            <h2 className='text-xl mt-1 text-indigo-600'><span className='text-sm mr-1 text-black'>By </span><a href="https://www.programming-hero.com/">programming hero</a></h2>
            <div className='w-24 flex mx-auto'>
                <a href="https://drive.google.com/file/d/1f_8NX0vKvvXeFtBhsO6QrxgT7jSJlVzS/view?usp=sharing" className=' border border-indigo-600 rounded text-indigo-700 p-1 pr-3 pb-2 hover:scale-110 duration-150 hover:shadow-lg hover:text-white hover:bg-indigo-800 mt-3'>Certificate<GiArmoredBoomerang className='ml-20 mt-[-20px]'/></a></div>
            </div>
            <img data-aos="fade-up"  data-aos-duration="2000" className='float-left w-2/6 rounded' src={web} alt="" />
        </div>
        </>
    );
};

export default Certification;