import Image from 'next/image';

interface Props {
  disabled?: boolean;
  onClick?: () => void;
  name: string;
  className?: string;
}

export const PlayOption = ({disabled, onClick, name, className}: Props) => {
   return (
         <button
            className={`p-8 cursor-pointer rounded-full border-8 relative border-dotted hover:scale-110 border-pink-200 ${className || ""}`}
            disabled={disabled}
            type="button"
            name={name}
            onClick={onClick}
         >
            <Image src={`/${name}.svg`} alt={`Choose your fighter: ${name}`} width="80" height="80" className="w-12 h-12 md:w-20 md:h-20"/>
         </button>
  );
};
