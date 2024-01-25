import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";

const Navbar = () => {

    const navLinks =
    <> 
       <Link to='/'><li className='border bg-gray-400 text-white uppercase font-bold  rounded-lg mr-4'><a>home</a></li></Link>
       <Link to='/skills'><li className='border bg-gray-400 text-white uppercase font-bold   rounded-lg mr-4'><a>Skills</a></li></Link>
       <Link to='/contract'><li className='border bg-gray-400 text-white uppercase font-bold   rounded-lg mr-4'><a href='/contract'>Contract</a></li></Link>
   </>
    return (
        <div className="navbar fixed z-20 bg-opacity-30 bg-gray-300 px-9">
        <div class="navbar-start">
            <h2 className='text-4xl p-1.5 rounded'><FaCode /></h2>
        </div>
        <div className="navbar-center  lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navLinks}
            </ul>
        </div>
        <div className="navbar-end">
            <a className='text-xl font-semibold btn bg-transparent border-sky-400 p-1.25 border rounded' href="https://www.linkedin.com/in/abdullah-al-hemel-1th/">Let's talk</a>
        </div>
        </div>
    );
};

export default Navbar;