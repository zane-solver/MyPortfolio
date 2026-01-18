'use client';

import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    degree: "Master's in Computer Science",
    institution: 'KTH Royal Institute of Technology',
    duration: '2015-2017',
    details: 'Master of Science in Computer Science with specialization in AI and Machine Learning. Completed research projects in automation systems and AI agents.',
    type: 'University',
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: 'Stockholm University',
    duration: '2011-2014',
    details: 'Bachelor of Science in Computer Science. Focused on software engineering, algorithms, and distributed systems.',
    type: 'University',
  },
  {
    degree: 'Natural Science Programme',
    institution: 'Stockholms Gymnasium',
    duration: '2008-2011',
    details: 'Completed Natural Science Programme (Naturvetenskapsprogrammet) with specialization in Mathematics and Physics.',
    type: 'Gymnasium',
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-[#0A192F]">
      <div className="container">
        <h2 className="text-4xl font-bold text-[#CCD6F6] mb-12">Education</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-[#64FFDA] via-[#64FFDA] to-transparent"></div>
          
          {/* Education items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={item.degree}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot with ripple effect */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#64FFDA] rounded-full transform -translate-x-1/2 z-10">
                  <div className="absolute w-full h-full rounded-full bg-[#64FFDA] animate-ping opacity-25"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div className="bg-[#112240] p-6 rounded-lg transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-[#64FFDA]/10">
                    <div className="flex items-center mb-4">
                      <FaGraduationCap className="text-[#64FFDA] w-6 h-6 mr-3" />
                      <div>
                        <h3 className="text-[#CCD6F6] text-xl font-bold">{item.degree}</h3>
                        <span className="text-[#64FFDA] text-sm">{item.type}</span>
                      </div>
                    </div>
                    <p className="text-[#64FFDA] font-medium mb-2">{item.institution}</p>
                    <p className="text-[#8892B0] mb-4">{item.duration}</p>
                    <p className="text-[#8892B0]">{item.details}</p>
                  </div>
                </div>
                
                {/* Spacer for timeline alignment */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 