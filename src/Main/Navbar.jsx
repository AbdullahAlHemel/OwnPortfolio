import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { useState } from 'react';
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import './Navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    AOS.init({duration:1500})
    // const [toggleIcon, setToggleIcon] = useState(false)

    // const handleToggleIcon = () => {
    //   setToggleIcon(!toggleIcon)
    // }

//     const navLinks =
//     <div className='flex gap-3 font-body2'> 
//        <Link to='/'><li className='border bg-gray-400 text-white uppercase font-bold  rounded-lg'><a>home</a></li></Link>
//        <Link to='/Skill'><li className='border bg-gray-400 text-white uppercase font-bold   rounded-lg '><a>Skills</a></li></Link>
//        <Link to='/project'><li className='border bg-gray-400 text-white uppercase font-bold   rounded-lg '><a>Project</a></li></Link>
//        <Link to='/education'><li className='border bg-gray-400 text-white uppercase font-bold   rounded-lg '><a>Education</a></li></Link>
//        <Link to='/contract'><li className='border bg-gray-400 text-white uppercase font-bold   rounded-lg '><a href='/contract'>Contract</a></li></Link>
//    </div>

    const data =
    
   [
        
           
        {
            label : 'Home',
            to: '/'
        },
        {
            label : 'skills',
            to: '/skill'
        },
        {
            label : 'Project',
            to: '/project'
        },
        {
            label : 'education',
            to: '/education'
        },
        {
            label : 'contract',
            to: '/contract'
        }       
   ]

    return (
        <div data-aos="fade-down" className=' bg-[#fffaf7] border-b-[0.25px] border-gray-200'>
        <div className="navbar z-20 bg-opacity-30  px-9 gap-20">
        <div class="navbar-start lg:inline hidden">
            <h2 className='text-4xl p-1.5 rounded'><FaCode /></h2>
        </div>
        <div className="navbar-center lg:flex float-right">
            <ul className= {`menu menu-horizontal px-1 gap-1 `}>
                {/* {navLinks} */}
                {data.map((item, key)=> (
                 <li  key={key}>
                    <Link className='navRoute  bg-transparent lg:border-transparent border-2 lg:w-full  font-body2 justify-center items-center align-middle uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-violet-800' to={item.to}>{item.label}</Link>
                 </li>
                ))
                }
            </ul>
            {/* <div className='cursor-pointer' onClick={handleToggleIcon}>
                {
                    toggleIcon ? <HiX size={30} /> : <FaBars size={30} /> 
                }
            </div> */}

        </div>

        <div className="lg:navbar-end hidden">
            <a className='text-xl font-semibold btn bg-transparent border-sky-400 p-1.25 border rounded' href="https://www.linkedin.com/in/abdullah-al-hemel-1th/">Let's talk</a>
        </div>



        </div>
   
        </div>
    );
};

export default Navbar;