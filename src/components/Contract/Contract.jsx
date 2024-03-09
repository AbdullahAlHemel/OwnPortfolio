import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contract = () => {

  const [text] = useTypewriter({
    words: ['Connect With'],
    loop: 10,
    onLoopDone: () => console.log(`loop completed after 8 runs.`)
  })
  

  const notify = () => toast("✔️ Message Sent Successfully");

    AOS.init({duration:1000})
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault(

      );
    
      emailjs
        .sendForm('service_vzn9e18', 'template_e0eq6kp', form.current, {
          publicKey: 'ZswIewmnJicA0QdtX',
        })
        .then(
          () => {
            e.target.reset();
            console.log('SUCCESS!');
            
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (<>
    <div className="bg-teal-100 py-10">
    <h2 className=' mt-5 text-center font-body2 font-bold text-2xl my-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600'>{text}<Cursor cursorColor='blue' /></h2>
      <div className='flex m-auto gap-14 py-4 w-[610px] '>
          <a data-aos="fade-left" href="https://www.linkedin.com/in/abdullah-al-hemel-1th/" className='hover:scale-125 duration-1000 ease-in-out hover:shadow-xl p-1 bg-white rounded text-7xl text-[#0077b5]'><FaLinkedin /></a>
          <a data-aos="fade-left" href="http://wa.me/+8801980076426" className='hover:scale-125 duration-1000 ease-in-out hover:shadow-xl p-1 bg-white rounded text-7xl text-[#128c7e]'><IoLogoWhatsapp /></a>
          <a data-aos="zoom-in" href="https://www.facebook.com/profile.php?id=100024754232380&mibextid=ZbWKwL" className='hover:scale-125 duration-1000 ease-in-out hover:shadow-xl p-1 bg-white rounded text-7xl text-[#316FF6] '><FaFacebookSquare /></a>
          <a data-aos="fade-right" href="https://github.com/AbdullahAlHemel" className='hover:scale-125 duration-1000 ease-in-out hover:shadow-xl p-1 bg-white rounded text-7xl text-black '><FaGithub /></a>
          <a data-aos="fade-right" href="#" className='hover:scale-125 duration-1000 ease-in-out hover:shadow-xl p-1 bg-white rounded text-7xl text-[#0088cc]'><FaTelegram /></a>
      </div>
    </div>
                {/* <h2 className=' text-center font-body2 font-bold text-2xl my-8'>Contract</h2> */}
        <div class=" mt-16 flex flex-col max-w-5xl m-auto lg:flex-row my-5 gap-1">
          <ToastContainer position="top-left" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>

  <form  data-aos="fade-up" data-aos-duration="2000" ref={form} onSubmit={sendEmail} class="w-1/2  bg-base-300 rounded-box p-14">
    <h2 className='text-5xl font-body3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600'>Let's Work </h2>
    <h2 className='text-5xl font-body3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-500 pb-2'>together!</h2>
    <p className='text-xl py-5  text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-violet-600  '>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
    <div className=''>
    <input className='w-full rounded-md my-2 p-2 font-medium px-4 text-lg' placeholder='Your Name' type="text" name="User_name" id="" />
    <input className='w-full rounded-md my-2 p-2 font-medium px-4 text-lg' type="email" placeholder='Email Address' name="User_email" id="" />
    </div>
    <textarea className='w-full h-48 p-2 my-3 rounded font-medium px-4 text-lg tracking-wide' name="message" id="" placeholder='Message' cols="30" rows="10"></textarea>
    <input onClick={notify} className=' hover:scale-105 hover:shadow-2xl hover:shadow-orange-300 hover:border btn text-white font-bold bg-gradient-to-r from-rose-400 to-violet-400 ' type="submit" name="" id="" value='Send Message' />
  </form> 
 
  <div class="w-1/2 p-12 py-52 ">
  <h2 data-aos="fade-up-left" data-aos-duration="2000" className="text-transparent bg-clip-text bg-gradient-to-r from-black to-violet-600 flex place-items-center text-xl font-medium font-body4"><FaPhone className="bg-gradient-to-r from-rose-400 to-violet-500 w-11 h-11 p-2 rounded-full text-white mr-5 "/> <div className="grid"><h2 className="text-base border-b-2 w-16">Phone</h2>+880 19800 764 26</div></h2>
  <h2 data-aos="fade-up-left" data-aos-duration="1000" className="text-transparent bg-clip-text bg-gradient-to-r from-black to-violet-600 flex place-items-center text-xl font-medium font-body4 my-12"><MdEmail className="bg-gradient-to-r from-rose-400 to-violet-500 w-11 h-11 p-2 rounded-full text-white mr-5 "/> <div className="grid"><h2 className="text-base border-b-2 w-14">Email</h2>abdullahalhemel100@gmail.com</div></h2>
  <h2 data-aos="fade-up-left" data-aos-duration="500" className="text-transparent bg-clip-text bg-gradient-to-r from-black to-violet-600 flex place-items-center text-xl font-medium font-body4"><FaLocationDot className="bg-gradient-to-r from-rose-400 to-violet-500 w-12 h-11 p-2 rounded-full text-white mr-6 "/> <div className="grid"><h2 className="text-base border-b-2 w-20">Location</h2>52 no Nazimuddin road, Chankharpul, 1100, Dhaka</div></h2>
  </div>
 </div>
          
        </>
    );
};

export default Contract;