import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  out: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      className="flex bg-white text-slate-900  dark:bg-slate-800 dark:text-white  flex-col"
    >
      {children}
    </motion.section>
  );
};

export default PageContainer;
