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
  SiJavascript,
} from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" size={24} /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#06B6D4]" size={24} />,
    },
    { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" size={24} /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-[#3178C6]" size={24} />,
    },
    { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" size={24} /> },
    {
      name: "Springboot",
      icon: <SiSpring className="text-[#6DB33F]" size={24} />,
    },
    {
      name: "Java",
      icon: <SiJavascript className="text-[#007396]" size={24} />,
    },
  ];

  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Tarek-Jlassi-Monastiri-CV-Anglais.pdf";
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
                I'm a passionate frontend developer with 3+ years of experience
                creating modern web applications. I specialize in the React
                ecosystem and love building interactive, performant user
                interfaces.
              </p>
              <p>
                My creativity helps me bridge the gap between aesthetics and
                functionality, creating products that are both beautiful and
                intuitive.
              </p>
              <p>
                When I'm not coding, you'll find me working out, enjoying late
                night drives, or watching movies.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">/</span>
                <span className="text-blue-400">/</span>
                <span className="text-red-400">/</span>
                <span>My Skills</span>
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full shadow-sm border border-white/10 flex items-center gap-2"
                    title={skill.name}
                  >
                    {skill.icon}
                    <span className="sr-only">{skill.name}</span>
                  </motion.div>
                ))}
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
