import { motion } from 'framer-motion';

const variants = {
  initial: { 
    opacity: 0,
    y: 8
  },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.35, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
  exit: { 
    opacity: 0, 
    y: -6,
    transition: { 
      duration: 0.25, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}
