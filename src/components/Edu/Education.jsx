import React from 'react';
import czn from '../../assets/czn.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Certification from '../../../src/Home/Home/certification/certification';


const Education = () => {
    AOS.init({duration:1000})
    return (
        <>
        
        <div data-aos="fade-up" className='max-w-7xl m-auto' >
            <h2 className='text-center mt-10 text-2xl uppercase font-black font-Headline text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600'>Education</h2>
          <div className='flex lg:p-8'>
          <div className='w-4/5 float-left'  data-aos="fade-up"  data-aos-duration="2000"> <a href="https://www.du.ac.bd/"><img className='w-3/5 m-auto rounded-md shadow-xl md:mt-10 lg:mt-0' src={czn} alt="" /></a> </div> 
           <div className='w-4/5 float-right text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-violet-500'  data-aos="zoom-in-left">
            <p className='text-xl text-center py-8 mx-5'>
                <h2 className='text-2xl font-body3 text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-violet-600 '>University of Dhaka</h2>
                <h2 className=' border-b border-[1px] w-60 m-auto my-1'></h2>
                <h2 className='text-xl font-body2'>(2023 - Present)</h2> 
                <p className='font-body3 pt-1 w-96 m-auto text-xl leading-1 mt-1'>Bachelor of social science </p>
                <p className='font-body3 pt-0.5 w-96 m-auto text-xl '> Department of Peace and conflict studies</p>
                </p>
                </div>
           </div>
           
        </div>

        <Certification></Certification>

        </>
    );
};

export default Education;