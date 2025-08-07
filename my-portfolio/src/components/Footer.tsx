import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 py-6 border-t border-gray-800"
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Mini BMW-inspired badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 mb-2"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full border border-cyan-400"></div>
            <div className="absolute w-4 h-4 rounded-full border border-blue-800"></div>
            <div className="absolute w-3 h-3 rounded-full border border-red-500"></div>
          </div>
          <span className="text-white font-mono text-xs">
            <span className="font-bold">
              <span className="text-cyan-400">/</span>
              <span className="text-blue-600">/</span>
              <span className="text-red-500">/</span>
            </span>
            <span className="text-gray-300 ml-0.5">TJM</span>
          </span>
        </motion.div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Tarek Jlassi Monastiri. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}