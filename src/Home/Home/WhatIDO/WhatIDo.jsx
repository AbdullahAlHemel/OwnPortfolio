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
import Github from '../../../../public/Tools/github.png'
import Figma from '../../../../public/Tools/Figma.png'
import Git from '../../../../public/Tools/Git.png'
import VsCode from '../../../../public/Tools/vsCode.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhatIDo = () => {
    AOS.init({duration:1000})
    return (
        <div data-aos="fade-up" className='max-w-7xl m-auto'>
            <h2 className='uppercase text-center font-black text-2xl pt-12 font-Headline text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600' data-aos="fade-up">Skills</h2>

         {/* Front-end */}
           <div className='text-center mt-8 text-xl mx-[580px] pb-1.5 border-orange-200 border-b-2 rounded-md font-medium font-body3 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600 ' data-aos="fade-up">Front-End</div>

         <div className='mx-auto w-[700px] pt-14 pb-5 grid grid-cols-5 '>

           <div  style={{transition:'0.5s'}} data-aos="flip-left"  className='hover:border-pink-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 pt-8 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-blue-300 hover:shadow-xl '><div className=''><img  className='' src={SkillIconTailwind} alt="" /></div></div> 
           <div style={{transition:'0.5s'}} data-aos="flip-left" className='hover:border-pink-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-orange-300 hover:shadow-xl duration-500'><div className=''><img className='' src={SkillIconJava} alt="" /></div></div> 
           <div style={{transition:'1s'}} data-aos="flip-left" className='border-cyan-300 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg shadow-cyan-300 hover:shadow-xl duration-150'><div className=''><img className='' src={SkillIconReact} alt="" /></div></div> 
           <div style={{transition:'0.5s'}} data-aos="flip-left" className='hover:border-red-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-sky-300 hover:shadow-xl duration-150'><div className=''><img className='' src={SkillIconCss} alt="" /></div></div> 
           <div style={{transition:'0.5s'}} data-aos="flip-left" className='hover:border-sky-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-orange-300 hover:shadow-xl duration-150'><div className=''><img className='' src={SkillIconHtml} alt="" /></div></div> 

            <div className='mx-auto w-[700px] grid grid-cols-5 mt-1.5  font-medium font-body3 tracking-[.03em]'>
                <div className='w-[70px] mx-auto font-medium'> <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>Tailwind</h3></div> 
                <div className=' w-[70px] mx-auto font-medium'> <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>JavaScript</h3></div> 
                <div className='w-[70px] mx-auto font-medium'><h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>React</h3></div> 
                <div className='w-[70px] mx-auto font-medium'> <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>CSS</h3></div> 
                <div className='w-[70px] mx-auto font-medium'> <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>Html</h3></div> 
            </div>

          </div>
   
    {/* Backend    */}
    <div className='text-center mt-8 text-xl mx-[580px] pb-1.5 border-orange-200 border-b-2 rounded-md font-medium font-body3 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600' data-aos="fade-up"  data-aos-duration="500">Back-End</div>

    <div className='mx-auto w-[570px] pt-14 pb-5 grid grid-cols-4'>
            
            <div style={{transition:'0.5s'}} data-aos="flip-left" className='hover:border-green-200 hover:bg-gradient-to-t from-pink-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-fuchsia-300 hover:shadow-xl duration-150'><div className=''><img className='w-[50px] ml-2' src={SkillIconFirebase} alt="" /></div></div> 
            <div style={{transition:'0.5s'}} data-aos="flip-left" className='hover:border-amber-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-emerald-200 hover:shadow-xl duration-150'><div className=''><img className='' src={SkillIconNodeJs} alt="" /></div></div> 
            <div style={{transition:'0.5s'}} data-aos="flip-left" className='border-violet-300 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-violet-300 shadow-xl duration-150'><div className=''><img className='' src={SkillIconMongo} alt="" /></div></div> 
            <div style={{transition:'0.5s'}} data-aos="flip-left" className='hover:border-sky-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-orange-300 hover:shadow-xl duration-150 pt-[30px]'><div className=''><img className='' src={SkillIconReactRouter} alt="" /></div></div> 
      
             <div className='mx-auto w-[570px] grid grid-cols-4 mt-1.5  font-medium font-body3 tracking-[.03em]'>
                 <div className='  mx-auto font-medium'> <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>Firebase</h3></div> 
                 <div className=' mx-auto font-medium'><h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>Express Js</h3></div> 
                 <div className='mx-auto font-medium'> <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>MongoDB</h3></div> 
                 <div className=' mx-auto font-medium'> <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>React Router</h3></div> 
             </div>
     </div>

     {/* Tools */}
     <div className='text-center mt-8 text-xl mx-[600px] pb-1.5 border-orange-200 border-b-2 rounded-md font-medium font-body3 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600' data-aos="fade-up"  data-aos-duration="500">Tools</div>

    <div className='mx-auto w-[570px] pt-14 pb-5 grid grid-cols-4'>
            
            <div style={{transition:'0.5s'}} data-aos="flip-left" className='hover:border-green-200 hover:bg-gradient-to-t from-pink-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-blue-300 hover:shadow-xl duration-150'><div className=''><img className='w-[50px] ml-2' src={Figma} alt="" /></div></div> 
            <div style={{transition:'0.5s'}} data-aos="flip-left" className='border-teal-300 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg  shadow-emerald-200 shadow-xl duration-150'><div className=''><img className='' src={Github} alt="" /></div></div> 
            <div style={{transition:'0.5s'}} data-aos="flip-left" className='hover:border-red-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-sky-300 hover:shadow-xl duration-150'><div className=''><img className='' src={Git} alt="" /></div></div> 
            <div style={{transition:'0.5s'}} data-aos="flip-left" className='hover:border-sky-200 hover:bg-gradient-to-t from-red-50 to-transparent w-[120px] px-6 py-5 mx-auto font-semibold border rounded-lg shadow-lg hover:shadow-red-300 hover:shadow-xl duration-150 pt-[30px]'><div className=''><img className='' src={VsCode} alt="" /></div></div> 
      
             <div className='mx-auto w-[570px] grid grid-cols-4 mt-1.5  font-medium font-body3 tracking-[.03em]'>
                 <div className='  mx-auto font-medium'> <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>Figma</h3></div> 
                 <div className=' mx-auto font-medium'><h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>Github</h3></div> 
                 <div className='mx-auto font-medium'> <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>Git</h3></div> 
                 <div className=' mx-auto font-medium'> <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-700'>VS Code</h3></div> 
             </div>
     </div>
        </div>  
    );    
};

export default WhatIDo;