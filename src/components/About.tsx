
import React from 'react';
import { GraduationCap, User } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech – Computers & Data Science",
      institution: "Mother Theresa Institute of Engineering & Technology",
      period: "2022–2026",
      grade: "82%"
    },
    {
      degree: "Intermediate – MPC",
      institution: "Mother Theresa Jr. College",
      period: "2020–2022",
      grade: "81%"
    },
    {
      degree: "SSC",
      institution: "Sri Sarada English Medium School",
      period: "2015–2020",
      grade: "GPA: 10.0/10"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <User className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">My Story</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  I'm Swetha, a passionate Java developer and creative designer. I blend logic with imagination—building full-stack web apps, analyzing real-world data, and designing intuitive user experiences.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  I also love writing, drawing, and editing digital content. My philosophy is simple: technology should be both powerful and beautiful, solving real problems while creating delightful experiences.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Always learning. Always creating. Always pushing the boundaries of what's possible.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="font-bold text-lg text-gray-800 mb-2">{edu.degree}</h4>
                    <p className="text-gray-600 mb-1">{edu.institution}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{edu.period}</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
