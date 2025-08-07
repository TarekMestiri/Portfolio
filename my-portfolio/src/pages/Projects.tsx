import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { FiGithub } from "react-icons/fi";

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement>;
}

const projects = [
  {
    title: "Developer Portfolio",
    description: "Animated portfolio with React, Tailwind CSS, and Framer Motion showcasing my work",
    image: "/portfolio.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/TarekMestiri/portfolio"
  },
  {
    title: "Organization Microservice",
    description: "Java Spring Boot service managing organizational hierarchies with Docker and CI/CD",
    image: "/microservice.jpg",
    tags: ["Java", "Spring Boot", "Docker", "GitHub Actions"],
    github: "https://github.com/TarekMestiri/OrgManagement"
  },
  {
    title: "Admin Analytics Dashboard",
    description: "React dashboard with authentication flow including organization creation and joining via invite codes. Features login form, 2-step signup (create organization then account), and separate join organization flow.",
    image: "/admin dashboard.jpg",
    tags: ["React", "Tailwind CSS", "Chart.js", "Authentication"],
    github: "https://github.com/TarekMestiri/Admin-Dashboard-HOSTS"
  },
  {
    title: "Car Quiz Game",
    description: "Java application testing car knowledge with scoring system and leaderboard",
    image: "/car quiz.jpg",
    tags: ["Java", "OOP", "Swing"],
    github: "https://github.com/TarekMestiri/CarQuiz"
  },
  {
    title: "Car Marketplace",
    description: "Full-stack platform for renting/buying cars with admin portal",
    image: "/car marketplace.jpg",
    tags: ["TypeScript", "Tailwind CSS", "Java", "Spring Boot"],
    github: "https://github.com/TarekMestiri/Car-Website"
  }
];

export default function Projects({ projectsRef }: ProjectsProps) {
  return (
    <motion.section
      ref={projectsRef}
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/bmw.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay with red tint from tail lights */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-red-900/20 to-gray-900/90 backdrop-blur-sm z-0"></div>
      
      <div className="container mx-auto py-20 px-6 relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}