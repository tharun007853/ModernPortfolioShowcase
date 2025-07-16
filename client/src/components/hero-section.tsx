import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Code, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/IMG_20250716_135649_1752654424645.png";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-gradient bg-[length:400%_400%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 animate-float shadow-2xl glow-on-hover">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Tharun M - Professional Profile"
                  className="w-full h-full object-cover object-center profile-hover"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tharun M
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
          >
            Software Engineer & Embedded Systems Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Intern at HCLTech | Electrical & Electronics Engineering Student | Full-Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-primary hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              <Code className="mr-2 h-4 w-4" />
              View Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6 mt-8"
          >
            <a
              href="https://linkedin.com/in/tharun-m"
              className="text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Tharunteen"
              className="text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-110 transition-all duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:vitaltharun1467.s@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-110 transition-all duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </motion.div>
    </section>
  );
}
