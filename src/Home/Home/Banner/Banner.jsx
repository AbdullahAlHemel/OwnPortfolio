import React from 'react';
import CV from '../../../../public/Resume of Abdullah.pdf';
import Fp from '../../../assets/OwnPhoto1.png';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import GradientBg from '../../../../public/Gradient-4.png';
import 'aos/dist/aos.css';
import GradientText from './GradientText';

const Banner = () => {
    AOS.init();

    const [text] = useTypewriter({
        words: [
            'Junior Web Developer',
            'Front-End Developer',
            'MERN Stack Developer'
        ],
        loop: true,
    });

    return (
        <div className="relative">
            <div
                className="max-w-7xl m-auto"
                data-aos="zoom-in"
                data-aos-duration="600"
            >
                <div className="flex  md:flex-row mx-6 md:mx-0 items-center relative">

                    {/* LEFT TEXT SECTION */}
                    <div className="md:w-2/3 w-full my-auto relative z-20 text-left">
                        <GradientText
                            colors={[
                                "#f8f9ff",
                                "#e6f0ff",
                                "#ff9999",
                                "#f8f9ff",
                                "#e6f0ff"
                            ]}
                            animationSpeed={6}
                        >
                            <h2 className="text-4xl sm:text-4xl md:text-6xl tracking-wide poppins-extrabold">
                                I'm Abdullah
                            </h2>

                            {/* TYPEWRITER – START LEFT & NEVER MOVE */}
                            <div className="flex justify-start items-center gap-3 flex-wrap w-full">

                                {/* Static A */}
                                <span className="text-3xl sm:text-4xl md:text-4xl poppins-extrabold">
                                    A
                                </span>

                                {/* Fixed space container */}
                                <div
                                    className="
                                        inline-flex 
                                        justify-start 
                                        items-center
                                        w-[250px] sm:w-[350px] md:w-[450px]
                                    "
                                >
                                    <span className="text-3xl sm:text-4xl md:text-4xl poppins-extrabold">
                                        {text}
                                    </span>

                                    <span style={{ fontSize: "35px", lineHeight: "60px" }}>
                                        <Cursor cursorStyle="|" cursorColor="white" />
                                    </span>
                                </div>
                            </div>
                        </GradientText>
                    </div>

                    {/* RIGHT IMAGE SECTION */}
                    <div
                        className="w-full md:w-1/2 p-4 md:p-0 md:pt-8 border-b-4 border-indigo-500
                        rounded-lg bg-cover bg-center bg-no-repeat relative z-10"
                        style={{ backgroundImage: `url(${GradientBg})` }}
                    >
                        <img
                            className="w-full h-auto rounded-lg"
                            src={Fp}
                            alt="Abdullah"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
