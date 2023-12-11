import { motion } from 'framer-motion';
import { PlayOption } from './playOption';
import { Loader } from './loader';
import { GameResult } from './gameResult';

interface Props {
  userChoice: string;
  computerChoice: string | null;
  gameResult: string | null;
  onClick: () => void;
}

export const GamePlayed = ({
  userChoice,
  computerChoice,
  gameResult,
  onClick,
}: Props) => {
  const variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div className='flex flex-col gap-24'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={userChoice ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.85 }}
        className='flex items-start gap-6 md:gap-52'
      >
        <div className='align-center flex flex-col justify-center gap-8'>
          <p className='text-center text-xl font-bold md:text-3xl'>YOU</p>
          <div className='align-center flex justify-center'>
            <PlayOption
              disabled={true}
              name={userChoice}
              className='flex-shrink-0 flex-grow-0 disabled:scale-100 disabled:cursor-default'
            />
          </div>
        </div>
        <div className='align-center flex flex-col justify-center gap-8'>
          <p className='text-center text-xl font-bold md:text-3xl'>HOUSE</p>
          <div className='align-center flex justify-center'>
            {computerChoice ? (
              <PlayOption
                disabled={true}
                name={computerChoice}
                className='flex-shrink-0 flex-grow-0 disabled:scale-100 disabled:cursor-default'
              />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </motion.div>
      {gameResult && <GameResult onClick={onClick} gameResult={gameResult} />}
    </div>
  );
};
