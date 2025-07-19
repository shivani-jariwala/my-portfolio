import SocialLinks from "../components/molecules/SocialLinks";
import data from "../data/data.json";
import { motion } from "framer-motion";
import Head from "next/head";
import { useTheme } from "../context/ThemeContext";

const HomePage = () => {
  const { name, summary, description, profileImage } = data.personalInfo;
  const { isDark } = useTheme();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const waveAnimation = {
    initial: { rotate: 0 },
    animate: { rotate: 20 },
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.6,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <Head>
        <title>{`${name} | Portfolio`}</title>
        <meta name="description" content={description} />
      </Head>
      <section className="h-full flex items-center justify-center text-center p-6 pt-16 font-mono tracking-tight">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-glow border-4 border-accent-400/50 relative">
              <motion.img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-600/20 to-transparent"></div>
            </div>
            <motion.div
              className={`absolute -top-2 -right-2 w-14 h-14 rounded-full flex items-center justify-center shadow-lg border ${
                isDark ? 'bg-dark-100 border-slate-700' : 'bg-slate-100 border-slate-300'
              }`}
              initial={waveAnimation.initial}
              animate={waveAnimation.animate}
              transition={waveAnimation.transition}
            >
              <span className="text-2xl">👋</span>
            </motion.div>

            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-accent-400/20 scale-110 animate-pulse-glow"></div>
          </motion.div>

          <div className="text-center md:text-left max-w-lg">
            <motion.h1
              className={`text-3xl md:text-5xl font-bold leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I&apos;m{" "}
              <motion.span
                className="text-accent-400 inline-block relative"
                animate={{
                  color: [
                    "rgb(167, 139, 250)",
                    "rgb(139, 92, 246)",
                    "rgb(167, 139, 250)",
                  ],
                  textShadow: [
                    "0 0 5px rgba(167, 139, 250, 0.5)",
                    "0 0 20px rgba(139, 92, 246, 0.8)",
                    "0 0 5px rgba(167, 139, 250, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 30px rgba(139, 92, 246, 1)",
                  transition: { duration: 0.3 }
                }}
              >
                {name.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.8 + index * 0.1,
                      ease: "easeOut"
                    }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            <motion.p
              className={`text-lg md:text-xl mt-3 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {summary}
            </motion.p>

            <motion.p
              className={`text-sm md:text-base mt-4 max-w-md ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
