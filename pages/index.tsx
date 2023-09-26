import SliderTemp from './components/sliders/sliderTemp'
import FAQ from './components/faq';
import Popup from './components/popup';
import MobHeader from './components/mobheader';
import React, { useState, useRef, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Modal from 'react-modal';


export default function Home() {
  const [status, setStatus] = useState({ message: '', isSuccess: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Validate form data
    const requiredFields = ['name', 'email', 'phone', 'question'];
    const missingFields = requiredFields.filter(field => !data[field]);

    if (missingFields.length > 0) {
      setStatus({ message: `Fill out your ${missingFields.join(', ')}`, isSuccess: false });
      setIsSubmitting(false);
      return;
    }

    // Send form data to the serverless function
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setStatus({ message: result.message, isSuccess: result.status === 'success' });
    } catch (error) {
      setStatus({ message: 'Error: ' + (error as Error).message, isSuccess: false });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <main className="overflow-hidden">
      <header className="relative md:h-[112px]">
        <div className="desktop-nav-wrapper w-full bg-white">
          <div className="md:max-w-[1440px] mx-auto">
            {isMobHeaderVisible ? (
              <MobHeader onClose={toggleMobHeader} refs={{ faq: staticFAQRef }} />
            ) : (
              <nav className="mobile-nav flex justify-between bg-white py-2 md:hidden px-4 h-16">
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
            <nav className="desktop-nav md:h-[112px] hidden md:flex justify-between items-center py-4 px-20">
              <div className="flex items-start flex-shrink-0 justify-start">
                <img src="img/logo.png" alt="Brand Logo" className="logo-image min-w-max md:w-[108.99px] md:h-[80px] object-contain" />
              </div>
              <div className="flex items-center gap-8 whitespace-nowrap">
                <div className="flex items-center gap-8 text-[16px] font-bold ">
                  <Link to="visevsgcxz"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer">
                    <span className="text-[#0A3161]">U</span><span className="text-[#B31942]">S</span> Visa vs. <span className="text-[#00B894]">Green</span> Card</Link>
                  <Link to="discover"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer">
                    About <span className="text-[#00B894]">Green</span> Card</Link>
                  <Link to="faq-desktop"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer">FAQ</Link>
                </div>
                <Link to="contacts-desktop"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer">
                  <button className="bg-[#00B894] hover:bg-[#00B894]/80 rounded-[4px] py-2 px-[24px] text-white border items-center font-bold">
                    Contact us
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex flex-col md:hidden">
        {/* // 1st block*/}
        {/* background */}
        {/* background
        {/* solutions */}
        <div className="statue-image py-8 px-4  bg-cover bg-center ">
          {/* h1 with desc */}
          <div className="gap-1">
            <h1 className="md:text-[40px] font-extrabold text-28px leading-42px items-start text-white">Get legal immigration to the <span className="text-united">United</span> <span className="text-states">States</span> today</h1>
            <p className="text-[#FFFFFF] leading-[26px] font-extralight text-shadow">We are helping thousands of people annually with obtaining their visas and Green Cards to the United States legally.</p>
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
              <hr className="border-1 flex border-[#F3F3F3] my-0"></hr>
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
      <div className="advantages-block bg-[#F4F5F9] py-[32px] md:hidden">
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

      <div className="faq-block p-4 md:hidden">
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
      <div className="form-block py-8 px-4 flex flex-col  md:hidden">
        <div
          className="font-extrabold text-[24px] leading-9 text-[#333333]"
        >
          <span id="faq" className="text-[#00B894]">
            Have any questions
          </span>{" "}
          or looking for the best US Visa consulting?
        </div>
        <div className="py-4">With more than 25 combine years of experience we are your best immigration solution.</div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="absolute text-red-600 text-[24px] ml-5" style={{ transform: 'translateY(-9px)' }}>*</div>
            <input type="text" placeholder="Full Name" id="name" name="name" className="border placeholder-[#C8C8C8] border-[#E9E9E9] rounded-[4px] py-2 px-4 focus:ring-green-400 focus:border-[#00B894] outline-none" />
          </div>
          <div className="absolute text-red-600 text-[24px] ml-5" style={{ transform: 'translateY(-9px)' }}>*</div>
          <div className="flex flex-col">
            <input type="email" id="email" placeholder="E-mail" name="email" className="border placeholder-[#C8C8C8] border-[#E9E9E9] rounded-[4px] p-2 px-4 focus:ring-green-400 focus:border-[#00B894] outline-none" />
          </div>
          <div className="absolute text-red-600 text-[24px] ml-5" style={{ transform: 'translateY(-9px)' }}>*</div>
          <div className="flex flex-col">
            <input type="tel" id="phone" placeholder="Phone number with +" pattern="\+?\d*" name="phone" className="border border-[#E9E9E9] rounded-[4px] p-2 px-4  placeholder-[#C8C8C8] focus:ring-green-400 focus:border-[#00B894] outline-none" />

          </div>
          <div className="absolute text-red-600 text-[24px] ml-5" style={{ transform: 'translateY(-9px)' }}>*</div>
          <div className="flex flex-col">
            <input type="question" id="question" placeholder="Type your question here and expect our call" name="question" className="border border-[#E9E9E9] rounded-[4px] p-2 px-4  placeholder-[#C8C8C8] focus:ring-green-400 focus:border-[#00B894] outline-none" />
          </div>
          <div className="flex flex-col">
            <button type="submit" disabled={isSubmitting} className="bg-[#00B894] text-white rounded-[4px] py-2 px-4 font-bold hover:bg-[#00B894]/80 active:bg-[#00B894]/50">Contact us</button>
            <div className="h-6">
              {status.message && (
                <p className={status.isSuccess ? "text-green-600" : "text-red-600"}>
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </form>
        <div className="text-[#909090] text-[12px] leading-[18px] font-[200]">
          By clicking the "contact us" button you agree to our <a className="text-[#00B894] font-normal" target="_blank" rel="noopener noreferrer" href="https://dvimmigration.org/terms-and-conditions/">Terms and Conditions</a> and acknowledge that your information will be handled as detailed in our <a className="text-[#00B894] font-normal" target="_blank" rel="noopener noreferrer" href=" https://dvimmigration.org/privacy-policy/">Privacy Policy</a> You acknowledge that in order to continue the process our representative will contact you.
        </div>
      </div>
      {/* footer */}
      <div className="footer-block py-8 flex px-4 flex-col md:hidden">
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
      <div className="md:hidden">
        <Popup />
      </div>


      <div className="content-container">
        <div className="hidden md:block">
          <div className="statue-image-desktop absolute">
          </div>
          <div className="mt-[80px]">
            <div className="flex flex-col gap-6">
              <h1 className="md:text-[40px] font-extrabold leading-[56px] items-start text-white">Get legal immigration <br></br> to the <span className="text-united">United</span> <span className="text-states">States</span> today</h1>
              <p className="text-[#FFFFFF] text-[18px] leading-[28px] font-light text-shadow">We are helping thousands of people annually with obtaining their visas and <br></br> Green Cards to the United States legally.</p>
            </div>
          </div>
          {/* solutions */}
          <div className="py-20">
            <div className="cheapest-solutions border bg-white z-2 inline-flex flex-grow-0 flex-col rounded-lg p-12">
              <h2 className="font-extrabold font-[#333333] flex-grow-0 leading-[48px] text-[32px] text-black">The cheapest immigration Solution</h2>
              <div className="flex font-extrabold items-center justify-start my-2">
                <div className="gap-4 flex items-center mb-1">
                  <div className="border-2 border-[#00B894]  rounded-[4px] text-[#00B894] leading[32px] px-4 py-1 text-[22px]">
                    $29.99
                  </div>
                  <div className="text-[#909090] leading-[32px] py-2 mr-4 text-[22px] strikethrough">
                    $199.99
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className='gap-4 item-start flex flex-col mr-12'>
                  <h3 className="font-medium text-[16px] text-[#333333]">Check your eligibility to live, work and study in the <br></br> <span className="text-united font-extrabold">United</span> <span className="text-states font-extrabold">States</span> today!</h3>
                  <div className="flex font-bold leading-[26px]">
                    <button className="bg-[#00B894] hover:bg-[#00B894]/80 active:bg-[#00B894]/50 border-[#00B894] text-white border rounded-[6px] px-6 py-2 mr-4">
                      <a href="https://dvimmigration.org/services/apply-now/" target="_blank" rel="noopener noreferrer">Apply Now</a>
                    </button>
                    <Link to="visevsgcxz"
                      smooth={true}
                      duration={500}
                      className="border cursor-pointer hover:border-[#00B894]/80 hover:bg-[#00B894]/80 hover:text-white active:border-[#00B894]/50 border-[#00B894] rounded-[6px] px-6 py-2 hover:text-black">
                      More options
                    </Link>
                  </div>
                  <p className="text-[14px] ">More than 25 combine years of experience.</p>
                </div>
                <div className="w-px bg-[#F3F3F3] mx-6 self-stretch"></div>
                <div className="font-bold ml-8">
                  <h4 className="mb-1 text-black">Suitable for:</h4>
                  <ul className="list-none font-normal list-inside flex p-0 align-start gap-1 flex-grow-0 flex-col">
                    <li className="flex gap-2">
                      <img src="img/dot.svg" alt="bullet" />
                      Live
                    </li>
                    <li className="flex gap-2">
                      <img src="img/dot.svg" alt="bullet" />
                      Study
                    </li>
                    <li className="flex gap-2">
                      <img src="img/dot.svg" alt="bullet" />
                      Work
                    </li>
                    <li className="flex gap-2">
                      <img src="img/dot.svg" alt="bullet" />
                      Travel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div id="visevsgcxz" className='compare-background-desktop '>
            <div className='content-container '>
              <div className="absolute compare-table flex flex-col item-start pt-14 compare-table-wrapper">
                <div className=""></div>
                <div className="">
                  <p className="text-[32px] font-extrabold text-black"><span className="text-[#0A3161]">U</span><span className="text-[#B31942]">S</span> Visa vs. <span className="text-[#00B894]">Green</span> Card</p>
                  <p className="align-top py-3 ">Comparing the American visa and green card in all aspects of life will help you decide which option<br></br> suits you best.</p>
                </div>
              </div>
            </div>
            <div className="mt-28 justify-start content-container pb-14">
              <table className="flex flex-col">
                <tbody>
                  <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                    <td className="flex flex-row items-center gap-4">
                      <img src="img/table/Vector.svg" alt="Work permit" />
                      Work Permit
                    </td>
                  </tr>
                  <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                    <td className="flex flex-row items-center gap-4">
                      <img src="img/table/Vector-1.svg" alt="Family" />
                      Family
                    </td>
                  </tr>
                  <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                    <td className="flex flex-row items-center gap-4">
                      <img src="img/table/Vector-2.svg" alt="Work permit" />
                      Validity
                    </td>
                  </tr>
                  <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                    <td className="flex flex-row items-center gap-4">
                      <img src="img/table/Vector-3.svg" alt="Work permit" />
                      Citezenship
                    </td>
                  </tr>
                  <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                    <td className="flex flex-row items-center gap-4">
                      <img src="img/table/Vector-4.svg" alt="Work permit" />
                      Study
                    </td>
                  </tr>
                  <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                    <td className="flex flex-row items-center gap-4">
                      <img src="img/table/Vector-5.svg" alt="Work permit" />
                      Medicare
                    </td>
                  </tr>
                  <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                    <td className="flex flex-row items-center gap-4">
                      <img src="img/table/Vector-6.svg" alt="Work permit" />
                      US Travel
                    </td>
                  </tr>
                  <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                    <td className="flex flex-row items-center gap-4">
                      <img src="img/table/Vector-7.svg" alt="Work permit" />
                      Right to vote
                    </td>
                  </tr>
                  <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                    <td className="flex flex-row items-center gap-4">
                      <img src="img/table/Vector-8.svg" alt="Work permit" />
                      Additional fees
                    </td>
                  </tr>
                </tbody>
              </table>





              <div className="flex flex-row gap-6 -mt-[719px] justify-center z-20 ml-56 overflow-x-auto">

                <table className="min-w-[200px] w-[302px] bg-white bg-opacity-75 box-border h-[90%] relative flex flex-col custom-box-shadow items-center border border-collapse mt-[22px] border-[#F3F3F3] rounded-[16px]">
                  <thead className="mt-[16px] w-full items-center justify-center flex header my-4 border border-l-0 border-r-0 border-t-0 h-full">
                    <tr className="">
                      <th><div className="whitespace-nowrap rounded-lg font-extrabold text-[22px] mt-3">
                        <span className="text-[#0A3161]">U</span><span className="text-[#B31942]">S</span> Visa
                      </div></th>
                    </tr>
                  </thead>
                  <tbody className="flex flex-col -mt-3">
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <img src="img/table/no-icon.svg" alt="No" />
                      </td>
                    </tr>
                    <tr className="w-full items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        For each
                      </td>
                    </tr>
                    <tr className="w-full items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        Limited
                      </td>
                    </tr>
                    <tr className="w-full items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <img src="img/table/no-icon.svg" alt="No" />
                      </td>
                    </tr>
                    <tr className="w-full items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <div>High fees</div>
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <img src="img/table/no-icon.svg" alt="No" />
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        Free
                      </td>
                    </tr>
                    <tr className="w-full p-4 font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <img src="img/table/no-icon.svg" alt="No" />
                      </td>
                    </tr>
                    <tr className="w-full items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        Yes
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="flex justify-center flex-col my-4 border -mt-[6px] w-full border-l-0 border-r-0 border-b-0">
                    <tr className='h-full my-5 space-y-4'>
                      <td className="text-[32px] font-bold justify-center flex h-full items-center">
                        $199.99
                      </td>
                      <td className=" justify-center items-center flex">
                        <button className="py-2 px-6 hover:bg-[#00B894]/80 active:bg-[#00B894]/50 font-bold hover:text-white bg-white text-black border border-[#00B894] rounded-[4px]">
                          <a href="https://dvimmigration.org/services/apply-now/?plan=visa-plan" target="_blank" rel="noopener noreferrer">Apply now</a>
                        </button>
                      </td>
                    </tr>
                  </tfoot>

                </table>




                <table className="min-w-[302px] box-shadow-compare bg-white bg-opacity-75 box-border h-[90%] relative flex flex-col custom-box-shadow items-center border border-collapse border-[#00B894] rounded-[16px]">
                  <thead className="mt-[38px] w-full items-center justify-center flex header my-4 border border-l-0 border-r-0 border-t-0 h-full">
                    <tr className="">
                      <th><div className="whitespace-nowrap rounded-lg font-extrabold text-[26px]">
                        <span className="text-[#0A3161]">U</span><span className="text-[#B31942]">S</span> Visa
                        +<span className="text-[#00B894]"> Green</span> Card
                      </div></th>
                    </tr>
                  </thead>
                  <tbody className="flex flex-col -mt-3">
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <img src="img/table/yes-icon.svg" alt="Yes" />
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        1 for all
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        Life-long
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <img src="img/table/yes-icon.svg" alt="Yes" />
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <div>Up to <span className="text-[#00B894]">85% cheaper</span></div>
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <img src="img/table/yes-icon.svg" alt="Yes" />
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        Free
                      </td>
                    </tr>
                    <tr className="w-full p-4 font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <img src="img/table/yes-icon.svg" alt="Yes" />
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        No
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="flex justify-center flex-col pb-20 py-6 gap-3 border -mt-[6px] h-full  w-full border-l-0 border-r-0 border-b-0">
                    <tr className="w-full items-center justify-center flex flex-col h-full">
                      <td className="flex text-[#333333] text-[14px] h-full font-bold leading-[18px] flex-row py-1 px-4 items-center justify-normal bg-[#FFD166] rounded-[4px] align-middle">
                        Discount 85%
                      </td>
                    </tr>
                    <tr>
                      <td className="flex flex-row items-center space-x-4 justify-center h-full">
                        <div className="text-[#c2bbbb] opacity-75 font-bold text-[18px] leading-[36px] line-through">$199.99</div>
                        <div className="text-[#00B894] font-extrabold text-[32px]">$29.99</div>
                      </td>
                      <td className="flex justify-center items-center h-full">
                        <button className="py-2 px-6 hover:bg-[#00B894]/80 active:bg-[#00B894]/50 bg-[#00B894] text-white border border-[#00B894] rounded-[4px] font-bold">
                          <a href="https://dvimmigration.org/services/apply-now/?plan=visa-green-card-plan" target="_blank" rel="noopener noreferrer">Apply now</a>
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>


                <table className="min-w-[200px] w-[302px] bg-white bg-opacity-75 box-border h-[90%] relative flex flex-col custom-box-shadow items-center border border-collapse mt-[22px] border-[#F3F3F3] rounded-[16px]">
                  <thead className="mt-[16px] w-full items-center justify-center flex header my-4 border border-l-0 border-r-0 border-t-0 h-full">
                    <tr className="">
                      <th><div className="whitespace-nowrap rounded-lg font-extrabold text-[22px] mt-3">
                        <span className="text-[#00B894]"> Green</span> Card
                      </div></th>
                    </tr>
                  </thead>
                  <tbody className="flex flex-col -mt-3">
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <img src="img/table/yes-icon.svg" alt="Yes" />
                      </td>
                    </tr>
                    <tr className="w-full items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        For each
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        Mixed
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <img src="img/table/yes-icon.svg" alt="Yes" />
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <div>Up to <span className="text-[#00B894]">25% cheaper</span></div>
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        <img src="img/table/yes-icon.svg" alt="Yes" />
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        Free
                      </td>
                    </tr>
                    <tr className="w-full p-4 font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        Mixed
                      </td>
                    </tr>
                    <tr className="w-full font-bold items-center justify-center flex flex-row">
                      <td className="flex flex-row items-center">
                        No
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="flex justify-center flex-col my-4 border -mt-[6px] w-full border-l-0 border-r-0 border-b-0">
                    <tr className='h-full my-5 space-y-4'>
                      <td className="text-[32px] font-bold justify-center flex h-full items-center">
                        $49.99
                      </td>
                      <td className=" justify-center items-center flex">
                        <button className="py-2 px-6 hover:bg-[#00B894]/80 active:bg-[#00B894]/50 font-bold hover:text-white bg-white text-black border border-[#00B894] rounded-[4px]">
                          <a href="https://dvimmigration.org/services/apply-now/?plan=green-card" target="_blank" rel="noopener noreferrer">Apply now</a>
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* discover more desktop */}
        <div id="discover" className="advantages-block-desktop bg-[#F4F5F9]  hidden md:block">
          <div className='content-container'>
            <div className="flex flex-col py-16">
              <h4 id="about" className="text-[32px] leading-[48px] font-extrabold text-black">Discover more about <span className="text-[#00B894]">Green Card</span> advantages</h4>
              <p className="text-[#595959] pt-1">Owning a US Green Card gives its holder nearly all rights equal of a US citizen.</p>
            </div>


            <div className='gap-6'>
              <div className='flex flex-row justify-between items-start'>
                <div className='flex flex-row justify-between items-start w-full md:w-[302px]'>
                  <div className="advantages-list flex flex-col items-center mx-2 w-full">
                    <div className="flex items-center flex-col justify-center text-black w-full">
                      <img src="img/adv/Vector.svg" alt="Residency" className="h-[32px]" />
                      <hr className="border-[#E9E9E9] my-4 w-full max-w-[302px]"></hr>
                      <p className="leading-7 align-middle text-[16px] text-center">
                        Unlimited residency
                        <br />
                        in the United States of America
                      </p>
                    </div>
                  </div>
                </div>



                <div className='flex flex-row justify-between items-start w-full md:w-[302px]'>
                  <div className="advantages-list flex flex-col items-center mx-2 w-full">
                    <div className="flex items-center flex-col justify-center text-black w-full">
                      <img src="img/adv/Vector-1.svg" alt="Work permit" className="h-[32px]" />
                      <hr className="border-[#E9E9E9] my-4 w-full max-w-[302px]"></hr>
                      <p className="leading-7 align-middle text-[16px] text-center">
                        Unlimited work permit
                        <br />
                        in the United States of America
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row justify-between items-start w-full md:w-[302px]'>
                  <div className="advantages-list flex flex-col items-center mx-2 w-full">
                    <div className="flex items-center flex-col justify-center text-black w-full">
                      <img src="img/adv/Vector-2.svg" alt="Unlimited visits" className="h-[32px]" />
                      <hr className="border-[#E9E9E9] my-4 w-full max-w-[302px]"></hr>
                      <p className="leading-7 align-middle text-[16px] text-center">
                        Unlimited and easy entry and exit
                        <br />
                        without a Visa or ESTA
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row justify-between items-start w-full md:w-[302px]'>
                  <div className="advantages-list flex flex-col items-center mx-2 w-full">
                    <div className="flex items-center flex-col justify-center text-black w-full">
                      <img src="img/adv/Vector-3.svg" alt="Medicare benefits" className="h-[32px]" />
                      <hr className="border-[#E9E9E9] my-4 w-full max-w-[302px]"></hr>
                      <p className="leading-7 align-middle text-[16px] text-center">
                        Eligibility for Medicare benefits
                        <br />
                        and other government assistance
                        <br />
                        after 5 years as a Green Card holder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='gap-6 py-16'>

              <div className='flex flex-row justify-between'>

                <div className='flex flex-row justify-between items-start w-full md:w-[302px]'>
                  <div className="advantages-list flex flex-col items-center mx-2 w-full">
                    <div className="flex items-center flex-col justify-center text-black w-full">
                      <img src="img/adv/Vector-4.svg" alt="Rights to study" className="h-[32px]" />
                      <hr className="border-[#E9E9E9] my-4 w-full max-w-[302px]"></hr>
                      <p className="leading-7 align-middle text-[16px] text-center">
                        The right to study at a US university<br />without risk and up to 80% cheaper than<br />
                        without a Green Card
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-between items-start w-full md:w-[302px]'>
                  <div className="advantages-list flex flex-col items-center mx-2 w-full">
                    <div className="flex items-center flex-col justify-center text-black w-full">
                      <img src="img/adv/Vector-5.svg" alt="Loans" className="h-[32px]" />
                      <hr className="border-[#E9E9E9] my-4 w-full max-w-[302px]"></hr>
                      <p className="leading-7 align-middle text-[16px] text-center">
                        The possibility of<br />
                        federal loans for students
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white flex flex-row items-center gap-4 py-4 px-8 my-4 mx-4 rounded-lg justify-center box-shadow-compare max-w-[628px]">
                  <p className="items-center justify-center flex w-full">Learn more about the green card by watching the video about the benefits and comparison of the green card with a US visa.</p>
                  <img src="img/adv/video.svg" alt="Navigation Bar" onClick={toggleModal} style={{ cursor: 'pointer' }} />
                  <Modal
                    isOpen={isModalOpen}
                    onRequestClose={toggleModal}
                    contentLabel="Video Modal"
                    className="your-modal-class"
                    overlayClassName="your-overlay-class"
                  >
                    <iframe
                      width="500"
                      height="500"
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
            </div>

            <div className='gap-6 pb-16'>
              <div className='flex flex-row justify-between'>


                <div className='flex flex-row justify-between items-start w-full md:w-[302px]'>
                  <div className="advantages-list flex flex-col items-center mx-2 w-full">
                    <div className="flex items-center flex-col justify-center text-black w-full">
                      <img src="img/adv/Vector-6.svg" alt="Security" className="h-[32px]" />
                      <hr className="border-[#E9E9E9] my-4 w-full max-w-[302px]"></hr>
                      <p className="leading-7 align-middle text-[16px] text-center">
                        Crisis security:<br />
                        Green Card holders are usually<br />
                        not affected by travel embargoes
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row justify-between items-start w-full md:w-[302px]'>
                  <div className="advantages-list flex flex-col items-center mx-2 w-full">
                    <div className="flex items-center flex-col justify-center text-black w-full">
                      <img src="img/adv/Vector-7.svg" alt="Business" className="h-[32px]" />
                      <hr className="border-[#E9E9E9] my-4 w-full max-w-[302px]"></hr>
                      <p className="leading-7 align-middle text-[16px] text-center">
                        Uncomplicated obtaining of business<br />
                        and commercial licenses
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row justify-between items-start w-full md:w-[302px]'>
                  <div className="advantages-list flex flex-col items-center mx-2 w-full">
                    <div className="flex items-center flex-col justify-center text-black w-full">
                      <img src="img/adv/Vector-8.svg" alt="Reunion" className="h-[32px]" />
                      <hr className="border-[#E9E9E9] my-4 w-full max-w-[302px]"></hr>
                      <p className="leading-7 align-middle text-[16px] text-center">
                        Family members (spouse and unmarried children under 21) are automatically eligible for a Green Card as well
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row justify-between items-start w-full md:w-[302px]'>
                  <div className="advantages-list flex flex-col items-center mx-2 w-full">
                    <div className="flex items-center flex-col justify-center text-black w-full">
                      <img src="img/adv/Vector-9.svg" alt="Citizenship" className="h-[32px]" />
                      <hr className="border-[#E9E9E9] my-4 w-full max-w-[302px]"></hr>
                      <p className="leading-7 align-middle text-[16px] text-center">
                        Application for US citizenship is possible after 3 or 5 years as a Green Card holder.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sale-line-bg  hidden md:block'>
          <div className='content-container gap-2 py-16 text-white'>
            <div>
              <h3 className='text-[32px] font-extrabold leading-[48px]'>The cheapest immigration Solution</h3>
              <p className='font-extralight'>Check your eligibility to live, work and study in the United States today!</p>
            </div>
            <div className="flex flex-row align-middle text-center just items-center py-2">
              <div className="text-white opacity-50 text-[22px] leading-[32px] py-2 mr-4 text-lg strikethrough">
                $199.99
              </div>
              <div className="py-1 text-[32px] font-extrabold">
                $29.99
              </div>
            </div>
            <div className="mt-4">
              <button className="border rounded-[4px] px-6 py-2 hover:bg-white/20"><a href="https://dvimmigration.org/services/apply-now/?plan=visa-green-card-plan" target="_blank" rel="noopener noreferrer">Apply now</a></button>
            </div>
          </div>
        </div>

        <div>

        </div>
        <div id="faq-desktop" className='compare-background-desktop hidden md:block lg:block'>
          <div className='content-container'>
            <div className="faq-blockrelative py-16">
              <div className="text-[32px] font-extrabold leading-[48px] gap-4 flex-col item-start mb-6">
                <span className="text-[#00B894] text-[32px] leading-[48px] font-extrabold">Green</span> Card FAQ
              </div>
              <img src="img/adv/pin.svg" alt="Navigation Bar" className="w-[149] h-[216px] absolute -top-[78px] md:right-[250px] 2xl:right-[350px] lg:right-[250px]" />
              <hr className="border flex-grow-0 border-[#F3F3F3]"></hr>
              <div className="flex justify-center items-center pt-16">
                <div className="w-[628px]">
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
            </div>
          </div>
        </div >
      </div >

      {/* have any questions desktop */}
      <div id="contacts-desktop" className='bg-[#F4F5F9] hidden md:block lg:block'>
        <div className='content-container flex lg:flex-row md:flex-col py-16 md:gap-5 lg:gap-28'>
          <div className='max-w-[557px] min-w-[300px] w-full justify-evenly flex flex-col'>
            <h3 className='text-[26px] leading-[40px] font-extrabold'><span className='text-[#00B894]'>Have any questions</span> or<br></br> looking for the best US Visa consulting?</h3>
            <p className='text-[14px] leading-[26px] text-[#595959]'>With more than 25 combine years of experience we are your best immigration solution.</p>
            <p className='text-[14px] leading-[26px] text-[#595959]'>Leave your details and one of our immigration experts will get in touch with you!</p>
          </div>
          <div className="flex-wrap flex">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-row gap-4 justify-between">
                <div className="relative flex flex-col w-full">
                  <div className="absolute text-red-600 text-[24px] ml-5" style={{ transform: 'translateY(-9px)' }}>*</div>
                  <input type="text" placeholder="Full Name" id="name" name="name" className="border placeholder-[#C8C8C8] border-[#E9E9E9] rounded-[4px] py-2 px-4 focus:ring-green-400 focus:border-[#00B894] outline-none" />
                </div>
                <div className="relative flex flex-col w-full">
                  <div className="absolute text-red-600 text-[24px] ml-5" style={{ transform: 'translateY(-9px)' }}>*</div>
                  <input type="email" id="email" placeholder="E-mail" name="email" className="border placeholder-[#C8C8C8] border-[#E9E9E9] rounded-[4px] p-2 px-4 focus:ring-green-400 focus:border-[#00B894] outline-none" />
                </div>
              </div>
              <div className="flex flex-row gap-4 justify-between">
                <div className="relative flex flex-col w-full">
                  <div className="absolute text-red-600 text-[24px] ml-5" style={{ transform: 'translateY(-9px)' }}>*</div>
                  <input type="tel" id="phone" placeholder="Phone number with +" pattern="\+?\d*" name="phone" className="border border-[#E9E9E9] rounded-[4px] p-2 px-4  placeholder-[#C8C8C8] focus:ring-green-400 focus:border-[#00B894] outline-none" />
                </div>
                <div className="relative flex flex-col w-full">
                  <div className="absolute text-red-600 text-[24px] ml-5" style={{ transform: 'translateY(-9px)' }}>*</div>
                  <input type="question" id="question" placeholder="Type your question here" name="question" className="border border-[#E9E9E9] rounded-[4px] p-2 px-4  placeholder-[#C8C8C8] focus:ring-green-400 focus:border-[#00B894] outline-none" />
                </div>
              </div>
              <div className="flex flex-col">
                <button type="submit" disabled={isSubmitting} className="bg-[#00B894] text-white rounded-[4px] py-2 px-4 font-bold hover:bg-[#00B894]/80 active:bg-[#00B894]/50">Contact us</button>
                <div className="h-6">
                  {status.message && (
                    <p className={status.isSuccess ? "text-green-600" : "text-red-600"}>
                      {status.message}
                    </p>
                  )}
                </div>
                <div className="text-[#909090] text-[12px] leading-[18px] font-[200]">
                  By clicking the "contact us" button you agree to our <a className="text-[#00B894] font-normal" target="_blank" rel="noopener noreferrer" href="https://dvimmigration.org/terms-and-conditions/">Terms and Conditions</a> and acknowledge that your information will be handled as detailed in our <a className="text-[#00B894] font-normal" target="_blank" rel="noopener noreferrer" href=" https://dvimmigration.org/privacy-policy/">Privacy Policy</a> You acknowledge that in order to continue the process our representative will contact you.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* footer desktp */}
      <div className='md:block hidden footer-block py-16 flex-col '>
        <div className="content-container">
          <div className='flex flex-row text-white justify-between w-full'>
            <div className='justify-center w-full max-w-[302px]'>
              <img src="img/dvlogo.png" alt="Brand Logo" className="" />
            </div>
            <div className="space-y-2 mx-5">
              <div id="contacts" className="font-bold text-[18px] mb-8">Contacts</div>
              <div className="flex gap-6 items-start">
                <div className="flex font-[200]"><img src="img/adv/Vector-12.svg" alt="Call" className="mr-2 font-[200]" />Call:</div>
                <div> +13473913730</div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex font-[200]"><img src="img/adv/Vector-13.svg" alt="Call" className="mr-2 font-[200]" />E-Mail:</div>
                <div>support@dvimmigration.org</div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex font-[200]"><img src="img/adv/Vector-14.svg" alt="Address" className="mr-2 font-[200]" />Address:</div>
                <div>Katalanou, 1, 1st floor, office 101,<br></br> Aglantzia, 2121, Nicosia, Cyprus</div>
              </div>
            </div>
            <div>
              <div className="text-[18px] mb-8 font-bold">More</div>
              <div className="flex flex-col gap-2">
                <a className="font-[200] leading-[22px]" target="_blank" rel="noopener noreferrer" href="https://dvimmigration.org/privacy-policy/">
                  Privacy Policy
                </a>
                <a className="font-[200] leading-[22px]" target="_blank" rel="noopener noreferrer" href="https://dvimmigration.org/terms-and-conditions/">
                  Terms and Conditions
                </a>
                <div className="flex gap-5 mt-8 mr-8">
                  <img src="img/adv/Vector-15.svg" alt="Address" className="mr-2" />
                  <img src="img/visa.svg" alt="Address" className="mr-2" />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col text-white'>
            <div className="py-4 mb-4"><hr className="border-[#FFFFFF1A]"></hr></div>
            <div className='flex justify-between'>
              <div className="text-[14px] font-[200]">We are not affiliated with the US government or embassy</div>
              <div className="text-[14px] flex-row flex">
                <img src="img/c.svg" alt="Address" className="mr-1 flex justify-center align-middle items-center" />
                <div className="text-[14px] font-[200]">DV Immigration, 2023</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main >

  )
}
