import Image from 'next/image';

interface Props {
  disabled?: boolean;
  onClick?: () => void;
  name: string;
  className?: string;
}

export const PlayOption = ({ disabled, onClick, name, className }: Props) => {
  return (
    <button
      className={`relative cursor-pointer rounded-full border-8 border-dotted border-pink-200 p-8 hover:scale-110 ${
        className || ''
      }`}
      disabled={disabled}
      type='button'
      name={name}
      onClick={onClick}
    >
      <Image
        src={`/${name}.svg`}
        alt={`Choose your fighter: ${name}`}
        width='80'
        height='80'
        className='h-12 w-12 md:h-20 md:w-20'
        priority={true}
      />
    </button>
  );
};
