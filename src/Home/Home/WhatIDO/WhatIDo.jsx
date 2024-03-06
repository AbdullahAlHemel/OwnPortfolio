import React from 'react';
import SkillIconJava from '../../../../public/Skill_Icon/javascript.png'
import SkillIconReact from '../../../../public/Skill_Icon/react.png'
import SkillIconCss from '../../../../public/Skill_Icon/css.png'
import SkillIconHtml from '../../../../public/Skill_Icon/html.png'
import SkillIconTailwind from '../../../../public/Skill_Icon/Tailwind.png'

import SkillIconFirebase from '../../../../public/Skill_Icon/firebase.svg'
import SkillIconNodeJs from '../../../../public/Skill_Icon/js.png'
import SkillIconMongo from '../../../../public/Skill_Icon/mongodb.svg'
import SkillIconReactRouter from '../../../../public/Skill_Icon/react-router.svg'

const WhatIDo = () => {
    return (
        <div>
            <h2 className='uppercase text-center font-semibold text-2xl pt-12'>Skills</h2>
           <h2 className='text-center mt-8 text-xl border font-bold text-[#00b5ff]'>Front-End</h2>
   
    <div className='mx-auto w-[700px] pt-14 pb-5 grid grid-cols-5'>
            
           <div className='hover:border-pink-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-orange-300 hover:shadow-xl duration-150'><div className=''><img className='' src={SkillIconJava} alt="" /></div></div> 
           <div className='hover:border-amber-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-cyan-300 hover:shadow-xl duration-150'><div className=''><img className='' src={SkillIconReact} alt="" /></div></div> 
           <div className='hover:border-red-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-sky-300 hover:shadow-xl duration-150'><div className=''><img className='' src={SkillIconCss} alt="" /></div></div> 
           <div className='hover:border-sky-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-orange-300 hover:shadow-xl duration-150'><div className=''><img className='' src={SkillIconHtml} alt="" /></div></div> 
           <div className='hover:border-pink-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-blue-300 hover:shadow-xl duration-150'><div className=''><img className='' src={SkillIconTailwind} alt="" /></div></div> 
     
            <div className='mx-auto w-[700px] grid grid-cols-5 mt-1.5  font-medium font-body3 tracking-[.03em]'>
                <div className=' w-[70px] mx-auto font-medium'> <h3 className='text-center'>JavaScript</h3></div> 
                <div className='w-[70px] mx-auto font-medium'><h3 className='text-center '>React</h3></div> 
                <div className='w-[70px] mx-auto font-medium'> <h3 className='text-center '>CSS</h3></div> 
                <div className='w-[70px] mx-auto font-medium'> <h3 className='text-center'>Html</h3></div> 
                <div className='w-[70px] mx-auto font-medium'> <h3 className='text-center '>Tailwind</h3></div> 
            </div>
    </div>
   
    <div className='text-center mt-8 text-xl border font-bold text-[#ff00d3]'>Back-End</div>

    <div className='mx-auto w-[570px] pt-14 pb-5 grid grid-cols-4'>
            
            <div className='hover:border-green-200 hover:bg-gradient-to-t from-pink-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-fuchsia-300 hover:shadow-xl duration-150'><div className=''><img className='w-[60px] ml-2' src={SkillIconFirebase} alt="" /></div></div> 
            <div className='hover:border-amber-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-emerald-200 hover:shadow-xl duration-150'><div className=''><img className='' src={SkillIconNodeJs} alt="" /></div></div> 
            <div className='hover:border-red-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-sky-300 hover:shadow-xl duration-150'><div className=''><img className='' src={SkillIconMongo} alt="" /></div></div> 
            <div className='hover:border-sky-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-orange-300 hover:shadow-xl duration-150 pt-[40px]'><div className=''><img className='' src={SkillIconReactRouter} alt="" /></div></div> 
      
             <div className='mx-auto w-[570px] grid grid-cols-4 mt-1.5  font-medium font-body3 tracking-[.03em]'>
                 <div className=' w-[70px] mx-auto font-medium'> <h3 className='text-center'>JavaScript</h3></div> 
                 <div className='w-[70px] mx-auto font-medium'><h3 className='text-center '>React</h3></div> 
                 <div className='w-[70px] mx-auto font-medium'> <h3 className='text-center '>CSS</h3></div> 
                 <div className='w-[70px] mx-auto font-medium'> <h3 className='text-center'>Html</h3></div> 
             </div>
     </div>




            
           {/* <div className='grid md:grid-cols-2 p-10 gap-7'>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>JavaScript</h2><progress className="progress progress-info  w-100 h-3 mt-2.5 ml-5" value="50" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>React</h2><progress className="progress progress-info w-100 h-3 mt-2.5 ml-5" value="75" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>CSS</h2><progress className="progress progress-info w-100 h-3 mt-2.5 ml-5" value="85" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>Html</h2><progress className="progress progress-info w-100 h-3 mt-2.5 ml-5" value="80" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>Tailwind</h2><progress className="progress progress-info w-100 h-3 mt-2.5 ml-5" value="80" max="100"></progress></h2>
            </div> */}
           {/* <h2 className='text-center mt-8 text-xl border font-bold text-[#ff00d3]'>Back-End</h2>
           <div className='grid md:grid-cols-2 p-10 gap-7'>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>MongoDB</h2><progress className="progress progress-secondary  w-100 h-3 mt-2.5 ml-5" value="65" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>Firebase</h2><progress className="progress progress-secondary  w-100 h-3 mt-2.5 ml-5" value="50" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>React-Router</h2><progress className="progress progress-secondary w-100 h-3 mt-2.5 ml-5" value="60" max="100"></progress></h2>
            <h2 className='flex'><h2 className='text-xl font-semibold w-[85px]'>Express</h2><progress className="progress progress-secondary w-100 h-3 mt-2.5 ml-5" value="60" max="100"></progress></h2>
            </div> */}
            {/* <h2 className='text-center mt-8 text-xl border font-bold text-[#ff5200]'>Tools</h2>
             <div className='flex justify-center gap-5 my-4'>
             <img src={tools1} alt="" className='w-10 h-10'/>
             <img src={tools2} alt="" className='w-12 h-10'/>          
             <img src={tools3} alt="" className='w-11 h-10'/>       
             <img src={tools4} alt="" className='w-12 h-10'/>
             </div>                   */}
        </div>  
    );    
};

export default WhatIDo;