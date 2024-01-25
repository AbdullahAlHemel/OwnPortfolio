import React from 'react';
import { FaPhone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Contract = () => {
    return (
        <div>
        <div id='contract' className='text-center pt-16 text-2xl'>
            <h2 className='text-3xl text-violet-500 font-bold'>Contract</h2>
            <h2>+880 19800 764 26</h2>
            <h2>abdullahalhemel100@gmail.com</h2>
            </div> 

            <div className='flex m-auto w-40 gap-5 py-4'>
                <a href="https://www.linkedin.com/in/abdullah-al-hemel-1th/" className='text-5xl text-[#0077b5]'><FaLinkedin /></a>
                <a href="http://wa.me/+8801980076426" className='text-5xl text-[#128c7e]'><IoLogoWhatsapp /></a>
                <a href="https://www.facebook.com/profile.php?id=100024754232380&mibextid=ZbWKwL" className='text-[#316FF6] text-5xl'><FaFacebookSquare /></a>
            </div>
        </div>
    );
};

export default Contract;