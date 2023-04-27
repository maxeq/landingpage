import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

export const SliderTemp = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        afterChange: (current: number) => setCurrentSlide(current),
        dots: true,
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        customPaging: (i: number) => (
            <div
                style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '12px',
                    border: '1px solid #00B894',
                    backgroundColor: i === currentSlide ? '#00B894' : 'transparent',
                    margin: '5px',
                }}
            ></div>
        ),
        appendDots: (dots: React.ReactNode[]) => <div className="dots-container">{dots}</div>,
    };


    return (
        <div className="compare-table flex flex-col item-start py-8 gap-4 compare-table-wrapper">
            <table className="flex flex-col items-start p-0">
                <tbody className="w-full h-full">
                    <Slider {...settings}>
                        <div className="compare-table flex flex-col item-start py-8 gap-4 compare-table-wrapper">
                            <div className="compare-background"></div>
                            <div className="compare-table-title gap-1 px-4">
                                <p className="text-[24px] font-extrabold"><span className="text-[#0A3161]">U</span><span className="text-[#B31942]">S</span> Visa vs. <span className="text-[#00B894]">Green</span> Card</p>
                                <p className="align-top">Comparing the American visa and green card in all aspects of life will help you decide which option suits you best.</p>
                            </div>
                            <div className="compare-table-slider-header flex items-center justify-center">
                                <div className="Green Card px-16 p-3 border border-[#F3F3F3] rounded-lg font-extrabold text-[18px] custom-box-shadow">
                                    <span className="text-[#00B894]">Green</span> Card</div>
                            </div>
                            <table className="flex flex-col items-start p-0">
                                <tbody className="w-full h-full">
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector.svg" alt="Work permit" />
                                            Work Permit
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <img src="img/table/yes-icon.svg" alt="Yes" />
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-1.svg" alt="Family" />
                                            Family
                                        </td>
                                        <td className="flex flex-row items-center">
                                            1 for all
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-2.svg" alt="Work permit" />
                                            Validity
                                        </td>
                                        <td className="flex flex-row items-center">
                                            Life-long
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-3.svg" alt="Work permit" />
                                            Citezenship
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <img src="img/table/yes-icon.svg" alt="Yes" />
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-4.svg" alt="Work permit" />
                                            Study
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <div>Up to <span className="text-[#00B894]">80% cheaper</span></div>
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-5.svg" alt="Work permit" />
                                            Free
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <img src="img/table/yes-icon.svg" alt="Yes" />
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-6.svg" alt="Work permit" />
                                            US Travel
                                        </td>
                                        <td className="flex flex-row items-center">
                                            Free
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-7.svg" alt="Work permit" />
                                            Right to vote
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <img src="img/table/yes-icon.svg" alt="Yes" />
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-8.svg" alt="Work permit" />
                                            Additional fees
                                        </td>
                                        <td className="flex flex-row items-center">
                                            No
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="slider-bottom flex flex-col items-center gap-8 justify-center align-middle">
                                <div className="custom-box-shadow border border-[#F3F3F3] px-12 rounded-[8px] items-center justify-center">
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        <div className="flex flex-row py-1 px-4 items-center justify-normal bg-[#FFD166] rounded-[4px] align-middle">
                                            <div className="text-[#333333] text-[12px] leading-[18px]">Discount 50%</div>
                                        </div>
                                        <div className="gap-4 flex flex-row items-center justify-center -my-2">
                                            <div className="text-[#c2bbbb] opacity-75 font-bold leading-[36px] strikethrough">
                                                $19.99
                                            </div>
                                            <div className="text-[#00B894] font-extrabold text-[26px]">
                                                $9.99
                                            </div>
                                        </div>
                                        <button className="py-2 px-6 bg-[#00B894] text-white border border-[#00B894] rounded-[4px]">
                                            Apply now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="compare-table flex flex-col item-start py-8 gap-4 compare-table-wrapper">
                            <div className="compare-background"></div>
                            <div className="compare-table-title gap-1 px-4">
                                <p className="text-[24px] font-extrabold"><span className="text-[#0A3161]">U</span><span className="text-[#B31942]">S</span> Visa vs. <span className="text-[#00B894]">Green</span> Card</p>
                                <p className="align-top">Comparing the American visa and green card in all aspects of life will help you decide which option suits you best.</p>
                            </div>
                            <div className="compare-table-slider-header flex items-center justify-center">
                                <div className="Green Card px-16 p-3 border border-[#F3F3F3] rounded-lg font-extrabold text-[18px] custom-box-shadow">
                                    <span className="text-[#00B894]">Green</span> Card</div>
                            </div>
                            <table className="flex flex-col items-start p-0">
                                <tbody className="w-full h-full">
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector.svg" alt="Work permit" />
                                            Work Permit
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <img src="img/table/yes-icon.svg" alt="Yes" />
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-1.svg" alt="Family" />
                                            Family
                                        </td>
                                        <td className="flex flex-row items-center">
                                            1 for all
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-2.svg" alt="Work permit" />
                                            Validity
                                        </td>
                                        <td className="flex flex-row items-center">
                                            Life-long
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-3.svg" alt="Work permit" />
                                            Citezenship
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <img src="img/table/yes-icon.svg" alt="Yes" />
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-4.svg" alt="Work permit" />
                                            Study
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <div>Up to <span className="text-[#00B894]">80% cheaper</span></div>
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-5.svg" alt="Work permit" />
                                            Free
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <img src="img/table/yes-icon.svg" alt="Yes" />
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-6.svg" alt="Work permit" />
                                            US Travel
                                        </td>
                                        <td className="flex flex-row items-center">
                                            Free
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-7.svg" alt="Work permit" />
                                            Right to vote
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <img src="img/table/yes-icon.svg" alt="Yes" />
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-8.svg" alt="Work permit" />
                                            Additional fees
                                        </td>
                                        <td className="flex flex-row items-center">
                                            No
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="slider-bottom flex flex-col items-center gap-8 justify-center align-middle">
                                <div className="custom-box-shadow border border-[#F3F3F3] px-12 rounded-[8px] items-center justify-center">
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        <div className="flex flex-row py-1 px-4 items-center justify-normal bg-[#FFD166] rounded-[4px] align-middle">
                                            <div className="text-[#333333] text-[12px] leading-[18px]">Discount 50%</div>
                                        </div>
                                        <div className="gap-4 flex flex-row items-center justify-center -my-2">
                                            <div className="text-[#c2bbbb] opacity-75 font-bold leading-[36px] strikethrough">
                                                $19.99
                                            </div>
                                            <div className="text-[#00B894] font-extrabold text-[26px]">
                                                $9.99
                                            </div>
                                        </div>
                                        <button className="py-2 px-6 bg-[#00B894] text-white border border-[#00B894] rounded-[4px]">
                                            Apply now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="compare-table flex flex-col item-start py-8 gap-4 compare-table-wrapper">
                            <div className="compare-background"></div>
                            <div className="compare-table-title gap-1 px-4">
                                <p className="text-[24px] font-extrabold"><span className="text-[#0A3161]">U</span><span className="text-[#B31942]">S</span> Visa vs. <span className="text-[#00B894]">Green</span> Card</p>
                                <p className="align-top">Comparing the American visa and green card in all aspects of life will help you decide which option suits you best.</p>
                            </div>
                            <div className="compare-table-slider-header flex items-center justify-center">
                                <div className="Green Card px-16 p-3 border border-[#F3F3F3] rounded-lg font-extrabold text-[18px] custom-box-shadow">
                                    <span className="text-[#00B894]">Green</span> Card</div>
                            </div>
                            <table className="flex flex-col items-start p-0">
                                <tbody className="w-full h-full">
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector.svg" alt="Work permit" />
                                            Work Permit
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <img src="img/table/yes-icon.svg" alt="Yes" />
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-1.svg" alt="Family" />
                                            Family
                                        </td>
                                        <td className="flex flex-row items-center">
                                            1 for all
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-2.svg" alt="Work permit" />
                                            Validity
                                        </td>
                                        <td className="flex flex-row items-center">
                                            Life-long
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-3.svg" alt="Work permit" />
                                            Citezenship
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <img src="img/table/yes-icon.svg" alt="Yes" />
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-4.svg" alt="Work permit" />
                                            Study
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <div>Up to <span className="text-[#00B894]">80% cheaper</span></div>
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-5.svg" alt="Work permit" />
                                            Free
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <img src="img/table/yes-icon.svg" alt="Yes" />
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-6.svg" alt="Work permit" />
                                            US Travel
                                        </td>
                                        <td className="flex flex-row items-center">
                                            Free
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-white">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-7.svg" alt="Work permit" />
                                            Right to vote
                                        </td>
                                        <td className="flex flex-row items-center">
                                            <img src="img/table/yes-icon.svg" alt="Yes" />
                                        </td>
                                    </tr>
                                    <tr className="py-4 px-4 font-bold items-center justify-between flex flex-row bg-[#0A31610D]">
                                        <td className="flex flex-row items-center gap-4">
                                            <img src="img/table/Vector-8.svg" alt="Work permit" />
                                            Additional fees
                                        </td>
                                        <td className="flex flex-row items-center">
                                            No
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="slider-bottom flex flex-col items-center gap-8 justify-center align-middle">
                                <div className="custom-box-shadow border border-[#F3F3F3] px-12 rounded-[8px] items-center justify-center">
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        <div className="flex flex-row py-1 px-4 items-center justify-normal bg-[#FFD166] rounded-[4px] align-middle">
                                            <div className="text-[#333333] text-[12px] leading-[18px]">Discount 50%</div>
                                        </div>
                                        <div className="gap-4 flex flex-row items-center justify-center -my-2">
                                            <div className="text-[#c2bbbb] opacity-75 font-bold leading-[36px] strikethrough">
                                                $19.99
                                            </div>
                                            <div className="text-[#00B894] font-extrabold text-[26px]">
                                                $9.99
                                            </div>
                                        </div>
                                        <button className="py-2 px-6 bg-[#00B894] text-white border border-[#00B894] rounded-[4px]">
                                            Apply now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </tbody>
            </table>
        </div>
    );
}