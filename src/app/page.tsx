import { Game } from './components/game';
import {Footer} from './components/footer';
import { Header } from './components/header';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-32 bg-blue-600 bg-opacity-10 bg-clip-padding px-4 pb-4 pt-12 backdrop-blur-md backdrop-filter'>
      <Header />
      <div className="flex-grow">
        <Game />
      </div>
      <Footer />
    </main>
  );
}
