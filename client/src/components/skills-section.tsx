import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Globe, Settings, Flag, Languages, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  const programmingSkills = [
    { name: "Java", level: 90, color: "from-primary to-blue-600" },
    { name: "Python", level: 85, color: "from-secondary to-purple-600" },
    { name: "C", level: 80, color: "from-accent to-cyan-600" },
  ];

  const webSkills = [
    { name: "HTML/CSS", level: 85, color: "from-orange-500 to-red-500" },
  ];

  const toolsSkills = [
    { name: "Embedded Systems", level: 80, color: "from-indigo-500 to-blue-500" },
    { name: "Microsoft Power BI", level: 65, color: "from-yellow-500 to-amber-500" },
    { name: "MY SQL", level: 50, color: "from-yellow-500 to-amber-500" },
    { name: "OOP Concepts", level: 85, color: "from-purple-500 to-violet-500" },
  ];

  const languages = [
    { name: "English", level: "Professional Working Proficiency", icon: Flag },
    { name: "German", level: "Elementary Proficiency", icon: Languages },
    { name: "Tamil", level: "Native Proficiency", icon: Home },
  ];

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedSkills(prev => [...prev, ...programmingSkills.map(s => s.name)]);
      }, 300);
      
      const timer2 = setTimeout(() => {
        setAnimatedSkills(prev => [...prev, ...webSkills.map(s => s.name)]);
      }, 600);
      
      const timer3 = setTimeout(() => {
        setAnimatedSkills(prev => [...prev, ...toolsSkills.map(s => s.name)]);
      }, 900);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isInView]);

  const SkillCard = ({ title, skills, icon: Icon, delay = 0 }: {
    title: string;
    skills: Array<{ name: string; level: number; color: string }>;
    icon: any;
    delay?: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="p-6 shadow-lg hover-lift glow-on-hover h-full">
        <CardContent className="p-0">
          <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
            <Icon className="mr-3 h-5 w-5" />
            {title}
          </h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <Progress
                  value={animatedSkills.includes(skill.name) ? skill.level : 0}
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-light-bg dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard
            title="Programming Languages"
            skills={programmingSkills}
            icon={Code}
            delay={0.2}
          />
          <SkillCard
            title="Web Technologies"
            skills={webSkills}
            icon={Globe}
            delay={0.4}
          />
          <SkillCard
            title="Tools & Technologies"
            skills={toolsSkills}
            icon={Settings}
            delay={0.6}
          />
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Languages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <Card key={lang.name} className="text-center p-6 shadow-lg hover-lift">
                <CardContent className="p-0">
                  <lang.icon className="h-8 w-8 text-primary mb-4 mx-auto" />
                  <h4 className="text-lg font-semibold">{lang.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{lang.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
