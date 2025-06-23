
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Programming in Java – NPTEL",
      url: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs105/Course/NPTEL24CS105S65080112803841627.pdf"
    },
    {
      name: "UI/UX for Beginners – Great Learning",
      url: "https://olympus.mygreatlearning.com/courses/55928/certificate?pb_id=581"
    },
    {
      name: "Accenture – Data Analytics & Visualization",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_afc47gJo9hdcnzyjw_1748088459313_completion_certificate.pdf"
    },
    {
      name: "Be 10x - Power BI",
      url: "https://certx.in/certificate/36a28147-6eed-47a5-8342-e5f926ebba61394232"
    },
    {
      name: "Introduction to Internet Of Things – NPTEL",
      url: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs44/Course/NPTEL25CS44S35080023304343550.pdf"
    },
    {
      name: "Excel Certification – OneRoadmap",
      url: "https://oneroadmap.io/skills/excel/certificate/CERT-4759C39B"
    },
    {
      name: "AWS Cloud Foundations – Credly",
      url: "https://www.credly.com/badges/dd4e2aa3-4a37-413a-acc2-d682702c10e1/linked_in_profile"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center mb-8">
              <Award className="w-12 h-12 text-teal-600 mr-4" />
              <h3 className="text-3xl font-bold text-gray-800">Professional Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-gray-50 to-blue-50 px-6 py-4 rounded-xl font-medium text-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-between hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transform hover:scale-105"
                >
                  <span className="text-lg">{cert.name}</span>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors duration-200" />
                </a>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 text-lg">
                Continuously expanding my knowledge through hands-on learning and industry-recognized programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
