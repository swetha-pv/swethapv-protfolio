
import React from 'react';
import { Download, Eye, FileText } from 'lucide-react';

const Resume = () => {
  // Replace with your actual resume URL when ready
  const resumeUrl = "#";

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Resume
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-12 rounded-2xl shadow-lg text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <FileText className="w-12 h-12 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Download My Resume
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my skills, experience, and achievements. 
              Perfect for a quick reference or detailed review.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Eye className="w-5 h-5 mr-3" />
                View Online
              </a>
              
              <a
                href={resumeUrl}
                download="Swetha_PV_Resume.pdf"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Download className="w-5 h-5 mr-3" />
                Download PDF
              </a>
            </div>

            <div className="mt-8 p-4 bg-white rounded-xl shadow-sm">
              <p className="text-sm text-gray-500">
                <strong>Last Updated:</strong> December 2024 | 
                <strong className="ml-2">Format:</strong> PDF | 
                <strong className="ml-2">Size:</strong> ~150KB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
