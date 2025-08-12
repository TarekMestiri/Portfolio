import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/TarekMestiri", name: "GitHub" },
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/tarek-monastiri", name: "LinkedIn" },
    { icon: <FiMail />, url: "mailto:tarek.jlassi.monastiri@gmail.com", name: "Email" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-t from-gray-900 to-gray-950 py-12 border-t border-gray-800 relative overflow-hidden"
    >
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Glowing center divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent my-8"
        />

        {/* Social links with hover glow */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-2 text-gray-400 hover:text-white transition-colors"
              aria-label={link.name}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-cyan-400 group-hover:w-3/5 group-hover:transition-all duration-300" 
                    style={{ transform: 'translateX(-50%)' }} />
            </motion.a>
          ))}
        </div>

        {/* Copyright with subtle animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 font-mono tracking-wider">
            © {currentYear} <span className="text-gray-300">TAREK JLASSI MONASTIRI</span>
          </p>
          <p className="text-xs text-gray-600 mt-2 font-mono">
            CRAFTED WITH PRECISION
          </p>
        </motion.div>

        {/* BMW-inspired performance badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-6"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-sm animate-pulse"></div>
            <div className="relative border border-gray-700 rounded-full px-4 py-1 bg-gray-900/50 backdrop-blur-sm">
              <span className="text-xs font-mono text-cyan-400 tracking-widest">PERFORMANCE</span>
              <span className="text-xs font-mono text-gray-500 mx-1">|</span>
              <span className="text-xs font-mono text-gray-300 tracking-widest">DRIVEN</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: i * 0.1 }}
          className="absolute bottom-0 h-px bg-cyan-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </motion.footer>
  );
}