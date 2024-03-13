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
            <div className='App text-xl font-semibold text-cyan-600 mb-8'>
            <h2 className='text-4xl font-bold  font-body text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600'>Hi, I am Abdullah</h2>
            <span className='font-body2'>{text}</span>
      <Cursor cursorColor='blue' />
                     
            </div>
            {/* <h2 className=''>Junior Web Developer</h2> */}
            <a className='btn btn-outline btn-secondary duration-500' href={CV} download><FaFileDownload className='text-2xl'/>Download Resume</a>


            <img src='' alt="" />
            </div>
            <div className='p-16 pt-8 pb-0'>
                <img src={Fp} alt="" />
            </div>
        </div>
         </div>
          </div>
    );
};





export default Banner;
