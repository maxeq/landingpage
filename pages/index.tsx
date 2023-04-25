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
      <div>
        <img src="/img/87ecf7e9db6ac60e074a70c57e7cc509.jpg" alt="statue" className="flex-0 order-0 flex-grow-0 z-0 object-cover w-full h-full absolute statue-image">
        </img>
        <div className="h-[648px] isolate py-8 px-4">
          <h1 className="font-extrabold mb-1 text-28px leading-42px items-start order-1 text-white">Get legal immigration to the <span className="text-united">United</span> <span className="text-states">States</span> today</h1>
          <p className="text-white leading-[26px]">We are helping thousands of people annually with obtaining their visas and Green Cards to the United States legally.</p>
          <div className="h-[364px] mt-8 border order-2 bg-white z-2 flex flex-grow-0 flex-col rounded-lg p-4">
            <h2 className="font-extrabold font-[#333333] order-1 flex-grow-0 leading-[26px] text-[16px]">The cheapest immigration Solution</h2>

            <div className="bg-[#00B894] text-white border rounded-sm px-6 py-2 mr-4">
              $9.99
            </div>


            <div className='order-2 flex-grow-0 flex font-bold leading-[26px]'>
              <button className="bg-[#00B894] text-white border rounded-sm px-6 py-2 mr-4">
                Apply Now
              </button>
              <button className=" border border-[#00B894] rounded-sm px-6 py-2">
                More options
              </button>
            </div>
          </div>
        </div>

      </div>
    </main >

  )
}
