import Image from 'next/image'
import { Inter } from 'next/font/google'
import { RxHamburgerMenu } from 'react-icons/rx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <header className="px-4 h-16">
        <nav className="flex justify-between py-2">
          <img src="img/logo.png" alt="Brand Logo" className="logo-image" />
          <div className="flex items-center">
            <img src="img/button.svg" alt="Navigation Bar" className="mobile-burger" />
          </div>
        </nav>
      </header>
      <img src="/img/87ecf7e9db6ac60e074a70c57e7cc509.jpg" alt="statue" className="flex-0 order-0 flex-grow-0 z-0 object-cover w-full h-full absolute statue-image">
      </img>
      <div className="h-[648px] isolate pt-8 px-4">
        <h1 className="font-extrabold text-28px leading-42px flex grow-0 items-start order-1 text-white">Get legal immigration to the United States today</h1>

      </div>
    </main >

  )
}
