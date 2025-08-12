import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiTypescript,
  SiCss3,
  SiSpring,
  SiDocker,
  SiGithubactions,
  SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function About() {
  const skills = {
    frontend: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" size={24} /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={24} /> },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" size={24} /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" size={24} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={24} /> }
    ],
    backend: [
      { name: "Java", icon: <FaJava className="text-[#007396]" size={24} /> },
      { name: "Spring Boot", icon: <SiSpring className="text-[#6DB33F]" size={24} /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" size={24} /> },
    ],
    devops: [
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" size={24} /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" size={24} /> },
    ]
  };

  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Tarek-Jlassi-Monastiri%20CV%20Anglais.pdf";
    link.download = "Tarek-Jlassi-Monastiri-CV-Anglais.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotate({
      x: (y - centerY) / 20,
      y: (centerX - x) / 20,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/bmw back.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      <div className="container mx-auto py-20 px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About Me
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-800 to-red-500 mx-auto"></div>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Floating & Animated BMW Image */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="w-full max-w-md lg:w-[500px]"
            style={{ perspective: "1000px" }}
          >
            <motion.img
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: rotate.x,
                rotateY: rotate.y,
              }}
              src="/bmw m5 e60.png"
              alt="BMW M5 E60"
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
              whileHover={{ rotateZ: 1 }}
            />
          </motion.div>

          {/* Bio and skills */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-400">/</span>
              <span className="text-blue-400">/</span>
              <span className="text-red-400">/</span>
              Who I Am
            </h3>

            <div className="space-y-4 text-gray-200 mb-8">
              <p>
                I'm a <span className="text-cyan-400 font-medium">Software Engineer</span> from{" "}
                <span className="text-blue-400 inline-flex items-center">
                  Tunisia
                  <img 
                    src="/tunisia-flag.svg" 
                    alt="Tunisia Flag" 
                    className="ml-2 w-5 h-5 object-contain"
                  />
                </span>, holding a Bachelor's degree in{" "}
                <span className="font-medium">Software Engineering and Information Systems</span>. My technical foundation combines academic rigor with hands-on development experience.
              </p>
              <p>
                I specialize in building <span className="text-red-400">high-performance applications</span> that mirror the precision engineering of BMW's finest machines - where every line of code is crafted with the same attention to detail as their legendary M series.
              </p>
              <p>
                When I'm not coding, you'll find me working out, enjoying late night drives, or watching movies. My passion for both technology and automotive excellence drives me to create solutions that are both powerful and elegant.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">/</span>
                <span className="text-blue-400">/</span>
                <span className="text-red-400">/</span>
                <span>Technical Expertise</span>
              </h4>
              
              {/* Frontend Skills */}
              <div className="mb-6">
                <h5 className="text-lg font-medium text-cyan-400 mb-3">Frontend Development</h5>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      className="px-4 py-2 bg-cyan-900/30 hover:bg-cyan-900/50 transition-colors rounded-full shadow-sm border border-cyan-400/20 flex items-center gap-2"
                      title={skill.name}
                    >
                      {skill.icon}
                      <span className="text-sm text-gray-200">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Backend Skills */}
              <div className="mb-6">
                <h5 className="text-lg font-medium text-blue-400 mb-3">Backend Development</h5>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * (index + skills.frontend.length) }}
                      className="px-4 py-2 bg-blue-900/30 hover:bg-blue-900/50 transition-colors rounded-full shadow-sm border border-blue-400/20 flex items-center gap-2"
                      title={skill.name}
                    >
                      {skill.icon}
                      <span className="text-sm text-gray-200">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* DevOps Skills */}
              <div className="mb-6">
                <h5 className="text-lg font-medium text-red-400 mb-3">DevOps & Tools</h5>
                <div className="flex flex-wrap gap-3">
                  {skills.devops.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * (index + skills.frontend.length + skills.backend.length) }}
                      className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 transition-colors rounded-full shadow-sm border border-red-400/20 flex items-center gap-2"
                      title={skill.name}
                    >
                      {skill.icon}
                      <span className="text-sm text-gray-200">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Button */}
            <motion.div className="flex justify-center mt-6">
              <motion.button
                onClick={handleDownload}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg font-medium shadow-lg"
              >
                <FiDownload /> Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}