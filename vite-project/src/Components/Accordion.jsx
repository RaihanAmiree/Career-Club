import React, { useState } from 'react';

const Accordion = () => {
  const accordionItems = [
    {
      title: "Personalized Guidance & Mentorship",
      content:
        "Our club offers tailored advice and one-on-one mentorship from experienced professionals and alumni, helping you navigate your unique career path with confidence. We go beyond generic advice to provide insights specific to your aspirations."
    },
    {
      title: "Exclusive Networking Opportunities",
      content:
        "Gain access to a powerful network of industry leaders, recruiters, and successful alumni. Our curated events and connections open doors to internships, job shadows, and invaluable industry insights you won't find anywhere else."
    },
    {
      title: "Hands-On Skill Development Workshops",
      content:
        "We focus on practical, actionable skills that employers demand. Our workshops cover everything from resume building and interview techniques to advanced technical skills and leadership training, ensuring you're job-ready."
    },
    {
      title: "Community-Driven Support System",
      content:
        "Join a vibrant community of ambitious peers who support each other's growth. Share experiences, collaborate on projects, and build lasting relationships that extend beyond graduation. Your success is our collective mission."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="space-y-6 max-w-4xl mx-auto">
        {accordionItems.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl shadow-md overflow-hidden bg-white">
            <button
              className="flex justify-between items-center w-full p-6 text-left focus:outline-none bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-xl font-semibold text-gray-800">{item.title}</span>
              <svg
                className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="p-6 text-gray-600 leading-relaxed text-lg bg-white border-t border-gray-100">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;