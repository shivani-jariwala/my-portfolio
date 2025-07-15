import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const TimelineItem = ({ date, title, subtitle, children, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set hasAnimated to true after a short delay on initial render
    // This ensures content is visible even if InView detection fails
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const shouldShow = isInView || hasAnimated;

  return (
    <motion.div
      ref={ref}
      className="relative pl-8"
      initial={{ opacity: 0, x: -20 }}
      animate={shouldShow ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute left-0 top-1 w-4 h-4 bg-accent-400 rounded-full border-3 border-dark-100 z-10"
        initial={{ scale: 0 }}
        animate={shouldShow ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
        whileHover={{ scale: 1.2 }}
      />

      {!isLast && (
        <motion.div
          className="absolute left-[7px] top-5 w-0.5 h-[calc(100%+1rem)] bg-slate-600 z-0"
          initial={{ height: 0 }}
          animate={shouldShow ? { height: "calc(100% + 1rem)" } : { height: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      )}

      <motion.p
        className="text-xs font-medium text-accent-400/80 mb-1 tracking-wider"
        initial={{ opacity: 0 }}
        animate={shouldShow ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.1 }}
      >
        {date}
      </motion.p>

      <motion.h3
        className="text-base font-bold text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-sm text-accent-400 mb-2"
        initial={{ opacity: 0 }}
        animate={shouldShow ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        {subtitle}
      </motion.p>

      <motion.div
        className="text-slate-300 text-xs leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.4 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;
