import React from 'react';
import czn from '../../assets/czn.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
    AOS.init({duration:1000})
    return (
        <div className='max-w-7xl m-auto' >
            <h2 className='text-center mt-10  text-2xl font-bold text-rose-500 font-body2'>Education</h2>
          <div className='flex  p-10'>
          <div className='w-4/5 float-left'  data-aos="fade-up"  data-aos-duration="2000"> <a href="https://www.du.ac.bd/"><img className='w-3/5 m-auto rounded-md shadow-xl' src={czn} alt="" /></a> </div> 
           <div className='w-4/5 float-right'  data-aos="zoom-in-left">
            <p className='text-xl text-center py-8 mx-5'>
                <h2 className='text-2xl font-body3 '>University of Dhaka</h2>
                <h2 className=' border-b border-[1px] w-60 m-auto my-1'></h2>
                <h2 className='text-xl font-body2 '>(2023 - Present)</h2> 
                <p className='font-body4 pt-1 w-96 m-auto font-sm text-lg leading-1 mt-1'>Bachelor of social science </p>
                <p className='font-body4 pt-0.5 w-96 m-auto font-sm text-base'> Department of Peace and conflict studies</p>
                </p></div>
           </div>
           
        </div>
    );
};

export default Education;