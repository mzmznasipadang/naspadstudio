// src/components/SkillsSection.js
import React from 'react';

const skills = [
  'Figma',
  'Swift / Swift UI',
  'React',
  'SAP ERP',
  'UI/UX Design',
  'Mobile App'
];

const SkillsSection = () => {
  return (
    <section className="w-full py-12 px-4 bg-[#101111]">
      <div className="max-w-[1240px] mx-auto">
        <div className="relative py-8">
          {/* Top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          
          {/* Skills */}
          <div className="flex flex-wrap justify-between items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-center text-white text-xl font-normal py-2 px-4 transition-all duration-300 hover:text-[#1B98E0] hover:scale-110 cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
          
          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;