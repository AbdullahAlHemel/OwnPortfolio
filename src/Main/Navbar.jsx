import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { useState } from 'react';
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
      setToggleIcon(!toggleIcon)
    }

//     const navLinks =
//     <div className='flex gap-3 font-body2'> 
//        <Link to='/'><li className='border bg-gray-400 text-white uppercase font-bold  rounded-lg'><a>home</a></li></Link>
//        <Link to='/Skill'><li className='border bg-gray-400 text-white uppercase font-bold   rounded-lg '><a>Skills</a></li></Link>
//        <Link to='/project'><li className='border bg-gray-400 text-white uppercase font-bold   rounded-lg '><a>Project</a></li></Link>
//        <Link to='/education'><li className='border bg-gray-400 text-white uppercase font-bold   rounded-lg '><a>Education</a></li></Link>
//        <Link to='/contract'><li className='border bg-gray-400 text-white uppercase font-bold   rounded-lg '><a href='/contract'>Contract</a></li></Link>
//    </div>

    const data = [
           
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
        },

        
    ]

    return (
        <div className="navbar fixed z-20 bg-opacity-30 bg-gray-300 px-9">
        <div class="navbar-start">
            <h2 className='text-4xl p-1.5 rounded'><FaCode /></h2>
        </div>
        <div className="navbar-center  lg:flex ">
            <ul className= {`menu menu-horizontal px-1 flex lg:gap-1.5 gap-1 flex-col lg:flex-row ${toggleIcon ? 'active' : ''}`}>
                {/* {navLinks} */}
                {data.map((item, key)=> (
                 <li  key={key}>
                    <Link className='lg:w-full w-[300px] font-body2 border  justify-center items-center align-middle bg-gray-400 text-white uppercase font-bold rounded-lg' to={item.to}> {item.label}</Link>
                 </li>
                ))
                }
            </ul>
            <div className='cursor-pointer' onClick={handleToggleIcon}>
                {
                    toggleIcon ? <HiX size={30} /> : <FaBars size={30} /> 
                }
            </div>
        </div>
        <div className="navbar-end">
            <a className='text-xl font-semibold btn bg-transparent border-sky-400 p-1.25 border rounded' href="https://www.linkedin.com/in/abdullah-al-hemel-1th/">Let's talk</a>
        </div>
        </div>
   
   
    );
};

export default Navbar;