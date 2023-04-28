import Image from 'next/image'
import { Inter } from 'next/font/google'
import react from 'react'
import SliderTemp from './components/sliders/sliderTemp'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <header className="relative md:h-[1440px]">
        <nav className="mobile-nav flex justify-between py-2 md:hidden px-4 h-16">
          <img src="img/logo.png" alt="Brand Logo" className="logo-image" />
          <div className="flex items-center">
            <img src="img/button.svg" alt="Navigation Bar" className="mobile-burger" />
          </div>
        </nav>
        <nav className="desktop-nav md:h-[112px] hidden md:flex justify-between items-center py-4 px-20 absolute bg-white left-0 right-0">
          <div className="flex items-center flex-shrink-0">
            <img src="img/logo.png" alt="Brand Logo" className="logo-image min-w-max " />
          </div>
          <div className="flex items-center gap-8 whitespace-nowrap">
            <div className="flex items-center gap-8 text-[16px] font-bold">
              <p className=""><span className="text-[#0A3161]">U</span><span className="text-[#B31942]">S</span> Visa vs. <span className="text-[#00B894]">Green</span> Card</p>
              <p>About <span className="text-[#00B894]">Green</span> Card</p>
              <p>About DV Immigration</p>
              <p>FAQ</p>
              <p>Contacts</p>
            </div>
            <button className="bg-[#00B894] rounded-[4px] py-2 px-[24px] text-white border items-center font-bold">
              Contact us
            </button>
          </div>
        </nav>
      </header>
      <div className="container flex flex-col">
        {/* // 1st block*/}
        {/* background */}
        {/* background
        {/* solutions */}
        <div className="statue-image py-8 px-4  bg-cover bg-center">
          {/* h1 with desc */}
          <div className="gap-1">
            <h1 className="md:text-[40px] font-extrabold text-28px leading-42px items-start text-white">Get legal immigration to the <span className="text-united">United</span> <span className="text-states">States</span> today</h1>
            <p className="text-[#FFFFFF] leading-[26px] font-extralight">We are helping thousands of people annually with obtaining their visas and Green Cards to the United States legally.</p>
          </div>
          {/* h1 with desc */}
          <div className="cheapest-solutions mt-9 border bg-white z-2 flex flex-grow-0 flex-col rounded-lg p-4">
            <h2 className="font-extrabold font-[#333333] flex-grow-0 leading-[26px] text-[18px]">The cheapest immigration Solution</h2>
            <div className="flex font-extrabold items-center justify-start my-2">
              <div className="gap-4 flex items-center mb-1">
                <div className="border-2 border-[#00B894] rounded-[4px] text-[#00B894] px-4 py-1 text-lg">
                  $9.99
                </div>
                <div className="text-[#909090] leading-[26px] py-2 mr-4 text-lg strikethrough">
                  $19.99
                </div>
              </div>
            </div>
            {/* solutions */}
            {/* apply now */}
            <div className='gap-4 item-start flex flex-col'>
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
              <hr className="border-1 flex-grow-0 border-[#F3F3F3] my-0"></hr>
              <div className="font-bold">
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
        </div>
        {/* // 1st block */}
        <div className="compare-table flex flex-col item-start pt-8 gap-4 compare-table-wrapper">
          <div className="compare-background"></div>
          <div className="compare-table-title gap-1 px-4">
            <p className="text-[24px] font-extrabold"><span className="text-[#0A3161]">U</span><span className="text-[#B31942]">S</span> Visa vs. <span className="text-[#00B894]">Green</span> Card</p>
            <p className="align-top py-3">Comparing the American visa and green card in all aspects of life will help you decide which option suits you best.</p>
          </div>
        </div>
        {/* Compare table */}
        <SliderTemp />
      </div>
      {/* discover more about green card advantages */}
      <div className="advantages-block bg-[#F4F5F9] py-[32px]">
        <div className="flex flex-col items-center self-stretch mx-4">
          <h4 className="text-[24px] leading-[36px] font-extrabold">Discover more about <span className="text-[#00B894]">Green Card</span> advantages</h4>
          <p className="text-[#595959] pt-1">Owning a US Green Card gives its holder nearly all rights equal of a US citizen.</p>
        </div>
        <div className="advantages-list flex flex-col items-center gap-4 mx-2">
          <div className="flex items-center flex-col mx-12 justify-center text-black pt-7">
            <img src="img/adv/Vector.svg" alt="Navigation Bar" />
            <p className="leading-7 align-middle text-[16px] text-center my-4">
              Unlimited residency
              <br />
              in the United States of America
            </p>
          </div>
        </div>
        <hr className="border-1 flex-grow-0 mx-4 border-[#E9E9E9] my-0"></hr>
        <div className="advantages-list flex flex-col items-center mx-2">
          <div className="flex items-center flex-col mx-12 justify-center text-black pt-5">
            <img src="img/adv/Vector-1.svg" alt="Navigation Bar" />
            <p className="leading-7 align-middle text-[16px] text-center my-4">
              Unlimited work permit
              <br />
              in the United States of America
            </p>
          </div>
        </div>
        <hr className="border-1 flex-grow-0 mx-4 border-[#E9E9E9] my-0"></hr>
        <div className="advantages-list flex flex-col items-center mx-2">
          <div className="flex items-center flex-col mx-12 justify-center text-black pt-5">
            <img src="img/adv/Vector-2.svg" alt="Navigation Bar" />
            <p className="leading-7 align-middle text-[16px] text-center my-4">
              Unlimited and easy entry and exit
              <br />
              without a Visa or ESTA
            </p>
          </div>
        </div>
        <hr className="border-1 flex-grow-0 mx-4 border-[#E9E9E9] my-0"></hr>
        <div className="advantages-list flex flex-col items-center mx-2">
          <div className="flex items-center flex-col mx-12 justify-center text-black pt-5">
            <img src="img/adv/Vector-3.svg" alt="Navigation Bar" />
            <p className="leading-7 align-middle text-[16px] text-center my-4">
              Eligibility for Medicare benefits
              <br />
              and other government assistance
              <br />
              after 5 years as a Green Card holder
            </p>
          </div>
        </div>
        <hr className="border-1 flex-grow-0 mx-4 border-[#E9E9E9] my-0"></hr>
        <div className="advantages-list flex flex-col items-center mx-2">
          <div className="flex items-center flex-col mx-12 justify-center text-black pt-5">
            <img src="img/adv/Vector-5.svg" alt="Navigation Bar" />
            <p className="leading-7 align-middle text-[16px] text-center my-4">
              The possibility of<br />
              federal loans for students
            </p>
          </div>
        </div>
        <hr className="border-1 flex-grow-0 mx-4 border-[#E9E9E9] my-0"></hr>
        <div className="advantages-list flex flex-col items-center mx-2">
          <div className="flex items-center flex-col mx-12 justify-center text-black pt-5">
            <img src="img/adv/Vector-4.svg" alt="Navigation Bar" />
            <p className="leading-7 align-middle text-[16px] text-center my-4">
              The right to study at a US university<br />without risk and up to 80% cheaper than
              without a Green Card
            </p>
          </div>
        </div>
        <hr className="border-1 flex-grow-0 mx-4 border-[#E9E9E9] my-0"></hr>
        <div className="advantages-list flex flex-col items-center mx-2">
          <div className="flex items-center flex-col mx-12 justify-center text-black pt-5">
            <img src="img/adv/Vector-6.svg" alt="Navigation Bar" />
            <p className="leading-7 align-middle text-[16px] text-center my-4">
              Crisis security:<br />
              Green Card holders are usually<br />
              not affected by travel embargoes
            </p>
          </div>
        </div>
        <hr className="border-1 flex-grow-0 mx-4 border-[#E9E9E9] my-0"></hr>
        <div className="advantages-list flex flex-col items-center mx-1">
          <div className="flex items-center flex-col mx-12 justify-center text-black pt-5">
            <img src="img/adv/Vector-7.svg" alt="Navigation Bar" />
            <p className="leading-7 align-middle text-[16px] text-center my-4">
              Uncomplicated obtaining of business
              and commercial licenses
            </p>
          </div>
        </div>
        <hr className="border-1 flex-grow-0 mx-4 border-[#E9E9E9] my-0"></hr>

        <div className="advantages-list flex flex-col items-center mx-0">
          <div className="flex items-center flex-col mx-12 justify-center text-black pt-5">
            <img src="img/adv/Vector-8.svg" alt="Navigation Bar" />
            <p className="leading-7 align-middle text-[15px] text-center my-4">
              Family members (spouse and unmarried children under 21) are automatically eligible for a Green Card as well
            </p>
          </div>
        </div>
        <hr className="border-1 flex-grow-0 mx-4 border-[#E9E9E9] my-0"></hr>

        <div className="advantages-list flex flex-col items-center">
          <div className="flex items-center flex-col mx-12 justify-center text-black pt-5">
            <img src="img/adv/Vector-9.svg" alt="Navigation Bar" />
            <p className="leading-7 align-middle text-[15px] text-center my-4">
              Application for US citizenship is possible after 3 or 5 years as a Green Card holder.
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col items-center p-3 gap-4 py-4 my-4 mx-4 rounded-lg justify-center">
          <p className="items-center justify-center flex">Learn more about the green card by watching the video about the benefits and comparison of the green card with a US visa.</p>
          <img src="img/adv/video.svg" alt="Navigation Bar" />
        </div>
      </div>
      <div className="faq-block p-4">
        <div className="text-[24px] my-4 font-extrabold leading-9 gap-4 flex-col item-start">
          <span className="text-[#00B894]">Green</span> Card FAQ
        </div>
        <img src="img/adv/pin.svg" alt="Navigation Bar" className="pin-image" />
        <hr className="border-1 flex-grow-0 border-[#F3F3F3] my-0"></hr>
      </div>
    </main >

  )
}
