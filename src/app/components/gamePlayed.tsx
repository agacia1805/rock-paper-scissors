import { motion } from 'framer-motion';
import {PlayOption} from './playOption';
import {Loader} from './loader';
import {GameResult} from './gameResult';

interface Props {
  userChoice: string;
  computerChoice: string | null;
  gameResult: string | null;
  onClick: () => void;
}

export const GamePlayed = ({userChoice, computerChoice, gameResult, onClick}: Props) => {

    const variants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
      };

   return (
       <div className="flex flex-col gap-24">
          <motion.div
             initial={{ opacity: 0 }}
             animate={userChoice ? { opacity: 1 } : { opacity: 0 }}
             transition={{ duration: 0.85 }}
             className="flex gap-6 md:gap-52 items-start"
          >
            <div className="flex flex-col gap-8 align-center justify-center">
                <p className="font-bold text-xl md:text-3xl text-center">YOU</p>
                <div className="flex align-center justify-center">
                    <PlayOption disabled={true} name={userChoice} className="disabled:scale-100 disabled:cursor-default flex-shrink-0 flex-grow-0">{userChoice}</PlayOption>
                </div>
            </div>
            <div className="flex flex-col gap-8 align-center justify-center">
                 <p className="font-bold text-xl md:text-3xl text-center">HOUSE</p>
                 <div className="flex align-center justify-center">
                 {computerChoice ?
                      <PlayOption disabled={true} name={computerChoice} className="disabled:scale-100 disabled:cursor-default flex-shrink-0 flex-grow-0">{computerChoice}</PlayOption>
                 :
                      <Loader />
                 }
                 </div>
             </div>
          </motion.div>
          {gameResult && <GameResult onClick={onClick} gameResult={gameResult}/>}
       </div>
  );
};
