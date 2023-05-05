import SliderTemp from './components/sliders/sliderTemp'
import FAQ from './components/faq';
import Popup from './components/popup';
import MobHeader from './components/mobheader';
import React, { useState, useRef, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Modal from 'react-modal';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    Modal.setAppElement('#app-root');
  }, []);

  const [isMobHeaderVisible, setIsMobHeaderVisible] = useState(false);
  const staticFAQRef = useRef(null);

  const toggleMobHeader = () => {
    setIsMobHeaderVisible((prevState) => {
      if (!prevState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      return !prevState;
    });
  };


  const [activeId, setActiveId] = useState<number | null>(null);
  const faqs = [
    {
      id: 1,
      question: 'What is the Green Card Lottery?',
      answer: 'The Green Card Lottery, also known as the Diversity Immigrant Visa Program, is an incredible opportunity for individuals from eligible countries to win a U.S. visa and gain permanent residency in the United States.',
    },
    {
      id: 2,
      question: 'How do I apply for the Green Card Lottery?',
      answer: 'To apply for the Green Card Lottery, you must submit a free online application during the designated registration period. Our team of experts can help guide you through the application process and ensure that your application is accurate and complete.',
    },
    {
      id: 3,
      question: 'What are the eligibility requirements for the Green Card Lottery?',
      answer: 'To be eligible for the Green Card Lottery, you must be from a country that is eligible for the program, have a high school education or equivalent, or at least two years of work experience in an occupation that requires at least two years of training or experience.',
    },
    {
      id: 4,
      question: 'How many visas are available through the Green Card Lottery?',
      answer: 'The Green Card Lottery provides a limited number of visas each year, typically around 50,000. However, with our expert guidance and support, you can increase your chances of being selected as a winner.',
    },
    {
      id: 5,
      question: 'How long does it take to find out if I have been selected in the Green Card Lottery?',
      answer: 'Winners of the Green Card Lottery are typically notified by email in the spring of the year following the registration period. With our advanced technology and up-to-date knowledge, we can keep you informed and help you respond to any requests for additional information or documentation.',
    },
    {
      id: 6,
      question: 'Can I increase my chances of winning the Green Card Lottery?',
      answer: 'While there is no guaranteed way to increase your chances of winning the Green Card Lottery, our team of experts can help ensure that your application is complete and accurate, and that you meet all of the eligibility requirements. We can also provide tips and strategies to maximize your chances of being selected as a winner.',
    },
    {
      id: 7,
      question: 'If I win the Green Card Lottery, do I have to move to the United States immediately?',
      answer: 'No, winners of the Green Card Lottery have up to six months to apply for and receive their visa, and up to six months after that to move to the United States. Our team can provide support and guidance throughout the entire process, ensuring a smooth transition and helping you start your new life in the United States.',
    },
  ];
  return (
    <main>
      <header className="relative md:h-[1440px]">
        {isMobHeaderVisible ? (
          <MobHeader onClose={toggleMobHeader} refs={{ faq: staticFAQRef }} />
        ) : (
          <nav className="mobile-nav flex justify-between py-2 md:hidden px-4 h-16">
            <img src="img/logo.png" alt="Brand Logo" className="logo-image" />
            <div className="flex items-center">
              <img
                src="img/button.svg"
                alt="Navigation Bar"
                className="mobile-burger"
                onClick={toggleMobHeader}
              />
            </div>
          </nav>
        )}
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
            <h2 className="font-extrabold font-[#333333] flex-grow-0 leading-[26px] text-[18px] text-black">The cheapest immigration Solution</h2>
            <div className="flex font-extrabold items-center justify-start my-2">
              <div className="gap-4 flex items-center mb-1">
                <div className="border-2 border-[#00B894] rounded-[4px] text-[#00B894] px-4 py-1 text-lg">
                  $29.99
                </div>
                <div className="text-[#909090] leading-[26px] py-2 mr-4 text-lg strikethrough">
                  $199.99
                </div>
              </div>
            </div>
            {/* solutions */}
            {/* apply now */}
            <div className='gap-4 item-start flex flex-col'>
              <h3 className="font-medium text-[14px] text-[#333333]">Check your eligibility to live, work and study in the <span className="text-united font-extrabold">United</span> <span className="text-states font-extrabold">States</span> today!</h3>
              <div className="flex-grow-0 flex font-bold leading-[26px]">
                <button className="bg-[#00B894] hover:bg-[#00B894]/80 active:bg-[#00B894]/50 border border-[#00B894] text-white border rounded-[6px] px-6 py-2 mr-4">
                  <a href="https://dvimmigration.org/services/apply-now/" target="_blank" rel="noopener noreferrer">Apply Now</a>
                </button>
                <Link to="visevsgc"
                  smooth={true}
                  duration={500}
                  className="border hover:border-[#00B894]/80 active:border-[#00B894]/50 border-[#00B894] rounded-[6px] px-6 py-2 hover:text-black">
                  More options
                </Link>
              </div>
              <p className="text-[12px] ">More than 25 combine years of experience.</p>
              <hr className="border-1 flex-grow-0 border-[#F3F3F3] my-0"></hr>
              <div className="font-bold">
                <h4 className="mb-1 text-black">Suitable for:</h4>
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
            <p id="visevsgc" className="text-[24px] font-extrabold text-black"><span className="text-[#0A3161]">U</span><span className="text-[#B31942]">S</span> Visa vs. <span className="text-[#00B894]">Green</span> Card</p>
            <p className="align-top py-3 ">Comparing the American visa and green card in all aspects of life will help you decide which option suits you best.</p>
          </div>
        </div>
        {/* Compare table */}
        <SliderTemp />
      </div>
      {/* discover more about green card advantages */}
      <div className="advantages-block bg-[#F4F5F9] py-[32px]">
        <div className="flex flex-col items-center self-stretch mx-4">
          <h4 id="about" className="text-[24px] leading-[36px] font-extrabold text-black">Discover more about <span className="text-[#00B894]">Green Card</span> advantages</h4>
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
          <img src="img/adv/video.svg" alt="Navigation Bar" onClick={toggleModal} style={{ cursor: 'pointer' }} />
          <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Video Modal"
            className="your-modal-class"
            overlayClassName="your-overlay-class"
          >
            <iframe
              width="373"
              height="373"
              src="https://www.youtube.com/embed/z1R395afUeY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-0 right-0 p-2 focus:outline-none"
              onClick={toggleModal}
            >
              <img
                src="img/closebutton.svg"
                alt="Close"
                className="w-6 h-6 text-white fill-current"
              />
            </button>
          </Modal>
        </div>
      </div>
      <div className="faq-block p-4">
        <div className="text-[24px] my-4 font-extrabold leading-9 gap-4 flex-col item-start">
          <span className="text-[#00B894]">Green</span> Card FAQ
        </div>
        <img src="img/adv/pin.svg" alt="Navigation Bar" className="pin-image" />
        <hr className="border-1 flex-grow-0 border-[#F3F3F3] my-0"></hr>
        <div className="mt-[32px]">
          {faqs.map((faq) => (
            <FAQ
              key={faq.id}
              id={faq.id}
              activeId={activeId}
              question={faq.question}
              answer={faq.answer}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
      {/* form */}
      <div className="form-block py-8 px-4 flex flex-col">
        <div
          className="font-extrabold text-[24px] leading-9 text-[#333333]"
        >
          <span id="faq" className="text-[#00B894]">
            Have any questions
          </span>{" "}
          or looking for the best US Visa consulting?
        </div>
        <div className="py-4">With more than 25 combine years of experience we are your best immigration solution.</div>
        <form className="space-y-4 pb-4">
          <div className="flex flex-col">
            <div className="absolute text-red-600 text-[24px] ml-5" style={{ transform: 'translateY(-9px)' }}>*</div>
            <input type="text" placeholder="Full Name" id="name" name="name" className="border placeholder-[#C8C8C8] border-[#E9E9E9] rounded-[4px] py-2 px-4 text-[#C8C8C8] focus:ring-green-400 focus:border-[#00B894] outline-none" />
          </div>
          <div className="absolute text-red-600 text-[24px] ml-5" style={{ transform: 'translateY(-9px)' }}>*</div>
          <div className="flex flex-col">
            <input type="email" id="email" placeholder="E-mail" name="email" className="border placeholder-[#C8C8C8] border-[#E9E9E9] rounded-[4px] p-2 px-4 focus:ring-green-400 focus:border-[#00B894] outline-none" />
          </div>
          <div className="absolute text-red-600 text-[24px] ml-5" style={{ transform: 'translateY(-9px)' }}>*</div>
          <div className="flex flex-col">
            <input type="tel" id="phone" placeholder="Phone number" name="phone" className="border border-[#E9E9E9] rounded-[4px] p-2 px-4  placeholder-[#C8C8C8] focus:ring-green-400 focus:border-[#00B894] outline-none" />
          </div>
          <div className="absolute text-red-600 text-[24px] ml-5" style={{ transform: 'translateY(-9px)' }}>*</div>
          <div className="flex flex-col">
            <input type="question" id="phone" placeholder="Type your question here and expect our call" name="phone" className="border border-[#E9E9E9] rounded-[4px] p-2 px-4  placeholder-[#C8C8C8] focus:ring-green-400 focus:border-[#00B894] outline-none" />
          </div>
        </form>
        <div className="flex flex-col">
          <button className="bg-[#00B894] text-white rounded-[4px] py-2 px-4 font-bold hover:bg-[#00B894]/80 active:bg-[#00B894]/50">Contact us</button>
        </div>
        <div className="text-[#909090] text-[12px] leading-[18px] mt-4  font-[200]">
          By clicking the "contact us" button you agree to our <a className="text-[#00B894] font-normal" target="_blank" rel="noopener noreferrer" href="https://dvimmigration.org/terms-and-conditions/">Terms and Conditions</a> and acknowledge that your information will be handled as detailed in our <a className="text-[#00B894] font-normal" target="_blank" rel="noopener noreferrer" href=" https://dvimmigration.org/privacy-policy/">Privacy Policy</a> You acknowledge that in order to continue the process our representative will contact you.
        </div>
      </div>
      {/* footer */}
      <div className="footer-block py-8 flex px-4 flex-col">
        <div className='justify-center flex'>
          <img src="img/DV-logo2.png" alt="Brand Logo" className="max-w-[110px] justify-center" />
        </div>
        <div className="text-white">
          <div id="contacts" className="font text-[18px] py-4">Contacts</div>
          <div className="space-y-2">
            <div className="flex gap-6 items-start">
              <div className="flex font-[200]"><img src="img/adv/Vector-12.svg" alt="Call" className="mr-2 font-[200]" />Call:</div>
              <div>+13473913730</div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex font-[200]"><img src="img/adv/Vector-13.svg" alt="Call" className="mr-2 font-[200]" />E-Mail:</div>
              <div>support@dvimmigration.org</div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex font-[200]"><img src="img/adv/Vector-14.svg" alt="Address" className="mr-2 font-[200]" />Address:</div>
              <div>Katalanou, 1, 1st floor, office 101, Aglantzia, 2121, Nicosia, Cyprus</div>
            </div>
          </div>
          <div className="py-4"><hr className="border-[#FFFFFF1A]"></hr></div>
          <div>
            <div className="text-[18px] pb-4">More</div>
            <div className="flex flex-col gap-2">
              <a className=" font-[200] underline leading-[22px]" target="_blank" rel="noopener noreferrer" href="https://dvimmigration.org/privacy-policy/">
                Privacy Policy
              </a>
              <a className=" font-[200] underline leading-[22px]" target="_blank" rel="noopener noreferrer" href="https://dvimmigration.org/terms-and-conditions/">
                Terms and Conditions
              </a>
              <div className="flex gap-8 mt-8">
                <img src="img/adv/Vector-15.svg" alt="Address" className="mr-2" />
                <img src="img/visa.svg" alt="Address" className="mr-2" />
              </div>
            </div>
            <div className="py-4"><hr className="border-[#FFFFFF1A]"></hr></div>
            <div className="text-[12px] font-[200] justify-center flex">We are not affiliated with the US government or embassy</div>
            <div className="flex items-center justify-center text-[12px] ">
              <img src="img/c.svg" alt="Address" className="mr-1 flex justify-center align-middle items-center" />
              <div className="text-[12px] font-nunito-sans font-ultralight justify-center flex font-[200]">DV Immigration, 2023</div>
            </div>
          </div>
        </div>
      </div>
      <Popup />
    </main >

  )
}
