import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60 }}
      className="fixed w-full z-50 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md border-b border-gray-700/50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="w-9 h-9 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-500 rounded-lg shadow-md flex items-center justify-center"
          >
            <span className="text-white font-bold text-lg">TJ</span>
          </motion.div>
          <span className="text-white font-semibold tracking-wide text-lg group-hover:text-cyan-400 transition-colors">
            Monastiri
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium tracking-wide"
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
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 border-t border-gray-700/50"
          >
            <div className="flex flex-col gap-2 p-4">
              {menuItems.map((item) => (
                <motion.div
                  key={item}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-cyan-400 py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
