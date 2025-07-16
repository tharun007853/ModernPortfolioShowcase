import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white dark:bg-dark z-50 flex items-center justify-center"
    >
      <div className="flex space-x-2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-4 h-4 bg-primary rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="w-4 h-4 bg-secondary rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
          className="w-4 h-4 bg-accent rounded-full"
        />
      </div>
    </motion.div>
  );
}
