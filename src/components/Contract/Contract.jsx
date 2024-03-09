import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contract = () => {

    AOS.init({duration:1000})
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs
        .sendForm('service_vzn9e18', 'template_e0eq6kp', form.current, {
          publicKey: 'ZswIewmnJicA0QdtX',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <div class="flex flex-col max-w-5xl m-auto lg:flex-row my-5 gap-1">


  <form data-aos="fade-up" data-aos-duration="2000" ref={form} onSubmit={sendEmail} class="w-1/2  bg-base-300 rounded-box p-14">
    <h2 className='text-5xl font-body3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600'>Let's Work </h2>
    <h2 className='text-5xl font-body3 font-bold'>together!</h2>
    <p className='text-xl py-5'>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
    <div className=''>
    <input className='w-full rounded-md my-2 p-2 font-medium px-4 text-lg' placeholder='Your Name' type="text" name="User_name" id="" />
    <input className='w-full rounded-md my-2 p-2 font-medium px-4 text-lg' type="email" placeholder='Email Address' name="User_email" id="" />
    </div>
    <textarea className='w-full h-48 p-2 my-3 rounded font-medium px-4 text-lg tracking-wide' name="message" id="" placeholder='Message' cols="30" rows="10"></textarea>
    <input className='border btn' type="submit" name="" id="" value='Send Message' />
  </form> 
 
  <div class="w-1/2 p-12 py-52">
   
  <h2 data-aos="fade-up-left" data-aos-duration="2000" className="flex place-items-center text-xl font-medium font-body4"><FaPhone className="bg-gradient-to-r from-cyan-300 to-blue-500 w-11 h-11 p-2 rounded-full text-white mr-5 "/> <div className="grid"><h2 className="text-base border-b-2 w-16">Phone</h2>+880 19800 764 26</div></h2>
  <h2 data-aos="fade-up-left" data-aos-duration="1000" className="flex place-items-center text-xl font-medium font-body4 my-12"><MdEmail className="bg-gradient-to-r from-cyan-300 to-blue-500 w-11 h-11 p-2 rounded-full text-white mr-5 "/> <div className="grid"><h2 className="text-base border-b-2 w-14">Email</h2>abdullahalhemel100@gmail.com</div></h2>
  <h2 data-aos="fade-up-left" data-aos-duration="500" className="flex place-items-center text-xl font-medium font-body4"><FaLocationDot className="bg-gradient-to-r from-cyan-300 to-blue-500 w-12 h-11 p-2 rounded-full text-white mr-6 "/> <div className="grid"><h2 className="text-base border-b-2 w-20">Location</h2>52 no Nazimuddin road, Chankharpul, 1100, Dhaka</div></h2>
  </div>







        {/* <div>
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
        </div> */}
        </div>
    );
};

export default Contract;