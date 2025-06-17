
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Palette } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 pt-20">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-teal-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-yellow-200/30 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image with Enhanced Design */}
          <div className="mb-12 relative">
            <div className="w-56 h-56 mx-auto relative group">
              {/* Outer Ring with Rotation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 p-1 shadow-2xl group-hover:shadow-purple-300/50 transition-all duration-500 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-sm"></div>
              </div>
              
              {/* Inner Profile */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-100 via-pink-100 to-teal-100 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img 
                  src="https://freeimghost.net/i/WhatsApp-Image-2025-06-02-at-21.10.54-c4e3c578.xz78ad" 
                  alt="P. V. Swetha" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
                <Palette className="w-6 h-6 text-pink-600" />
              </div>
              <div className="absolute top-1/2 -right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="w-5 h-5 text-teal-600" />
              </div>
            </div>
          </div>

          {/* Enhanced Name and Title */}
          <div className="mb-8 space-y-4">
            <h1 className="text-6xl md:text-8xl font-black mb-4 relative">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent animate-gradient bg-300% leading-tight">
                P. V. Swetha
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-teal-600/20 blur-xl -z-10 animate-pulse"></div>
            </h1>
            
            <div className="relative">
              <p className="text-xl md:text-3xl text-gray-700 font-medium leading-relaxed">
                <span className="inline-block animate-fade-in">Java Developer</span>
                <span className="mx-2 text-purple-400">•</span>
                <span className="inline-block animate-fade-in delay-200">UI/UX Designer</span>
                <span className="mx-2 text-pink-400">•</span>
                <span className="inline-block animate-fade-in delay-300">Data Analyst</span>
                <span className="mx-2 text-teal-400">•</span>
                <span className="inline-block animate-fade-in delay-500">Creator</span>
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="mb-16 animate-fade-in delay-700">
            <a
              href="#about"
              className="group inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-gray-800 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-purple-300/30 hover:bg-white/20 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Button Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10 mr-3">Explore My Work</span>
              <ArrowDown className="w-6 h-6 group-hover:animate-bounce transition-transform duration-300 relative z-10" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out"></div>
            </a>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 animate-fade-in delay-1000">
            {[
              { href: "https://linkedin.com/in/swetha-p-v-a025a8340", icon: Linkedin, color: "blue", label: "LinkedIn" },
              { href: "https://github.com", icon: Github, color: "gray", label: "GitHub" },
              { href: "mailto:swethapv03@gmail.com", icon: Mail, color: "red", label: "Email" }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className="group relative p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <social.icon className={`w-7 h-7 text-${social.color}-600 group-hover:scale-110 transition-transform duration-200`} />
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {social.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-${social.color}-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
