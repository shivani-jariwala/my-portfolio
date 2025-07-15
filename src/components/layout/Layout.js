import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <div className="min-h-screen h-screen font-sans flex flex-col relative overflow-hidden">
    {/* Background elements */}
    <div className="fixed inset-0 bg-dark-200 bg-mesh-pattern z-0"></div>

    {/* Animated gradient orbs */}
    <div
      className="fixed top-20 right-[10%] w-72 h-72 rounded-full bg-accent-500/20 blur-[120px] animate-floating z-0"
      style={{ animationDelay: "0s" }}
    ></div>
    <div
      className="fixed top-[60%] left-[5%] w-64 h-64 rounded-full bg-primary-600/20 blur-[100px] animate-floating z-0"
      style={{ animationDelay: "1s" }}
    ></div>
    <div
      className="fixed bottom-[10%] right-[20%] w-56 h-56 rounded-full bg-purple-600/20 blur-[80px] animate-floating z-0"
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

export default Layout;
