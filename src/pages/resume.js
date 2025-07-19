import data from "../data/data.json";
import Head from "next/head";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ResumePage = () => {
  const { name, title, socialLinks } = data.personalInfo;
  const { downloadUrl, description } = data.resume;
  const { isDark } = useTheme();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>{`Resume | ${name}`}</title>
        <meta
          name="description"
          content={`Download ${name}'s resume - ${title}`}
        />
      </Head>
      <section className="h-full py-10 px-6 overflow-auto bg-dark-100/20 backdrop-blur-sm font-mono tracking-tight">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              My <span className="text-accent-400">Resume</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {description}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
                      {/* Resume Download Section */}
          <motion.div
            className={`bg-gradient-to-br backdrop-blur-sm rounded-3xl p-6 border shadow-glow mb-8 ${
              isDark 
                ? 'from-dark-100/80 to-dark-200/60 border-slate-700/30' 
                : 'from-slate-100/80 to-slate-200/60 border-slate-300/30'
            }`}
            variants={itemVariants}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                    isDark 
                      ? 'bg-dark-100' 
                      : 'bg-slate-100'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FileText size={24} className={`${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`} />
                </motion.div>
                <div>
                  <h3 className={`text-lg font-semibold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Download Resume
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Get my detailed resume in PDF format
                  </p>
                </div>
              </div>
              <motion.a
                href={downloadUrl}
                download
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-glow hover:scale-105 ${
                  isDark 
                    ? 'bg-dark-100 text-white hover:bg-accent-500 hover:text-white' 
                    : 'bg-slate-100 text-slate-800 hover:bg-accent-500 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                <span className="font-semibold">Download</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Resume Preview Section */}
          <motion.div
            className={`backdrop-blur-sm rounded-2xl p-8 border shadow-glow mb-8 ${
              isDark 
                ? 'bg-dark-100/50 border-slate-700/50' 
                : 'bg-slate-100/50 border-slate-300/50'
            }`}
            variants={itemVariants}
          >
            {/* PDF Viewer */}
            <div className={`relative w-full h-[800px] rounded-lg overflow-hidden border ${
              isDark ? 'border-slate-600/50' : 'border-slate-400/50'
            }`}>
              <iframe
                src={`${downloadUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full bg-white"
                title="Resume Preview"
                loading="lazy"
              />
            </div>
          </motion.div>



          </motion.div>

          {/* Additional Information */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className={`text-sm ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Looking forward to connecting with you! Feel free to reach out for any questions or opportunities.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ResumePage; 