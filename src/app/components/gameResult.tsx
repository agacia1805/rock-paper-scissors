import { motion } from 'framer-motion';

interface Props {
  gameResult: string;
  onClick: () => void;
}

export const GameResult = ({gameResult, onClick}: Props) => {
   return (
       <div className="flex flex-col gap-8 items-center justify-center">
            <div className="flex justify-center w-full h-full align-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-extrabold text-5xl md:text-7xl text-center rounded-lg shadow-lg z-50 gradient-text"
                  >
                      {gameResult.toUpperCase()}
                  </motion.div>
            </div>
            <button onClick={onClick} className="font-semibold text-lg md:text-xl text-center px-4 py-2 md:p-4 rounded-lg shadow-lg border bg-white text-gray-800">
                Play again
            </button>
       </div>
  );
};
