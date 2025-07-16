import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Laptop, Factory } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Internship Trainee",
      company: "HCLTech",
      period: "Mar 2025 - Present • 5 months",
      location: "Chennai, Tamil Nadu, India • On-site",
      icon: Laptop,
      gradient: "from-blue-500 to-purple-600",
      tags: ["Embedded Testing", "Bug Report","Test Automation","Debugging"],
      description: "Work in the Embedded and Device Testing domain, validating functionality of hardware systems.",
    },
    {
      title: "Implant Trainee",
      company: "Steel Authority of India Limited",
      period: "Jan 2023 • 1 month",
      location: "Salem, Tamil Nadu, India • On-site",
      icon: Factory,
      gradient: "from-yellow-500 to-orange-600",
      tags: ["Industrial Systems", "PLC Systems"],
      description: "Gained hands-on experience with power distribution, transformer operation, and plant-level automation systems.",
      points: [
        "Observed and learned about power distribution, transformer operation, and plant-level automation",
        "Gained insights into control systems used in steel manufacturing",
        "Exposure to real-time maintenance procedures, safety standards, and PLC-based systems"
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-light-bg dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-secondary" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-center md:justify-center"
              >
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-dark" />

                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8 md:text-right' : 'md:w-1/2 md:pl-8'}`}>
                  <Card className="p-6 shadow-lg hover-lift glow-on-hover">
                    <CardContent className="p-0">
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className={`w-12 h-12 bg-gradient-to-r ${exp.gradient} rounded-lg flex items-center justify-center ${index % 2 === 0 ? 'mr-4 md:mr-0 md:ml-4 md:order-2' : 'mr-4'}`}>
                          <exp.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className={index % 2 === 0 ? "md:order-1" : ""}>
                          <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.location}</p>
                      
                      {exp.description && (
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                      )}
                      
                      {exp.points && (
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                          {exp.points.map((point, pointIndex) => (
                            <p key={pointIndex}>• {point}</p>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
