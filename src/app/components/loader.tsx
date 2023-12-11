import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <motion.div
      className='h-32 w-32 rounded-full border-8 border-dotted border-pink-200 md:h-40 md:w-40'
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
    ></motion.div>
  );
};
