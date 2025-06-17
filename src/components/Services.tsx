
import React from 'react';
import { Code, Palette, BarChart3, PenTool, Camera, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Custom websites and web applications built with modern technologies and responsive design principles.",
      icon: Code,
      color: "from-blue-500 to-purple-600",
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimization", "Cross-browser Compatibility"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging digital experiences.",
      icon: Palette,
      color: "from-pink-500 to-red-500",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      title: "Data Analysis & Dashboards",
      description: "Transform your data into actionable insights with interactive dashboards and comprehensive analysis.",
      icon: BarChart3,
      color: "from-green-500 to-teal-600",
      features: ["Data Visualization", "Business Intelligence", "Interactive Dashboards", "Statistical Analysis"]
    },
    {
      title: "Content Writing",
      description: "Compelling content that engages your audience and drives results across various platforms.",
      icon: PenTool,
      color: "from-yellow-500 to-orange-500",
      features: ["Technical Writing", "Creative Content", "SEO Optimization", "Social Media Content"]
    },
    {
      title: "Photo/Video Editing",
      description: "Professional editing services to enhance your visual content and brand presence.",
      icon: Camera,
      color: "from-purple-500 to-indigo-600",
      features: ["Photo Enhancement", "Video Production", "Brand Graphics", "Social Media Assets"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              I offer comprehensive digital solutions to help bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h3>
              <p className="text-purple-100 mb-6 text-lg">
                Let's discuss your project and bring your vision to life
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Let's Work Together
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
