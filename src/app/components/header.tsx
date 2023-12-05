export const Header = () => {
   return (
         <header className="flex p-6 max-w-2xl w-full rounded-lg border glitter-border relative justify-between">
            <h1 className="flex flex-col leading-tight font-extrabold text-2xl">
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </h1>
            <div className="border glitter-border rounded-lg px-4 py-2 flex flex-col justify-center items-center bg-pink-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
                <p className="font-semibold text-xl">Score</p>
                <p className="font-extrabold text-2xl">1</p>
            </div>
         </header>
  );
};
