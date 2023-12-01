import Image from 'next/image';

interface Props {
  disabled: boolean;
  onClick: () => void;
  name: string;
  label: string;
}

export const Button = ({disabled, onClick, name, label}): Props => {
console.log(disabled)
   return (
         <button
            className="p-8 cursor-pointer rounded-full border-8 border-gray-500 border-dotted"
            disabled={disabled}
            type="button"
            name={name}
            onClick={onClick}
         >
            <Image src={`/${name}.png`} alt={`Choose your fighter: ${name}.className Icon by Flaticon`} width="100" height="100" />
         </button>
  );
};
