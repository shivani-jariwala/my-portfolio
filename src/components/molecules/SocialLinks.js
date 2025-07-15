import Icon from "../atoms/Icon";
import { Github, Linkedin, Mail } from "lucide-react";
import data from "../../data/data.json";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const { github, linkedin, email } = data.personalInfo.socialLinks;

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
        <Icon className="bg-dark-100 text-white hover:bg-accent-500 shadow-lg">
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
        <Icon className="bg-dark-100 text-white hover:bg-accent-500 shadow-lg">
          <Linkedin size={20} />
        </Icon>
      </motion.a>
      <motion.a
        href={`mailto:${email}`}
        variants={item}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className="bg-dark-100 text-white hover:bg-accent-500 shadow-lg">
          <Mail size={20} />
        </Icon>
      </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
