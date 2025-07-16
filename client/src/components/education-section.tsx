import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Electrical and Electronics Engineering",
      institution: "Rajalakshmi Engineering College",
      period: "Oct 2021 - May 2025",
      grade: "CGPA: 8.51",
      icon: GraduationCap,
      gradient: "from-primary to-secondary",
      skills: ["C Programming", "Python","Problem Solving"],
    },
    {
      degree: "Higher Secondary",
      field: "HSC",
      institution: "Sri Ramakrishna Matriculation Higher Secondary School",
      period: "2020 - 2021",
      grade: "Percentage: 92.37%",
      icon: School,
      gradient: "from-secondary to-accent",
    },
    {
      degree: "Secondary School",
      field: "SSLC",
      institution: "Sri Ramakrishna Matriculation Higher Secondary School",
      period: "2018 - 2019",
      grade: "Percentage: 93.40%",
      icon: Award,
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 shadow-lg hover-lift glow-on-hover h-full">
                <CardContent className="p-0">
                  <div className="text-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${edu.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <edu.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.field}</p>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="font-semibold">{edu.institution}</p>
                    <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-sm inline-block">
                      {edu.grade}
                    </div>
                    {edu.skills && (
                      <div className="mt-4 space-y-1">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Skills Acquired:</p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {edu.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
