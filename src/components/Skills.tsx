
import React from 'react';
import { Code, Palette, BarChart3, PenTool, Camera } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "HTML", "CSS", "SQL", "Python (Basics)"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Design & Analysis",
      icon: Palette,
      skills: ["Figma", "UI/UX Design", "User Research", "Prototyping"],
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      skills: ["Power BI", "Excel", "Tableau", "MySQL", "Data Visualization"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Creative Skills",
      icon: PenTool,
      skills: ["Content Writing", "Technical Writing", "Creative Writing"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Digital Editing",
      icon: Camera,
      skills: ["Photo Editing", "Video Editing", "Digital Design", "Social Media Content"],
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const softSkills = ["Communication", "Creativity", "Problem Solving", "Team Collaboration", "Adaptability", "Critical Thinking"];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-50 px-4 py-2 rounded-full text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-semibold shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
