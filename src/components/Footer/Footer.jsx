import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdAddLink } from "react-icons/md";
import { PiReadCvLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        < div  className=''>
            <footer className="footer footer-center p-6 bg-base-300 text-base-content font-body4 font-medium tracking-widest">
            <nav className='pt-5'>
              <div class="grid grid-flow-col gap-12 text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-violet-600">
              <a to='/' href="/" className='text-sm font-bold uppercase text-center w-3/1 hover:scale-110 hover:text-black duration-300' ><FaHome className='text-4xl lg:ml-2 text-stone-700 mb-2'/>Home</a>
              <a href='https://www.linkedin.com/in/abdullah-al-hemel-1th/' className='text-sm font-bold uppercase text-center w-3/1 hover:scale-110 hover:text-black duration-300' ><MdAddLink className='text-4xl lg:ml-4 text-stone-700 mb-2'/>Connect</a>
              <a className='text-sm font-bold uppercase text-center w-3/1 hover:scale-110 hover:text-black duration-300' href="https://drive.google.com/file/d/1ZqeMKUnldoDOmP_pqEoxybwi9FyqW1Mq/view"><PiReadCvLogoFill className='text-4xl lg:ml-5 mb-2 text-stone-700'/>View cv</a>
              </div>
            </nav> 
              <aside>
                <p>Copyright © 2023 - All right reserved by <a href="" className=''>Abdullah Al Hemel</a></p>
             </aside>
           </footer>
        </div>
    );
};

export default Footer;