import React from 'react';
import img1 from '../../../public/Screenshot (124).png'
import img2 from '../../../public/Screenshot (125).png'
import img3 from '../../../public/Screenshot (126).png'

const Projects = () => {
    return (<>
                       <h2 className='text-center text-2xl mt-9 font-bold text-emerald-500'>Best Projects</h2>
        <div className='my-6 max-w-6xl m-auto md:flex '>
            <div className='w-1/3'>
                <img src={img1} alt="" />
                <h2 className='text-center font-bold text-2xl mt-3'>News Blog Projects</h2>
                <div className='text-center mt-5'>
                <a className='btn mr-8' href="https://github.com/AbdullahAlHemel/blog-client">Code Link</a>
                <a className='btn mr-8' href="https://assignment-11-3127e.web.app/">Live Link</a>
                </div>
            </div>
            <div className='w-1/3'>
                <img src={img2} alt="" />
                <h2 className='text-center font-bold text-2xl mt-3'>Car World Projects</h2>
                <div className='text-center mt-5'>
                <a className='btn mr-8' href="https://github.com/AbdullahAlHemel/car-World">Code Link</a>
                <a className='btn mr-8' href="https://assignment-10-ae122.web.app/">Live Link</a>
                </div>
            </div>
            <div className='w-1/3'>
                <img src={img3} alt="" />
                <h2 className='text-center font-bold text-2xl mt-3'>Course Registration Projects</h2>
                <div className='text-center mt-5'>
                <a className='btn mr-8' href="https://github.com/AbdullahAlHemel/blog-client">Code Link</a>
                <a className='btn mr-8' href="https://coursebox-rkyhck98i-abdullahalhemel.vercel.app/">Live Link</a>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>    </>

    );
};

export default Projects;