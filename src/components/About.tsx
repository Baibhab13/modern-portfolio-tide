
import React from 'react';
import { User, Briefcase, Book, Code, UserCheck, FileCode, Globe, Figma, Server, Database, Cpu, ChevronRight, Trophy, Award, Users } from 'lucide-react';

/**
 * About section component
 * 
 * This component renders information about yourself, your education,
 * experience, and skills.
 */
const About = () => {
  // Skills array with icons for easy modification
  const technicalSkills = [
    { name: "C", icon: <FileCode size={16} /> },
    { name: "Python", icon: <FileCode size={16} /> },
    { name: "Kotlin", icon: <FileCode size={16} /> },
    { name: "Java", icon: <FileCode size={16} /> },
    { name: "Figma", icon: <Figma size={16} /> },
    { name: "MS Office", icon: <FileCode size={16} /> },
    { name: "HTML", icon: <Globe size={16} /> },
    { name: "CSS", icon: <Globe size={16} /> },
    { name: "React", icon: <Code size={16} /> },
    { name: "Scikit-learn", icon: <Cpu size={16} /> },
    { name: "Dagger-Hilt", icon: <Code size={16} /> },
    { name: "KSP", icon: <Code size={16} /> },
    { name: "Koin", icon: <Code size={16} /> },
    { name: "Firebase", icon: <Server size={16} /> },
    { name: "Room", icon: <Database size={16} /> },
    { name: "Seaborn", icon: <Cpu size={16} /> }
  ];
  
  const softSkills = [
    { name: "Teamwork", icon: <UserCheck size={16} /> },
    { name: "Leadership", icon: <UserCheck size={16} /> },
    { name: "Problem Solving", icon: <ChevronRight size={16} /> },
    { name: "Decision Making", icon: <ChevronRight size={16} /> }
  ];

  // Achievements array
  const achievements = [
    "Secured 3rd Prize at NIT Rourkela INNOVISION 2024 IMAGINE AI Hackathon, demonstrating AI innovation and teamwork.",
    "Won 1st Prize in the Internal Smart India Hackathon held at PMEC.",
    "Secured 2nd Prize at ML DL Workshop.",
    "Participated in the 14th Project Innovation Contest (ICDCIT–2025), showcasing technical expertise."
  ];

  // Positions of Responsibility array
  const responsibilities = [
    {
      position: "Secretary",
      description: "Led and coordinated club activities, managed communications, and oversaw event planning, driving member engagement."
    },
    {
      position: "Organizer, CodeKriti 3.0",
      description: "Managed the overall planning and execution of the college's flagship techfest."
    },
    {
      position: "Organizer, DevXtreme Hackathon",
      description: "Brought alumni mentors to guide students in full-stack development."
    },
    {
      position: "Technical Coordinator, ICORSVB 2025",
      description: "Handled all technical aspects of the international conference held at PMEC."
    },
    {
      position: "Session Coordinator, ICMIB 2025",
      description: "Coordinated session scheduling and management for the international conference."
    }
  ];
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title gradient-text mb-10">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          {/* Personal Info */}
          <div className="glass-card p-8 animate-scale-in delay-100" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-icon-bg))] flex items-center justify-center mr-4">
                <User size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-medium gradient-text">Personal Info</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 dark:text-gray-300">
              I'm a passionate developer with a keen eye for design. I enjoy creating seamless, 
              user-centric digital experiences that solve real problems.
            </p>
            
            <div className="space-y-3">
              <div className="flex justify-between backdrop-blur-sm bg-white/30 dark:bg-black/20 p-2 rounded-lg">
                <span className="font-medium">Name:</span>
                <span>Baibhab Sahu</span>
              </div>
              <div className="flex justify-between backdrop-blur-sm bg-white/30 dark:bg-black/20 p-2 rounded-lg">
                <span className="font-medium">Email:</span>
                <span>baibhabsahu31@gmail.com</span>
              </div>
              <div className="flex justify-between backdrop-blur-sm bg-white/30 dark:bg-black/20 p-2 rounded-lg">
                <span className="font-medium">Location:</span>
                <span>Berhampur, Odisha</span>
              </div>
              <div className="flex justify-between backdrop-blur-sm bg-white/30 dark:bg-black/20 p-2 rounded-lg">
                <span className="font-medium">GitHub:</span>
                <span>Baibhab13</span>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div className="glass-card p-8 animate-scale-in delay-300" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-icon-bg))] flex items-center justify-center mr-4">
                <Book size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-medium gradient-text">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="backdrop-blur-sm bg-white/30 dark:bg-black/20 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">BTech in Computer Science</h4>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2022 - present</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1 dark:text-gray-400">Parala Maharaja Engineering College, Berhampur</p>
                <p className="text-sm">CGPA: 8.7</p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/30 dark:bg-black/20 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">Senior Secondary (CBSE Class XII)</h4>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2018 - 2020</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1 dark:text-gray-400">Kendriya Vidyalaya, Berhampur</p>
                <p className="text-sm">Percentage: 90.8%</p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/30 dark:bg-black/20 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">Higher Secondary (CBSE Class X)</h4>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2018</span>
                </div>
                <p className="text-sm text-muted-foreground dark:text-gray-400">Kendriya Vidyalaya, Berhampur</p>
                <p className="text-sm">Percentage: 91%</p>
              </div>
            </div>
          </div>
          
          {/* Experience */}
          <div className="glass-card p-8 animate-scale-in delay-500" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-icon-bg))] flex items-center justify-center mr-4">
                <Briefcase size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-medium gradient-text">Experience</h3>
            </div>
            
            <div className="backdrop-blur-sm bg-white/30 dark:bg-black/20 p-3 rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium">Summer Intern</h4>
                <span className="text-sm text-muted-foreground dark:text-gray-400">June 2024 - July 2024</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1 dark:text-gray-400">PMEC, Berhampur, Odisha</p>
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li>Developed 3 ML projects under professors' guidance.</li>
                <li>Created a neural network for image classification with 95% accuracy on 10,000 images.</li>
                <li>Enhanced an LLM project, boosting performance by 20%.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Achievements Section */}
        <div className="mt-16 glass-card p-8 animate-slide-in-right delay-200">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-achievement-bg))] flex items-center justify-center mr-4">
              <Trophy size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-medium gradient-achievement">Achievements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/30 dark:bg-black/20 p-4 rounded-lg animate-bounce-in" 
                style={{ animationDelay: `${0.3 + 0.1 * index}s` }}>
                <div className="flex items-start gap-3">
                  <Award size={18} className="text-[hsl(var(--about-achievement-bg))] mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">{achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Positions of Responsibility Section */}
        <div className="mt-10 glass-card p-8 animate-slide-in-left delay-400">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-responsibility-bg))] flex items-center justify-center mr-4">
              <Users size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-medium gradient-responsibility">Positions of Responsibility</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/30 dark:bg-black/20 p-4 rounded-lg animate-bounce-in" 
                style={{ animationDelay: `${0.5 + 0.1 * index}s` }}>
                <h4 className="font-medium flex items-center gap-2">
                  <UserCheck size={16} className="text-[hsl(var(--about-responsibility-bg))]" />
                  {responsibility.position}
                </h4>
                <p className="text-muted-foreground ml-6 mt-1 dark:text-gray-300">{responsibility.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className="glass-card p-8 animate-slide-in-right delay-600">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-icon-bg))] flex items-center justify-center mr-4">
                <Code size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-medium gradient-text">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 backdrop-blur-sm bg-white/40 dark:bg-black/30 rounded-full shadow-sm text-sm animate-bounce-in flex items-center gap-2"
                  style={{ animationDelay: `${0.7 + 0.05 * index}s` }}
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="glass-card p-8 animate-slide-in-left delay-700">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-icon-bg))] flex items-center justify-center mr-4">
                <UserCheck size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-medium gradient-text">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 backdrop-blur-sm bg-white/40 dark:bg-black/30 rounded-full shadow-sm text-sm animate-bounce-in flex items-center gap-2"
                  style={{ animationDelay: `${0.9 + 0.1 * index}s` }}
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
