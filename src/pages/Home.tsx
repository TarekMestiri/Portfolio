import { motion } from "framer-motion";

interface HomeProps {
  projectsRef: React.RefObject<HTMLDivElement>;
}

export default function Home({ projectsRef }: HomeProps) {
  return (
    <motion.section
      ref={projectsRef}
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
      {/* Layered overlays for pro contrast */}
      <div className="absolute inset-0 z-0">
        {/* Dark vignette edges for focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90"></div>

        {/* Soft graffiti color wash */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 via-purple-900/30 to-pink-900/40 mix-blend-soft-light"></div>

        {/* Gentle radial center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>
      </div>

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
          {/* Creative Pro Badge Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center justify-center gap-3 mb-6"
          >
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Hexagon outline with gradient animation */}
              <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                <polygon
                  points="50,5 93,27 93,73 50,95 7,73 7,27"
                  strokeWidth="2"
                  fill="none"
                >
                  <animate
                    attributeName="stroke"
                    values="#06b6d4;#3b82f6;#8b5cf6;#06b6d4"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </polygon>
              </svg>

              {/* Inner glowing brackets */}
              <motion.span
                className="text-cyan-300 font-bold text-2xl"
                animate={{
                  textShadow: [
                    "0 0 4px rgba(34,211,238,0)",
                    "0 0 12px rgba(34,211,238,0.8)",
                    "0 0 4px rgba(34,211,238,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                {"{ }"}
              </motion.span>
            </div>
          </motion.div>

          {/* Name with enhanced engine rev effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  "0 0 8px rgba(40,111,238,0)",
                  "0 0 16px rgba(34,211,238,0.8)",
                  "0 0 8px rgba(34,211,238,0)",
                ],
              }}
              transition={{
                delay: 1.5,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              TAREK JLASSI
              <br />
              MONASTIRI
            </motion.span>
          </motion.h1>

          {/* Professional tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.p
              className="text-3xl md:text-4xl font-medium leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
              animate={{
                textShadow: "0 0 15px rgba(8, 47, 73, 0.9)",
              }}
              style={{
                color: "#e0f2fe",
              }}
            >
              <span className="font-bold text-4xl md:text-5xl">CREATING</span>{" "}
              HIGH-PERFORMANCE
              <br />
              <span className="italic">WEB EXPERIENCES</span> LIKE BMW CRAFTS
              <br />
              <span className="font-bold">DRIVING MACHINES</span>
            </motion.p>

            {/* Divider */}
            <motion.div
              className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-blue-800 mx-auto my-8 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2 }}
            />

            {/* Secondary description */}
            <motion.p
              className="text-xl text-gray-300 mt-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Full-stack developer specializing in creating applications
              <br />
              with React, TypeScript, Tailwind CSS, and Java Spring Boot
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
                delay: Math.random() * 5,
              },
            }}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              width: `${100 + Math.random() * 150}px`,
              top: `${Math.random() * 100}%`,
              opacity: 0.7 + Math.random() * 0.3,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
