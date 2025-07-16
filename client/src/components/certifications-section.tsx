import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Car, Factory, Languages, Code, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Java Full Stack",
      issuer: "Wipro",
      issued: "Oct 2024",
      icon: Code,
      gradient: "from-red-500 to-orange-500",
      tag: "Full Stack Development",
      tagColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
    },
    {
      title: "Python Essential Training",
      issuer: "LinkedIn",
      issued: "Jul 2024",
      icon: Code,
      gradient: "from-blue-500 to-blue-600",
      tag: "Python Programming",
      tagColor: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
    },
    {
      title: "Blockchain and its Applications",
      issuer: "NPTEL",
      issued: "May 2024",
      icon: Award,
      gradient: "from-purple-500 to-indigo-500",
      tag: "Blockchain Technology",
      tagColor: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400",
    },
    {
      title: "German-1",
      issuer: "NPTEL",
      issued: "May 2024",
      icon: Languages,
      gradient: "from-red-600 to-yellow-500",
      tag: "Language Skills",
      tagColor: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400",
    },
    {
      title: "Bosch Vehicle Diagnostics",
      issuer: "Bosch",
      issued: "Aug 2023",
      icon: Car,
      gradient: "from-green-500 to-teal-500",
      tag: "Automotive Systems",
      tagColor: "bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-400",
    },
    {
      title: "Certificate of Merit",
      issuer: "Rajalakshmi Engineering College",
      issued: "Apr 2025",
      icon: Trophy,
      gradient: "from-amber-500 to-orange-500",
      tag: "3rd Rank - 6th Semester",
      tagColor: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400",
    },
    {
      title: "SAIL Implant",
      issuer: "SAIL-Steel Authority of India Limited",
      issued: "Jan 2023",
      icon: Factory,
      gradient: "from-sky-700 to-slate-500",
      tag: "Industrial Training",
      tagColor: "bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-400",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 shadow-lg hover-lift glow-on-hover h-full">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${cert.gradient} rounded-lg flex items-center justify-center mr-4`}>
                      <cert.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{cert.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Issued {cert.issued}</p>
                  <Badge className={cert.tagColor}>
                    {cert.tag}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
