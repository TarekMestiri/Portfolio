import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
};

export default function ProjectCard({ title, description, image, tags, github }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/50 hover:border-red-500/30 transition-all"
    >
      <div className="relative group">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 via-transparent to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-3 py-1 bg-gray-800/50 text-red-400 rounded-full text-sm border border-gray-700"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={github}
          target="_blank"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg border border-gray-700 transition-colors w-full"
        >
          <FiGithub /> View Code
        </motion.a>
      </div>
    </motion.div>
  );
}