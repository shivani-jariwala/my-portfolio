import { motion } from "framer-motion";

const NavLink = ({ children, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative text-base font-medium transition-colors duration-300 px-4 py-2 ${
      isActive ? "text-white" : "text-slate-300 hover:text-white"
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

export default NavLink;
