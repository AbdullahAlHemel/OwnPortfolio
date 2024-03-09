import React from 'react';
import img1 from '../../../public/Screenshot (124).png'
import img2 from '../../../public/Screenshot (125).png'
import img3 from '../../../public/Screenshot (126).png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    AOS.init({duration:1000})
    return (<div data-aos="fade-up" className='bg-slate-100 py-1 my-8 pb-10'>
            <h2 className=' text-center text-2xl mt-11 font-black pb-5 uppercase font-Headline text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600'>Best Projects</h2>
       
       
        <div className='my-6 max-w-4xl m-auto md:flex '>
            <div data-aos="fade-right"  className='bg-white p-8 hover:scale-105 duration-300 flex border-y-2 border-r-2 rounded-r-xl'>
                <div className='w-1/2 float-left'>
                  <a className='' href="https://assignment-11-3127e.web.app/"><img className='w-10/12' src={img1} alt="" /></a>
                </div>
                <div className='w-1/2 float-right my-auto'>
                    <h2 className='text-center font-semibold text-2xl mt-3 font-body3 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-slate-600'>News Blog Projects</h2>
                    <div className='text-center mt-5'>
                    <a className='w-10 h-5  p-3 mr-2 rounded-md font-body2 font-semibold border hover:shadow-xl hover:w-12  border-emerald-600' href="https://github.com/AbdullahAlHemel/blog-client">Code Link</a>
                    <a className='w-10 h-5  p-3 mr-2 rounded-md font-body2 font-semibold border hover:shadow-xl hover:w-12  border-yellow-800' href="https://assignment-11-3127e.web.app/">Live Link</a>
                    </div>
                </div>
            </div>
        </div>
        {/* 2nd project */}
        <div className='my-6 max-w-4xl m-auto md:flex '>
            <div data-aos="fade-left"  className='bg-white p-8 hover:scale-125 duration-300 flex border-y-2 border-l-2 rounded-l-xl'>
                
                <div className='w-1/2 float-left my-auto'>
                    <h2 className='text-center font-semibold text-2xl mt-3 font-body3 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-rose-500'>Car Brand Projects</h2>
                    <div className='text-center mt-5'>
                    <a className='w-10 h-5  p-3 mr-2 rounded-md font-body2 font-semibold border hover:shadow-xl hover:w-12  border-emerald-600' href="https://github.com/AbdullahAlHemel/car-World">Code Link</a>
                    <a className='w-10 h-5  p-3 mr-2 rounded-md font-body2 font-semibold border hover:shadow-xl hover:w-12  border-yellow-800' href="https://assignment-10-ae122.web.app/">Live Link</a>
                    </div>
                </div>
                <div className='w-1/2 float-right'>
                  <a className='' href="https://assignment-10-ae122.web.app/"><img className='w-10/12' src={img2} alt="" /></a>
                </div>
            </div>
        </div>
        <div className='my-6 max-w-4xl m-auto md:flex '>
            <div data-aos="fade-right"  className='bg-white p-8 hover:scale-105 duration-300 flex border-y-2 border-r-2 rounded-r-xl'>
                <div className='w-1/2 float-left'>
                  <a className='' href="https://m-53-5a63b.firebaseapp.com/"><img className='w-10/12' src={img3} alt="" /></a>
                </div>
                <div className='w-1/2 float-right my-auto'>
                    <h2 className='text-center font-semibold text-2xl mt-3 font-body3 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-slate-600'>Carrier Course Projects</h2>
                    <div className='text-center mt-5'>
                    <a className='w-10 h-5  p-3 mr-2 rounded-md font-body2 font-semibold border hover:shadow-xl hover:w-12  border-emerald-600' href="https://github.com/AbdullahAlHemel/courseWeb">Code Link</a>
                    <a className='w-10 h-5  p-3 mr-2 rounded-md font-body2 font-semibold border hover:shadow-xl hover:w-12  border-yellow-800' href="https://m-53-5a63b.firebaseapp.com/">Live Link</a>
                    </div>
                </div>
            </div>
        </div>
            {/* project2 */}
            {/* <div className='w-1/3'>
                <img src={img2} alt="" />
                <h2 className='text-center font-bold text-2xl mt-3'></h2>
                <div className='text-center mt-5'>
                <a className='btn mr-8' href="">Code Link</a>
                <a className='btn mr-8' href="">Live Link</a>
                </div>
            </div>
            <div className='w-1/3'>
                <img src={img3} alt="" />
                <h2 className='text-center font-bold text-2xl mt-3'>Course selling Projects</h2>
                <div className='text-center mt-5'>
                <a className='btn mr-8' href="https://github.com/AbdullahAlHemel/blog-client">Code Link</a>
                <a className='btn mr-8' href="">Live Link</a>
                </div>
            </div> */}
            <div>
            <div></div>
        </div>   
     </div>

    );
};

export default Projects;