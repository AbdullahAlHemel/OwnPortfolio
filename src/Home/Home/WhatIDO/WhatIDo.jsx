import React from 'react';
import tools1 from '../../../../public/25231.png'
import tools2 from '../../../../public/download (4).png'
import tools3 from '../../../../public/download (5).png'
import tools4 from '../../../../public/download (6).png'

const WhatIDo = () => {
    return (
        <div>
            <h2 className='uppercase text-center font-semibold text-2xl pt-12'>Skills</h2>

           <h2 className='text-center mt-8 text-xl border font-bold text-[#00b5ff]'>Font-End</h2>
           <div className='grid md:grid-cols-2 p-10 gap-7'>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>JavaScript</h2><progress className="progress progress-info  w-100 h-3 mt-2.5 ml-5" value="50" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>React</h2><progress className="progress progress-info w-100 h-3 mt-2.5 ml-5" value="75" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>CSS</h2><progress className="progress progress-info w-100 h-3 mt-2.5 ml-5" value="85" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>Html</h2><progress className="progress progress-info w-100 h-3 mt-2.5 ml-5" value="80" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>Tailwind</h2><progress className="progress progress-info w-100 h-3 mt-2.5 ml-5" value="80" max="100"></progress></h2>
            </div>
           <h2 className='text-center mt-8 text-xl border font-bold text-[#ff00d3]'>Back-End</h2>
           <div className='grid md:grid-cols-2 p-10 gap-7'>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>MongoDB</h2><progress className="progress progress-secondary  w-100 h-3 mt-2.5 ml-5" value="65" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>Firebase</h2><progress className="progress progress-secondary  w-100 h-3 mt-2.5 ml-5" value="50" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>React-Router</h2><progress className="progress progress-secondary w-100 h-3 mt-2.5 ml-5" value="60" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>Express</h2><progress className="progress progress-secondary w-100 h-3 mt-2.5 ml-5" value="60" max="100"></progress></h2>
            </div>
            <h2 className='text-center mt-8 text-xl border font-bold text-[#ff5200]'>Tools</h2>
             <div className='flex justify-center gap-5 my-4'>
             <img src={tools1} alt="" className='w-10 h-10'/>
             <img src={tools2} alt="" className='w-12 h-10'/>
             <img src={tools3} alt="" className='w-11 h-10'/>
             <img src={tools4} alt="" className='w-12 h-10'/>
             </div>

        </div>

    );
};

export default WhatIDo;