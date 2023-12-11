import { motion } from 'framer-motion';

interface Props {
  gameResult: string;
  onClick: () => void;
}

export const GameResult = ({ gameResult, onClick }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <div className='align-center flex h-full w-full justify-center'>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='gradient-text z-50 rounded-lg text-center text-5xl font-extrabold shadow-lg md:text-7xl'
        >
          {gameResult.toUpperCase()}
        </motion.div>
      </div>
      <button
        onClick={onClick}
        className='rounded-lg border bg-white px-4 py-2 text-center text-lg font-semibold text-gray-800 shadow-lg md:p-4 md:text-xl'
      >
        Play again
      </button>
    </div>
  );
};
