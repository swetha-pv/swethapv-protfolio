
import React from 'react';
import { ExternalLink, Github, Code, Calculator, Thermometer, Dice6, BookOpen, CheckSquare, BarChart3, Database, TrendingUp, FileSpreadsheet, PieChart } from 'lucide-react';

const Projects = () => {
  const webProjects = [
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

  const dataProjects = [
    {
      title: "E-commerce SQL Analysis",
      description: "SQL-based analysis of e-commerce data with performance insights",
      tech: ["SQL", "Database Analysis"],
      icon: Database,
      color: "from-blue-600 to-cyan-600",
      githubUrl: "https://github.com/swetha-pv/ecommerce-sql-analysis"
    },
    {
      title: "Tableau Superstore Analysis",
      description: "Interactive dashboard analyzing superstore sales data with Tableau",
      tech: ["Tableau", "Data Visualization"],
      icon: BarChart3,
      color: "from-orange-500 to-red-600",
      githubUrl: "https://github.com/swetha-pv/Tableau-Superstore-Analysis"
    },
    {
      title: "Netflix Data Cleaning",
      description: "Data preprocessing and cleaning project for Netflix dataset",
      tech: ["Python", "Data Cleaning"],
      icon: FileSpreadsheet,
      color: "from-red-600 to-pink-600",
      githubUrl: "https://github.com/swetha-pv/netflix_data_cleaning"
    },
    {
      title: "YouTube Trending Analytics",
      description: "Analysis of YouTube trending videos with statistical insights",
      tech: ["Python", "Analytics"],
      icon: TrendingUp,
      color: "from-red-500 to-yellow-600",
      githubUrl: "https://github.com/swetha-pv/youtube-analytics"
    },
    {
      title: "Sales Dashboard Design",
      description: "Interactive sales dashboard with key performance indicators",
      tech: ["Dashboard", "Visualization"],
      icon: PieChart,
      color: "from-green-600 to-blue-600",
      githubUrl: "https://github.com/swetha-pv/Simple-Sales-Dashboard-Design"
    },
    {
      title: "Sales Summary Analysis",
      description: "Comprehensive sales data analysis with summary reports",
      tech: ["Data Analysis", "Reporting"],
      icon: BarChart3,
      color: "from-purple-600 to-pink-600",
      githubUrl: "https://github.com/swetha-pv/sales-summary"
    },
    {
      title: "Exploratory Data Analysis",
      description: "In-depth exploratory analysis of complex datasets",
      tech: ["Python", "EDA"],
      icon: Database,
      color: "from-teal-600 to-green-600",
      githubUrl: "https://github.com/swetha-pv/Exploratory-Data-Analysis"
    },
    {
      title: "Sales Trend Analysis",
      description: "Time-series analysis of sales trends and forecasting",
      tech: ["Python", "Time Series"],
      icon: TrendingUp,
      color: "from-blue-500 to-purple-500",
      githubUrl: "https://github.com/swetha-pv/Sales-Trend-Analysis"
    },
    {
      title: "Business Insights",
      description: "Strategic business insights derived from data analysis",
      tech: ["Analytics", "Business Intelligence"],
      icon: PieChart,
      color: "from-indigo-600 to-purple-600",
      githubUrl: "https://github.com/swetha-pv/business-insights"
    }
  ];

  const ProjectCard = ({ project, showDemo = true }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
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
        <a
          href={project.githubUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-shadow duration-200"
        >
          <Github className="w-4 h-4 mr-2" />
          Code
        </a>
        {showDemo && (
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-shadow duration-200">
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </button>
        )}
      </div>
    </div>
  );

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

          {/* Web Development Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Web Development</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Data Analysis Projects */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Data Analysis & Visualization</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataProjects.map((project, index) => (
                <ProjectCard key={index} project={project} showDemo={false} />
              ))}
            </div>
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
