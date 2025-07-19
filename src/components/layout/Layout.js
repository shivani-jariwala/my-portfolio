import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Layout = ({ children }) => {
  const { isDark } = useTheme();
  
  return (
    <div className="min-h-screen h-screen font-sans flex flex-col relative overflow-hidden">
      {/* Background elements */}
      <div className={`fixed inset-0 ${isDark ? 'bg-dark-200 bg-mesh-pattern' : 'bg-slate-50'} z-0 transition-colors duration-300`}></div>

      {/* Animated gradient orbs */}
      <div
        className={`fixed top-20 right-[10%] w-72 h-72 rounded-full ${isDark ? 'bg-accent-500/20' : 'bg-accent-500/10'} blur-[120px] animate-floating z-0 transition-colors duration-300`}
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className={`fixed top-[60%] left-[5%] w-64 h-64 rounded-full ${isDark ? 'bg-primary-600/20' : 'bg-primary-600/10'} blur-[100px] animate-floating z-0 transition-colors duration-300`}
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className={`fixed bottom-[10%] right-[20%] w-56 h-56 rounded-full ${isDark ? 'bg-purple-600/20' : 'bg-purple-600/10'} blur-[80px] animate-floating z-0 transition-colors duration-300`}
        style={{ animationDelay: "2s" }}
      ></div>

    <Header />
    <motion.main
      className="flex-grow overflow-auto relative z-10 pt-24" /* Increased padding for floating navbar */
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.main>
    <Footer />
  </div>
  );
};

export default Layout;
