import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import data from "../../data/data.json";
import Link from "next/link";

const Footer = () => {
  const { github, linkedin, email } = data.personalInfo.socialLinks;

  return (
    <footer className="bg-dark-100/30 py-4 border-t border-slate-800/50 backdrop-blur-sm relative z-10 shrink-0">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <motion.p
          className="text-slate-400 text-center md:text-left text-xs md:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} {data.personalInfo.name}. All Rights
          Reserved.
        </motion.p>

        <motion.div
          className="mt-3 md:mt-0 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <motion.div
              className="text-slate-400 hover:text-accent-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </motion.div>
          </Link>

          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <motion.div
              className="text-slate-400 hover:text-accent-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
            </motion.div>
          </Link>

          <Link href={`mailto:${email}`} aria-label="Email">
            <motion.div
              className="text-slate-400 hover:text-accent-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
