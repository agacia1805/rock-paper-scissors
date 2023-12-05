import { motion } from 'framer-motion';

export const Loader = () => {
   return (
         <motion.div
             className="w-40 h-40 border-8 border-dotted rounded-full border-pink-200"
             animate={{ rotate: 360 }}
             transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
         >
         </motion.div>
  );
};
