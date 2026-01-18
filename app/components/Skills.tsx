'use client';

import { FaCode, FaLaptopCode, FaTools, FaServer, FaBrain, FaLaptop, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNode, FaDatabase, FaGitAlt, FaGithub, FaCloud, FaRobot, FaCogs, FaPlug, FaMobile, FaGlobe } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiDocker, SiKubernetes, SiAwslambda, SiVisualstudiocode, SiNotion, SiOpenai, SiZapier, SiZoho, SiHubspot, SiStripe, SiApollographql, SiGraphql } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useState } from 'react';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    category: 'ai-ml',
    icon: FaBrain,
    description: 'AI platforms, agents, and machine learning technologies',
    skills: [
      { name: 'OpenAI', level: 95, color: '#412991', icon: SiOpenai },
      { name: 'AI Agents', level: 92, color: '#64FFDA', icon: FaRobot },
      { name: 'Chatbots', level: 90, color: '#61DAFB', icon: FaBrain },
      { name: 'ML Models', level: 88, color: '#F7DF1E', icon: FaBrain },
    ]
  },
  {
    title: 'Automation & Integration',
    category: 'automation',
    icon: FaCogs,
    description: 'Workflow automation and integration platforms',
    skills: [
      { name: 'Zapier', level: 92, color: '#FF4A00', icon: SiZapier },
      { name: 'n8n', level: 88, color: '#FF6D5A', icon: FaPlug },
      { name: 'Make.com', level: 90, color: '#00D9FF', icon: FaCogs },
      { name: 'API Pipelines', level: 95, color: '#64FFDA', icon: FaPlug },
    ]
  },
  {
    title: 'CRM Systems',
    category: 'crm',
    icon: FaDatabase,
    description: 'Customer relationship management and automation',
    skills: [
      { name: 'HubSpot', level: 90, color: '#FF7A59', icon: SiHubspot },
      { name: 'Zoho', level: 88, color: '#C8202B', icon: SiZoho },
      { name: 'CRM Automation', level: 92, color: '#64FFDA', icon: FaCogs },
      { name: 'Sales Pipeline', level: 85, color: '#3776AB', icon: FaDatabase },
    ]
  },
  {
    title: 'Full Stack Development',
    category: 'fullstack',
    icon: FaLaptopCode,
    description: 'Modern web and mobile application development',
    skills: [
      { name: 'React.js', level: 93, color: '#61DAFB', icon: FaReact },
      { name: 'Next.js', level: 90, color: '#000000', icon: SiNextdotjs },
      { name: 'TypeScript', level: 92, color: '#3178C6', icon: SiTypescript },
      { name: 'Node.js', level: 90, color: '#339933', icon: FaNode },
      { name: 'Express.js', level: 88, color: '#000000', icon: SiExpress },
      { name: 'Python', level: 92, color: '#3776AB', icon: FaPython },
    ]
  },
  {
    title: 'Databases & APIs',
    category: 'database',
    icon: FaDatabase,
    description: 'Database management and API development',
    skills: [
      { name: 'MongoDB', level: 90, color: '#47A248', icon: SiMongodb },
      { name: 'PostgreSQL', level: 88, color: '#336791', icon: SiPostgresql },
      { name: 'MySQL', level: 85, color: '#4479A1', icon: SiMysql },
      { name: 'Redis', level: 82, color: '#DC382D', icon: SiRedis },
      { name: 'GraphQL', level: 88, color: '#E10098', icon: SiGraphql },
      { name: 'REST APIs', level: 95, color: '#64FFDA', icon: FaPlug },
    ]
  },
  {
    title: 'Cloud & DevOps',
    category: 'devops',
    icon: FaCloud,
    description: 'Cloud infrastructure and deployment',
    skills: [
      { name: 'Docker', level: 88, color: '#2496ED', icon: SiDocker },
      { name: 'Kubernetes', level: 85, color: '#326CE5', icon: SiKubernetes },
      { name: 'AWS Lambda', level: 87, color: '#FF9900', icon: SiAwslambda },
      { name: 'CI/CD', level: 90, color: '#64FFDA', icon: FaTools },
      { name: 'Git/GitHub', level: 95, color: '#181717', icon: FaGithub },
    ]
  },
  {
    title: 'SaaS & Integration',
    category: 'saas',
    icon: FaGlobe,
    description: 'Software as a Service and payment integration',
    skills: [
      { name: 'SaaS Architecture', level: 92, color: '#64FFDA', icon: FaCloud },
      { name: 'Stripe', level: 88, color: '#635BFF', icon: SiStripe },
      { name: 'Payment Systems', level: 85, color: '#3776AB', icon: FaPlug },
      { name: 'Webhooks', level: 90, color: '#F7DF1E', icon: FaPlug },
    ]
  }
];

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (custom: number) => ({
      width: `${custom}%`,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };

  const categories = ['all', 'ai-ml', 'automation', 'crm', 'fullstack', 'database', 'devops', 'saas'];

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="section-padding bg-[#0A192F] overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-[#CCD6F6] mb-4"
            variants={itemVariants}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-[#8892B0] text-lg"
            variants={itemVariants}
          >
            A comprehensive overview of my technical skills and proficiency levels
          </motion.p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full capitalize transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-[#64FFDA] text-[#0A192F] font-medium shadow-lg shadow-[#64FFDA]/20'
                  : 'bg-[#112240] text-[#8892B0] hover:text-[#64FFDA] hover:bg-[#233554]'
              }`}
            >
              {category === 'cs' ? (
                <>
                  <FaBrain className="text-lg" />
                  <span>Computer Science</span>
                </>
              ) : (
                <>
                  {getCategoryIcon(category)}
                  <span>{category}</span>
                </>
              )}
            </motion.button>
          ))}
        </div>

        <div className="space-y-16">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <category.icon className="text-[#64FFDA] text-3xl" />
                <div>
                  <h3 className="text-2xl font-semibold text-[#CCD6F6]">
                    {category.title}
                  </h3>
                  <p className="text-[#8892B0] mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-[#64FFDA]/10 
                              transform transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <skill.icon className="text-2xl" style={{ color: skill.color }} />
                      <h4 className="text-xl font-semibold text-[#CCD6F6]">
                        {skill.name}
                      </h4>
                    </div>
                    <div className="w-full bg-[#233554] rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        style={{ backgroundColor: skill.color }}
                        className="h-2.5 rounded-full relative"
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ["0%", "200%"],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm text-[#8892B0]">
                        {skill.level}%
                      </span>
                      {hoveredSkill === skill.name && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-[#64FFDA] text-sm"
                        >
                          {getSkillLevel(skill.level)}
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Helper functions
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'ai-ml':
      return <FaBrain className="text-lg" />;
    case 'automation':
      return <FaCogs className="text-lg" />;
    case 'crm':
      return <FaDatabase className="text-lg" />;
    case 'fullstack':
      return <FaLaptopCode className="text-lg" />;
    case 'database':
      return <FaDatabase className="text-lg" />;
    case 'devops':
      return <FaCloud className="text-lg" />;
    case 'saas':
      return <FaGlobe className="text-lg" />;
    default:
      return null;
  }
};

const getSkillLevel = (level: number): string => {
  if (level >= 90) return 'Expert';
  if (level >= 80) return 'Advanced';
  if (level >= 70) return 'Intermediate';
  return 'Beginner';
};

export default Skills; 
