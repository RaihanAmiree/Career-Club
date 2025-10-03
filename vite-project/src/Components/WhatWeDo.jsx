import React, { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaBriefcase, FaUsers, FaLightbulb } from "react-icons/fa";
import Underline from "./Underline";

const services = [
  {
    icon: <FaChalkboardTeacher className="text-4xl text-[#0a1a2f] mb-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />,
    title: "Workshops & Training",
    description: "Interactive sessions to improve skills, career readiness, and personal growth.",
  },
  {
    icon: <FaBriefcase className="text-4xl text-[#0a1a2f] mb-4 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" />,
    title: "Internship Guidance",
    description: "Helping students find meaningful internships and hands-on experiences.",
  },
  {
    icon: <FaUsers className="text-4xl text-[#0a1a2f] mb-4 transition-transform duration-500 group-hover:scale-125" />,
    title: "Networking Events",
    description: "Connect with professionals, alumni, and like-minded peers.",
  },
  {
    icon: <FaLightbulb className="text-4xl text-[#0a1a2f] mb-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />,
    title: "Career Counseling",
    description: "Personalized guidance to make informed career choices and plans.",
  },
];

const WhatWeDo = () => {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    // Trigger fade-in as the component mounts
    const timer = setTimeout(() => setVisible(services.map(() => true)), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white ">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-[#0a1a2f] mb-4">Our Services</p>
         <Underline title="What We Do"></Underline>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 shadow-md transition-all duration-500 cursor-pointer 
                hover:scale-105 hover:-rotate-1 hover:shadow-xl
                ${visible[index] ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-[#0a1a2f] mb-2 mt-2 group-hover:underline transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s forwards;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
