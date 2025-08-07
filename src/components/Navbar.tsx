import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gray-900/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-800"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* BMW-inspired logo */}
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full border-2 border-cyan-400"></div>
            <div className="absolute w-6 h-6 rounded-full border-2 border-blue-800"></div>
            <div className="absolute w-4 h-4 rounded-full border-2 border-red-500"></div>
          </div>
          <span className="text-white font-mono text-sm">
            <span className="font-bold">
              <span className="text-cyan-400">/</span>
              <span className="text-blue-600">/</span>
              <span className="text-red-500">/</span>
            </span>
            <span className="text-gray-300 ml-1">TJM</span>
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900/95 overflow-hidden border-t border-gray-800"
        >
          <div className="flex flex-col gap-2 p-4">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-cyan-400 py-3 px-4 rounded hover:bg-gray-800/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}