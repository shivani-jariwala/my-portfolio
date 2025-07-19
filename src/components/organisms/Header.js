import { useState, useEffect } from "react";
import NavLink from "../atoms/NavLink";
import { Menu, X, Sun, Moon } from "lucide-react";
import data from "../../data/data.json";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const navLinks = data.navigation;
  const router = useRouter();
  const currentPath = router.pathname;
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to determine if a nav link is active
  const isActiveLink = (path) => {
    if (path === "Home") {
      return currentPath === "/" || currentPath === "";
    }
    return currentPath === `/${path.toLowerCase()}`;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5"
    >
      <motion.div
        className={`flex items-center justify-between max-w-3xl w-full backdrop-blur-md rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled 
            ? isDark ? "bg-dark-200/70 shadow-lg" : "bg-white/70 shadow-lg" 
            : isDark ? "bg-dark-200/40" : "bg-white/40"
        } ${isDark ? 'border-slate-700/30' : 'border-slate-300/30'} border`}
        layoutId="navbarContainer"
        style={{
          boxShadow: scrolled
            ? isDark 
              ? "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
              : "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
            : isDark
              ? "0 8px 20px -8px rgba(0, 0, 0, 0.2)"
              : "0 8px 20px -8px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Logo and Theme Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/" passHref>
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${
                  isDark ? 'text-accent-400' : 'text-slate-800'
                }`}
                whileHover={{
                  rotate: [0, 15, -15, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </motion.svg>
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {data.personalInfo.name}
              </span>
            </motion.div>
          </Link>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-200 border ${
              isDark 
                ? 'bg-dark-100/50 hover:bg-dark-100/80 border-slate-700/30' 
                : 'bg-slate-100/50 hover:bg-slate-200/80 border-slate-300/30'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-slate-600" />
            )}
          </motion.button>
        </div>

        {/* Desktop Nav - Floating Capsule Style */}
        <motion.nav
          className="hidden md:flex items-center relative"
          layoutId="desktopNav"
        >
          <div className="flex relative z-10 px-1">
            {navLinks.map((link, index) => {
              const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
              const active = isActiveLink(link);
              const isHovered = hoveredLink === link;

              return (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                  }}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(link)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {active && (
                    <motion.div
                      className="absolute inset-0 bg-accent-400/20 rounded-full shadow-glow"
                      layoutId="activeBackground"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {!active && isHovered && (
                    <motion.div
                      className={`absolute inset-0 rounded-full ${
                        isDark ? 'bg-dark-100/60' : 'bg-slate-200/60'
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  <Link href={path} passHref>
                    <NavLink
                      isActive={active}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link}
                    </NavLink>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full border transition-colors duration-200 ${
              isDark 
                ? 'text-white bg-dark-100/60 border-slate-700/30' 
                : 'text-slate-800 bg-slate-100/60 border-slate-300/30'
            }`}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              backgroundColor: isDark ? "rgba(167, 139, 250, 0.2)" : "rgba(167, 139, 250, 0.1)",
              transition: { duration: 0.2 },
            }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu - Floating Style */}
      {isMenuOpen && (
        <motion.div
          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[90%] max-w-xs md:hidden backdrop-blur-md rounded-2xl border overflow-hidden shadow-lg ${
            isDark 
              ? 'bg-dark-200/80 border-slate-700/30' 
              : 'bg-white/80 border-slate-300/30'
          }`}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            boxShadow: isDark 
              ? "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
              : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <nav className="flex flex-col items-center gap-2 py-3">
            {navLinks.map((link, index) => {
              const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
              const active = isActiveLink(link);

              return (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="w-4/5 text-center relative"
                >
                  {active && (
                    <motion.div
                      className="absolute inset-0 bg-accent-400/20 rounded-full"
                      layoutId="activeMobileBackground"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <Link href={path} passHref>
                    <NavLink
                      isActive={active}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link}
                    </NavLink>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
