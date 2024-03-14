import React from 'react';
import CV from '../../../../public/Resume of Abdullah.pdf'
import Fp from '../../../assets/OwnPhoto.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaFileDownload } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    AOS.init();
    const [text] = useTypewriter({
        words: ['Junior Web Developer', 'Front-End Developer'],
        loop: 10,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    return (
        <div className='bg-[#fffaf7]'>
            <div className='max-w-7xl m-auto' data-aos="zoom-in"  data-aos-duration="500">
            <div className='flex '>

            <div className='w-1/2  my-auto text-center'>
            <div className='App md:text-xl font-semibold text-cyan-600 md:mb-8 mb-3'>
            <h2 className='md:text-4xl text-xl font-bold  font-body text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600'>Hi, I am Abdullah</h2>
            <span className='font-body2'>{text}</span>
            <Cursor cursorColor='blue' />               
            </div>
            {/* <h2 className=''>Junior Web Developer</h2> */}
            <a className='btn lg:btn-lg btn-xs btn-outline text-center btn-secondary duration-500' href={CV} download><FaFileDownload className='md:text-2xl text-xl'/>Download Resume</a>
            </div>

            <div className='w-1/2 md:p-16 md:pt-8 p-4 md:pb-2'>
                <img src={Fp} alt="" />
            </div>
        </div>
         </div>
          </div>
    );
};





export default Banner;
