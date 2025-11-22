import React from "react";
import CountUp from "./CountUp";
import {
  FaProjectDiagram,
  FaClock,
  FaSmile,
  FaStar,
} from "react-icons/fa";

const stats = [
  { icon: <FaProjectDiagram />, number: 12, label: "Projects Completed" },
  { icon: <FaClock />, number: 50, label: "Months Experience" },
  { icon: <FaSmile />, number: 24, label: "Hour Support" },
  { icon: <FaStar />, number: 90, label: "Client Satisfaction" },
];

const Number = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#001021] via-[#001b38] to-[#002b57]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center px-6">
        
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              group relative flex flex-col items-center justify-center
              p-10 rounded-3xl
              bg-[#0a1628]/70 backdrop-blur-xl  /* darker glass effect */
              border border-transparent 
              transition-all duration-500
              hover:scale-105 hover:border-cyan-400
              shadow-[inset_0_0_20px_rgba(0,0,0,0.5),0_0_40px_rgba(0,250,255,0.25)]
            "
          >

            {/* Hover Glow Border */}
            <div
              className="
                absolute inset-0 rounded-3xl border-2 border-cyan-400 
                opacity-0 group-hover:opacity-100 transition duration-500
                shadow-[0_0_30px_6px_rgba(0,255,255,0.4)]
              "
            ></div>

            {/* Number */}
            <CountUp
              from={0}
              to={stat.number}
              duration={2}
              separator=","
              className="
                text-5xl md:text-6xl lg:text-8xl font-black text-white relative z-10
                drop-shadow-[0_0_12px_rgba(0,255,255,0.7)] my-10
              "
            />

            {/* Label Row */}
            <p
              className="
                mt-8 text-lg md:text-xl text-white font-semibold 
                relative z-10 flex items-center justify-center gap-2
                drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]
              "
            >
              <span
                className="
                  p-2 rounded-full 
                  bg-gradient-to-br from-blue-700 to-cyan-400
                  shadow-[0_0_10px_3px_rgba(0,200,255,0.4)] 
                  flex items-center justify-center
                "
              >
                <span className="w-5 h-5 text-white flex items-center justify-center">
                  {stat.icon}
                </span>
              </span>

              {stat.label}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Number;
