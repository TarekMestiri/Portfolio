import { motion } from "framer-motion";

interface HomeProps {
  projectsRef: React.RefObject<HTMLDivElement>;
}

export default function Home({ projectsRef }: HomeProps) {
  return (
     <motion.section
      ref={projectsRef} // Added ref to the section element
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/bmw bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay - sandy beach tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-amber-900/20 to-black/80 z-0"></div>
      
      {/* Enhanced headlight beams */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/2 bg-gradient-to-t from-amber-400/40 via-transparent to-transparent transform -skew-x-12"></div>
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-gradient-to-t from-amber-400/40 via-transparent to-transparent transform skew-x-12"></div>
      </motion.div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Enhanced BMW Badge Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center justify-center gap-3 mb-6"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Outer cyan ring */}
              <div className="absolute w-full h-full rounded-full border-2 border-cyan-400 animate-pulse"></div>
              {/* Middle dark blue ring */}
              <div className="absolute w-10 h-10 rounded-full border-2 border-blue-800 animate-pulse delay-100"></div>
              {/* Inner red ring */}
              <div className="absolute w-8 h-8 rounded-full border-2 border-red-500 animate-pulse delay-200"></div>
            </div>
            <span className="text-white font-mono text-lg tracking-widest">
              <span className="font-bold tracking-tighter">
                <span className="text-cyan-500">/</span>
                <span className="text-blue-800">/</span>
                <span className="text-red-500">/</span>
              </span>
              <span className="font-bold text-black bg-gradient-to-b from-gray-200 to-gray-400 bg-clip-text text-transparent ml-2">M5</span>
            </span>
          </motion.div>

          {/* Name with enhanced engine rev effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
          >
            <motion.span 
              className="inline-block"
              animate={{ 
                textShadow: [
                  "0 0 8px rgba(34,211,238,0)",
                  "0 0 16px rgba(34,211,238,0.8)",
                  "0 0 8px rgba(34,211,238,0)"
                ]
              }}
              transition={{ 
                delay: 1.5,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 5
              }}
            >
              TAREK JLASSI<br />MONASTIRI
            </motion.span>
          </motion.h1>
          
          {/* Professional tagline with enhanced styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.p
              className="text-3xl md:text-4xl font-medium leading-relaxed"
              animate={{
                textShadow: "0 0 15px rgba(8, 47, 73, 0.9)",
              }}
              style={{
                color: "#e0f2fe",
              }}
            >
              <span className="font-bold text-4xl md:text-5xl">CREATING</span> HIGH-PERFORMANCE<br />
              <span className="italic">WEB EXPERIENCES</span> LIKE BMW CRAFTS<br />
              <span className="font-bold">DRIVING MACHINES</span>
            </motion.p>
            
            {/* Subtle divider */}
            <motion.div 
              className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-blue-800 mx-auto my-8 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2 }}
            />
            
            {/* Secondary professional description */}
            <motion.p
              className="text-xl text-gray-300 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Full-stack developer specializing in creating applications<br />
              with React, TypeScript, and Java Spring Boot
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Shooting stars */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute inset-0 overflow-hidden z-0"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, y: Math.random() * 100 }}
            animate={{ 
              x: "100vw",
              transition: {
                duration: 2 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }
            }}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              width: `${100 + Math.random() * 150}px`,
              top: `${Math.random() * 100}%`,
              opacity: 0.7 + Math.random() * 0.3,
              filter: "blur(0.5px)"
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}