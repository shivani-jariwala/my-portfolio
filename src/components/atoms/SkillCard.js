import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const SkillCard = ({ title, skills }) => {
  const { isDark } = useTheme();
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.div
      className={`p-4 rounded-lg shadow-md border hover:border-accent-400 transition-all duration-300 hover:shadow-glow backdrop-blur-sm h-fit ${
        isDark 
          ? 'bg-dark-100/50 border-slate-700' 
          : 'bg-slate-100/50 border-slate-300'
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3 }}
    >
      <h3 className={`text-lg font-bold mb-3 flex items-center ${
        isDark ? 'text-accent-400' : 'text-slate-800'
      }`}>
        {title}
        <motion.span
          className="inline-block ml-2 text-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          ✨
        </motion.span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className={`text-xs font-medium px-2 py-1 rounded-full border hover:border-accent-400/50 cursor-default transition-colors ${
              isDark 
                ? 'bg-dark-200 text-slate-300 hover:text-white border-slate-700/50' 
                : 'bg-slate-200 text-slate-700 hover:text-slate-900 border-slate-400/50'
            }`}
            variants={skillVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
