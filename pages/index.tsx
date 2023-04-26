import Image from 'next/image'
import { Inter } from 'next/font/google'

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
      {/* // 1st block*/}
      <div className="statue-image">
        {/* background */}

        {/* background
        {/* solutions */}
        <div className="h-[648px] isolate py-8 px-4">
          {/* h1 with desc */}
          <div className="gap-1">
            <h1 className="font-extrabold text-28px leading-42px items-start order-1 text-white">Get legal immigration to the <span className="text-united">United</span> <span className="text-states">States</span> today</h1>
            <p className="text-[#FFFFFF] leading-[26px] font-extralight">We are helping thousands of people annually with obtaining their visas and Green Cards to the United States legally.</p>
          </div>
          {/* h1 with desc */}
          <div className="cheapest-solutions mt-9 border order-2 bg-white z-2 flex flex-grow-0 flex-col rounded-lg p-4">
            <h2 className="font-extrabold font-[#333333] order-1 flex-grow-0 leading-[26px] text-[18px]">The cheapest immigration Solution</h2>
            <div className="flex font-extrabold items-center justify-start order-2 my-2">
              <div className="gap-4 flex items-center mb-1">
                <div className="border-2 border-[#00B894] rounded-[4px] text-[#00B894] px-4 py-1 text-lg order-2">
                  $9.99
                </div>
                <div className="text-[#909090] leading-[26px] py-2 mr-4 text-lg order-2 line-through">
                  $19.99
                </div>
              </div>
            </div>

            {/* solutions */}
            {/* apply now */}
            <div className='order-2 gap-4 item-start flex flex-col'>
              <h3 className="font-medium text-[14px] text-[#333333]">Check your eligibility to live, work and study in the <span className="text-united font-extrabold">United</span> <span className="text-states font-extrabold">States</span> today!</h3>
              <div className="flex-grow-0 flex font-bold leading-[26px]">
                <button className="bg-[#00B894] text-white border rounded-[6px] px-6 py-2 mr-4">
                  Apply Now
                </button>
                <button className="border border-[#00B894] rounded-[6px] px-6 py-2">
                  More options
                </button>
              </div>
              <p className="text-[12px] ">More than 25 combine years of experience.</p>
              <hr className="border-1 order-2 flex-grow-0 border-[#F3F3F3] my-0"></hr>
              <div className="order-3 font-bold">
                <h4>Suitable for:</h4>
                <ul className="list-none font-normal list-inside flex p-0 flex-row align-start gap-1 flex-grow-0 flex-none">
                  <ul>
                    <li className="flex gap-2">
                      <img src="img/dot.svg" alt="bullet" />
                      Live
                    </li>
                    <li className="flex gap-2">
                      <img src="img/dot.svg" alt="bullet" />
                      Study
                    </li>
                  </ul>
                  <ul>
                    <li className="flex gap-2">
                      <img src="img/dot.svg" alt="bullet" />
                      Work
                    </li>
                    <li className="flex gap-2">
                      <img src="img/dot.svg" alt="bullet" />
                      Travel
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            {/* apply now */}
          </div>
          {/* // 1st block */}
          {/* Compare table */}
          <div className="compare-table">

          </div>

        </div>

      </div>
    </main >

  )
}
