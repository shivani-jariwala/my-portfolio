import { motion } from "framer-motion";

const Icon = ({ children, className = "" }) => (
  <motion.div
    className={`p-2 rounded-full transition-all duration-300 ${className}`}
    whileHover={{
      rotate: 10,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    }}
  >
    {children}
  </motion.div>
);

export default Icon;
