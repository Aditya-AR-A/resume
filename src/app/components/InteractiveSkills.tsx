"use client";

import React, { useState } from 'react';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  experience: string;
  description: string;
  projects?: string[];
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const InteractiveSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Python Development');

  const skillCategories: SkillCategory[] = [
    {
      title: 'Python Development',
      icon: '🐍',
      skills: [
        {
          name: 'NumPy',
          level: 'Expert',
          experience: '3+ years',
          description: 'Advanced numerical computing and array operations. Extensive experience with vectorization, broadcasting, and performance optimization.',
          projects: ['Data Analysis Pipeline', 'ML Feature Engineering', 'Scientific Computing']
        },
        {
          name: 'Pandas',
          level: 'Expert',
          experience: '3+ years',
          description: 'Data manipulation and analysis expert. Proficient in complex data transformations, merging, grouping, and time series analysis.',
          projects: ['Customer Analytics', 'Financial Data Processing', 'ETL Pipelines']
        },
        {
          name: 'Flask',
          level: 'Advanced',
          experience: '2+ years',
          description: 'Web framework for building RESTful APIs and web applications. Experience with blueprints, authentication, and database integration.',
          projects: ['API Development', 'Web Applications', 'Microservices']
        },
        {
          name: 'Django',
          level: 'Intermediate',
          experience: '1+ year',
          description: 'Full-featured web framework for rapid development. Experience with ORM, admin interface, and security features.',
          projects: ['Content Management System', 'E-commerce Platform']
        }
      ]
    },
    {
      title: 'Data Science',
      icon: '📊',
      skills: [
        {
          name: 'TensorFlow',
          level: 'Advanced',
          experience: '2+ years',
          description: 'Deep learning framework for building neural networks. Experience with CNNs, RNNs, and transfer learning.',
          projects: ['Image Classification', 'NLP Models', 'Predictive Analytics']
        },
        {
          name: 'PyTorch',
          level: 'Advanced',
          experience: '2+ years',
          description: 'Dynamic neural network framework. Proficient in research-oriented deep learning and model experimentation.',
          projects: ['Research Projects', 'Custom Neural Architectures']
        },
        {
          name: 'Scikit-learn',
          level: 'Expert',
          experience: '3+ years',
          description: 'Machine learning library for classical ML algorithms. Expert in model selection, evaluation, and hyperparameter tuning.',
          projects: ['Classification Models', 'Clustering Analysis', 'Regression Tasks']
        },
        {
          name: 'Matplotlib/Seaborn',
          level: 'Advanced',
          experience: '3+ years',
          description: 'Data visualization libraries for creating publication-quality plots and statistical visualizations.',
          projects: ['Data Analysis Reports', 'Dashboard Creation', 'Statistical Analysis']
        },
        {
          name: 'Jupyter Notebooks',
          level: 'Expert',
          experience: '3+ years',
          description: 'Interactive development environment for data science workflows, prototyping, and documentation.',
          projects: ['Research Documentation', 'Data Exploration', 'Model Development']
        }
      ]
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: [
        {
          name: 'React',
          level: 'Advanced',
          experience: '2+ years',
          description: 'Modern JavaScript library for building user interfaces. Proficient in hooks, context, and component architecture.',
          projects: ['Portfolio Website', 'Dashboard Applications', 'Interactive UIs']
        },
        {
          name: 'Next.js',
          level: 'Advanced',
          experience: '1+ year',
          description: 'React framework with server-side rendering and static site generation. Experience with API routes and optimization.',
          projects: ['Portfolio Website', 'Full-stack Applications']
        },
        {
          name: 'JavaScript/TypeScript',
          level: 'Advanced',
          experience: '3+ years',
          description: 'Modern JavaScript and TypeScript for type-safe development. Proficient in ES6+, async/await, and functional programming.',
          projects: ['Web Applications', 'API Development', 'Frontend Components']
        },
        {
          name: 'HTML/CSS',
          level: 'Advanced',
          experience: '4+ years',
          description: 'Semantic HTML and modern CSS including Flexbox, Grid, and responsive design principles.',
          projects: ['Responsive Websites', 'UI Components', 'Landing Pages']
        }
      ]
    },
    {
      title: 'Full Stack',
      icon: '⚡',
      skills: [
        {
          name: 'Node.js',
          level: 'Advanced',
          experience: '2+ years',
          description: 'Server-side JavaScript runtime for building scalable backend applications and APIs.',
          projects: ['REST APIs', 'Real-time Applications', 'Microservices']
        },
        {
          name: 'PostgreSQL',
          level: 'Advanced',
          experience: '2+ years',
          description: 'Relational database management with complex queries, indexing, and performance optimization.',
          projects: ['Data Warehousing', 'Application Backends', 'Analytics Databases']
        },
        {
          name: 'MongoDB',
          level: 'Intermediate',
          experience: '1+ year',
          description: 'NoSQL database for flexible document storage and real-time applications.',
          projects: ['Content Management', 'User Data Storage', 'Real-time Apps']
        },
        {
          name: 'RESTful APIs',
          level: 'Expert',
          experience: '3+ years',
          description: 'Design and implementation of RESTful web services with proper HTTP methods, status codes, and authentication.',
          projects: ['Backend Services', 'Integration APIs', 'Microservices Architecture']
        }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        {
          name: 'AWS',
          level: 'Intermediate',
          experience: '1+ year',
          description: 'Amazon Web Services for cloud computing, including EC2, S3, Lambda, and RDS.',
          projects: ['Web Hosting', 'Data Storage', 'Serverless Functions']
        },
        {
          name: 'Docker',
          level: 'Intermediate',
          experience: '1+ year',
          description: 'Containerization technology for application deployment and development environment consistency.',
          projects: ['Application Deployment', 'Development Environments']
        },
        {
          name: 'Git/GitHub',
          level: 'Expert',
          experience: '4+ years',
          description: 'Version control system for code management, collaboration, and deployment workflows.',
          projects: ['All Development Projects', 'Team Collaboration', 'CI/CD Pipelines']
        },
        {
          name: 'Linux/Unix',
          level: 'Advanced',
          experience: '3+ years',
          description: 'Command-line proficiency, shell scripting, and system administration on Linux systems.',
          projects: ['Server Management', 'Automation Scripts', 'Development Environments']
        }
      ]
    },
    {
      title: 'Soft Skills',
      icon: '🤝',
      skills: [
        {
          name: 'Problem Solving',
          level: 'Expert',
          experience: 'Continuous',
          description: 'Analytical thinking and systematic approach to breaking down complex problems into manageable solutions.',
          projects: ['Algorithm Design', 'System Architecture', 'Debugging Complex Issues']
        },
        {
          name: 'Team Collaboration',
          level: 'Advanced',
          experience: '3+ years',
          description: 'Effective communication and collaboration in cross-functional teams using Agile methodologies.',
          projects: ['Group Projects', 'Code Reviews', 'Knowledge Sharing']
        },
        {
          name: 'Technical Communication',
          level: 'Advanced',
          experience: '3+ years',
          description: 'Ability to explain complex technical concepts to both technical and non-technical stakeholders.',
          projects: ['Documentation', 'Presentations', 'Code Reviews']
        },
        {
          name: 'Continuous Learning',
          level: 'Expert',
          experience: 'Lifelong',
          description: 'Commitment to staying updated with latest technologies and best practices in software development.',
          projects: ['Certifications', 'Online Courses', 'Tech Community Participation']
        }
      ]
    }
  ];

  const getLevelColorClass = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Beginner': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Expert': return '100%';
      case 'Advanced': return '80%';
      case 'Intermediate': return '60%';
      case 'Beginner': return '40%';
      default: return '40%';
    }
  };

  const currentCategory = skillCategories.find(cat => cat.title === selectedCategory);

  return (
    <section id="skills" className="portfolio-card p-8 mb-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b-2 border-blue-500 pb-2 inline-block">
        Technical Skills & Expertise
      </h2>
      <p className="portfolio-text-muted mb-8">
        Comprehensive overview of my technical skills across different domains. Hover over any skill to see detailed experience and project examples.
      </p>
      
      {/* Category Selector */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {skillCategories.map((category) => (
          <button
            key={category.title}
            onClick={() => setSelectedCategory(category.title)}
            className={`
              px-5 py-2.5 rounded-full border-2 cursor-pointer text-sm font-semibold transition-all duration-300 flex items-center gap-2
              ${
                selectedCategory === category.title
                  ? 'border-blue-500 bg-blue-500 text-white'
                  : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400'
              }
            `}
          >
            <span style={{ fontSize: '18px' }}>{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      {currentCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {currentCategory.skills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`
                p-5 bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer transition-all duration-300
                ${hoveredSkill === skill ? 'transform -translate-y-1 shadow-lg' : 'shadow-sm'}
                hover:border-blue-300 dark:hover:border-blue-600
              `}
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="m-0 text-slate-900 dark:text-slate-100 text-lg font-semibold">{skill.name}</h4>
                <span className={`
                  ${getLevelColorClass(skill.level)} text-white px-2 py-1 rounded-full text-xs font-semibold
                `}>
                  {skill.level}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-sm mb-3 overflow-hidden">
                <div 
                  className={`h-full ${getLevelColorClass(skill.level)} rounded-sm transition-all duration-500`}
                  style={{ width: getLevelWidth(skill.level) }}
                />
              </div>
              
              <p className="text-xs text-slate-600 dark:text-slate-400 my-1 font-semibold">
                Experience: {skill.experience}
              </p>
              
              {hoveredSkill === skill && (
                <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg animate-fade-in">
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  {skill.projects && skill.projects.length > 0 && (
                    <div>
                      <strong className="text-xs text-blue-600 dark:text-blue-400">Projects:</strong>
                      <ul className="text-xs text-slate-600 dark:text-slate-400 mt-1 pl-4">
                        {skill.projects.map((project, i) => (
                          <li key={i}>{project}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div className="text-center">
          <h3 className="text-blue-600 dark:text-blue-400 m-0 mb-1 text-2xl font-bold">
            {skillCategories.reduce((total, cat) => total + cat.skills.length, 0)}
          </h3>
          <p className="m-0 text-slate-600 dark:text-slate-400 text-sm">Total Skills</p>
        </div>
        <div className="text-center">
          <h3 className="text-green-500 m-0 mb-1 text-2xl font-bold">
            {skillCategories.reduce((total, cat) => 
              total + cat.skills.filter(skill => skill.level === 'Expert').length, 0
            )}
          </h3>
          <p className="m-0 text-slate-600 dark:text-slate-400 text-sm">Expert Level</p>
        </div>
        <div className="text-center">
          <h3 className="text-blue-600 dark:text-blue-400 m-0 mb-1 text-2xl font-bold">
            {skillCategories.length}
          </h3>
          <p className="m-0 text-slate-600 dark:text-slate-400 text-sm">Skill Categories</p>
        </div>
        <div className="text-center">
          <h3 className="text-yellow-500 m-0 mb-1 text-2xl font-bold">4+</h3>
          <p className="m-0 text-slate-600 dark:text-slate-400 text-sm">Years Experience</p>
        </div>
      </div>

    </section>
  );
};

export default InteractiveSkills;
