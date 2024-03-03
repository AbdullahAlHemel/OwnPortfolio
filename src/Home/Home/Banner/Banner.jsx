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
        words: ['Junior Web Developer', 'Front-end Developer'],
        loop: 10,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    return (
        <div>
            <div data-aos="zoom-in"  data-aos-duration="500">
            <div className='flex bg-[#fffaf7]'>
            <div className='w-1/2  my-auto text-center'>
            <div className='App text-xl font-semibold text-cyan-600 mt-3 mb-8'>
            <h2 className='text-4xl font-bold text-amber-400 font-body'>Hi, I am Abdullah</h2>
            <span className='font-body2'>{text}</span>
      <Cursor cursorColor='blue' />
                     
            </div>
            {/* <h2 className=''>Junior Web Developer</h2> */}
            <a className='btn btn-outline btn-secondary' href={CV} download><FaFileDownload className='text-2xl'/>Download Resume</a>





            <img src='' alt="" />
            </div>
            <div className='p-16 pb-0'>
                <img src={Fp} alt="" />
            </div>
        </div>
         </div>
          </div>
    );
};


export default Banner;
