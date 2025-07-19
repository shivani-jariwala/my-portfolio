import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const NavLink = ({ children, isActive, onClick }) => {
  const { isDark } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className={`relative text-base font-medium transition-colors duration-300 px-4 py-2 ${
        isActive 
          ? isDark ? "text-white" : "text-slate-900" 
          : isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
      }`}
    >
    <span className="relative z-10">{children}</span>

    {!isActive && (
      <motion.span
        className="absolute inset-0 rounded-full opacity-0"
        whileHover={{
          opacity: 1,
          transition: { duration: 0.2 },
        }}
      />
    )}
  </button>
  );
};

export default NavLink;
