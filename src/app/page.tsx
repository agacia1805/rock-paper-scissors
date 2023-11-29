import Image from 'next/image'
import {Game} from './components/game';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <Game />
    </main>
  )
}
