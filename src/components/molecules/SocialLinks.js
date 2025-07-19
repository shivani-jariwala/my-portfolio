import Icon from "../atoms/Icon";
import { Github, Linkedin, Mail } from "lucide-react";
import data from "../../data/data.json";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const SocialLinks = () => {
  const { github, linkedin, email } = data.personalInfo.socialLinks;
  const { isDark } = useTheme();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex items-center justify-center md:justify-start gap-4 mt-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        variants={item}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className={`${isDark ? 'bg-dark-100 text-white' : 'bg-slate-100 text-slate-800'} hover:bg-accent-500 hover:text-white shadow-lg`}>
          <Github size={20} />
        </Icon>
      </motion.a>
      <motion.a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        variants={item}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className={`${isDark ? 'bg-dark-100 text-white' : 'bg-slate-100 text-slate-800'} hover:bg-accent-500 hover:text-white shadow-lg`}>
          <Linkedin size={20} />
        </Icon>
      </motion.a>
      <motion.a
        href={`mailto:${email}`}
        variants={item}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className={`${isDark ? 'bg-dark-100 text-white' : 'bg-slate-100 text-slate-800'} hover:bg-accent-500 hover:text-white shadow-lg`}>
          <Mail size={20} />
        </Icon>
      </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
