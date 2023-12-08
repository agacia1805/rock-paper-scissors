import Image from 'next/image'
import {Game} from './components/game';
// import {Footer} from './components/footer';
import {Header} from './components/header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-12 pb-4 bg-blue-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 gap-32">
        <Header/>
        <Game />
    </main>
  )
}
