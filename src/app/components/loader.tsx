import { motion } from 'framer-motion';

export const Loader = () => {
   return (
         <motion.div
             className="w-32 h-32 md:w-40 md:h-40 border-8 border-dotted rounded-full border-pink-200"
             animate={{ rotate: 360 }}
             transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
         >
         </motion.div>
  );
};
