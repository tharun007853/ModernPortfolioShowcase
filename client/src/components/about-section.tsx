import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Briefcase, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Professional Summary</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Software Engineer currently working as an intern at HCLTech, specializing in both 
              embedded systems and full-stack development. With a strong foundation in Electrical and Electronics 
              Engineering from Rajalakshmi Engineering College, I bring a unique perspective that bridges hardware 
              and software development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My experience ranges from industrial electrical systems at Steel Authority of India Limited to modern 
              web technologies. I'm dedicated to continuous learning and have earned certifications in Java Full Stack, 
              Python, and automotive diagnostic systems.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="text-center p-4 hover-lift glow-on-hover">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary">8.51</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 hover-lift glow-on-hover">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-secondary">8+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Why Choose Me</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My unique combination of electrical engineering fundamentals and software development skills allows me to 
              approach problems from multiple angles. I thrive in collaborative environments and am always eager to 
              take on new challenges that push me to grow professionally.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether it's debugging complex systems, learning new technologies, or working with cross-functional teams, 
              I bring enthusiasm and a systematic approach to every project I undertake.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
