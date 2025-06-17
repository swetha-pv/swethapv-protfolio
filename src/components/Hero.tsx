
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="w-44 h-44 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center text-6xl font-bold text-purple-600">
                  S
                </div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent animate-fade-in">
            P. V. Swetha
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Java Developer | UI/UX Designer | Data Analyst | Creator
          </p>

          {/* CTA Button */}
          <div className="mb-12 animate-fade-in">
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore My Work
              <ArrowDown className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in">
            <a
              href="https://linkedin.com/in/swetha-p-v-a025a8340"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-gray-800" />
            </a>
            <a
              href="mailto:swethapv03@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
