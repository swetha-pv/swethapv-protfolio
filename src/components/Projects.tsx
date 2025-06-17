
import React from 'react';
import { ExternalLink, Github, Code, Calculator, Thermometer, Dice6, BookOpen, CheckSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Calculator",
      description: "A responsive calculator application with advanced mathematical operations",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Calculator,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Temperature Converter",
      description: "Convert temperatures between Celsius, Fahrenheit, and Kelvin",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Thermometer,
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Number Guessing Game",
      description: "Interactive game where users guess random numbers with hints",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Dice6,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Quiz App",
      description: "Dynamic quiz application with multiple choice questions and scoring",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: BookOpen,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "To-Do List",
      description: "Task management app with add, edit, delete, and completion features",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: CheckSquare,
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">{project.title}</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  <button className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-shadow duration-200">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-shadow duration-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* More Coming Soon */}
          <div className="text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
              <Code className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">More Coming Soon</h3>
              <p className="text-gray-600">Exciting projects are in development!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
