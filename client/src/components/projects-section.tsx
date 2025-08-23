import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Bus, Flower, Star, CheckCircle, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Bus Booking System",
      description: "A comprehensive bus booking system built with Java. Features include seat selection, booking management, and database integration for storing reservation data.",
      icon: Bus,
      gradient: "from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30",
      iconColor: "text-primary",
      technologies: ["Java", "Database", "OOP"],
      status: "In Development",
      statusIcon: Star,
      statusColor: "text-yellow-500",
      githubUrl: "https://github.com/Tharunteen/BusBooking",
    },
    {
      title: "Flower Type Prediction",
      description: "Machine learning model that predicts flower types (Setosa, Versicolor, Virginica) based on sepal and petal measurements. Built with Python and deployed using Streamlit framework.",
      icon: Flower,
      gradient: "from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30",
      iconColor: "text-green-600",
      technologies: ["Python", "Machine Learning", "Streamlit"],
      status: "Deployed",
      statusIcon: CheckCircle,
      statusColor: "text-green-500",
      githubUrl: "https://github.com/Tharunteen/Predict-the-type-of-flower",
    },
    {
      title: "Food Ordering App",
      description: "A mobile application for food ordering built with Java in Android Studio. Features include user authentication, menu browsing, cart management, and order tracking functionality.",
      icon: Utensils,
      gradient: "from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30",
      iconColor: "text-orange-600",
      technologies: ["Java", "Android Studio", "Mobile Development"],
      status: "Completed",
      statusIcon: CheckCircle,
      statusColor: "text-green-500",
      githubUrl: "https://github.com/Tharunteen/food-ordering-app",
    },
  ];

  const stats = [
    { label: "Public Repositories", value: "3+", color: "text-primary" },
    { label: "Programming Languages", value: "5+", color: "text-secondary" },
    { label: "Development Status", value: "Active", color: "text-accent" },
  ];

  return (
    <section id="projects" className="py-20 bg-light-bg dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="rounded-lg overflow-hidden shadow-lg hover-lift glow-on-hover h-full">
                {/* Project Visual */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-center">
                    <project.icon className={`h-12 w-12 ${project.iconColor} mb-4 mx-auto`} />
                    <div className="bg-white dark:bg-dark rounded p-2 shadow-lg max-w-fit mx-auto">
                      <code className="text-sm text-gray-700 dark:text-gray-300">
                        {project.title === "Bus Booking System" ? "class BusBooking { }" : 
                         project.title === "Food Ordering App" ? "class FoodOrderActivity { }" : 
                         "predict_flower(sepal, petal)"}
                      </code>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                    <a
                      href={project.githubUrl}
                      className="text-gray-500 hover:text-primary transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <project.statusIcon className={`h-4 w-4 ${project.statusColor} mr-1`} />
                      {project.status}
                    </div>
                    {/* Real clickable link styled as button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 transition"
                    >
                      View Code <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">GitHub Activity</h3>
          <Card className="p-6 shadow-lg hover-lift">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/Tharunteen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-md font-medium bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
