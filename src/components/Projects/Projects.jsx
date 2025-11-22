import React from 'react';
import { Parallax } from 'react-parallax';
import img1 from '../../assets/project/Capture11.png';
import img2 from '../../assets/project/Capture12.png';
import img3 from '../../assets/project/Capture13.png';
import bg from '../../assets/Web_Photo_Editor.jpg';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import GradientText from '../../Home/Home/Banner/GradientText';
import { motion } from "framer-motion";


const Projects = () => {
    const iconVariants = {
      float: {
        y: [0, -5, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      glow: {
        boxShadow: [
          "0 0 0px rgba(0,123,255,0)",
          "0 0 18px rgba(0,123,255,0.85)",
          "0 0 0px rgba(0,123,255,0)",
        ],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    };


  const projects = [
    { 
      id: 1, 
      img: img1, 
      title: "Restaurants web",
      link: "https://bistro-boss-1955d.web.app/",
      github: "https://github.com/AbdullahAlHemel/Bistro-boss-client-2",
    },
    { 
      id: 2, 
      img: img2, 
      title: "News Blog",
      link: "https://assignment-11-3127e.web.app/",
      github: "https://github.com/AbdullahAlHemel/blog-client",
    },
    { 
      id: 3, 
      img: img3, 
      title: "Percel Order",
      link: "https://zap-shift-100.web.app/",
      github: "https://github.com/AbdullahAlHemel/zap-shift",
    },
  ];

  return (
    <Parallax
      bgImage={bg}
      strength={400}
      bgImageStyle={{ objectFit: 'cover',  }} // Ensures full cover and proper scaling
    >
      <div className="relative py-20 pb-20" >
        {/* Overlay for gradient + readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-black opacity-80 z-0"></div>

        <GradientText colors={["#dbe8ff", "#aecdff", "#ff4d4d", "#dbe8ff", "#aecdff"]} animationSpeed={6} className="relative z-10">
          <h2 className="text-center text-4xl font-black pb-14 uppercase font-Headline">
              Projects
          </h2>
        </GradientText>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-2 px-4 relative z-10">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md overflow-hidden cursor-pointer bg-gradient-to-b from-[#020617] to-[#0b0f29] border-2 border-blue-500 transform transition-all duration-300 p-3 hover:scale-105 hover:z-50 shadow-[0_0_15px_5px_rgba(59,130,246,0.5)] shadow-blue-500/50 relative z-10"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img 
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-400 "
                />
              </div>

              {/* Title */}
              <div className="p-4 bg-black/50 backdrop-blur-md text-center">
                <p className="text-white text-lg font-semibold">{project.title}</p>
              </div>

              <div className="p-4 flex flex-col flex-grow justify-between">
              <div className="flex justify-center gap-6 mt-auto">

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-black p-1 rounded-lg"
                  title="View Code"
                  variants={iconVariants}
                  animate={["float", "glow"]}
                  whileHover={{ scale: 1.25, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={32} />
                </motion.a>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-black p-1 rounded-lg"
                  title="View Live"
                  variants={iconVariants}
                  animate={["float", "glow"]}
                  whileHover={{ scale: 1.25, rotate: -8 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt size={32} />
                </motion.a>

              </div>
            </div>


            </a>
          ))}
        </div>
      </div>
    </Parallax>
  );
};

export default Projects;
