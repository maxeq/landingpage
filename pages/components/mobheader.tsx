import React, { FunctionComponent, PropsWithChildren } from 'react';

interface MobHeaderProps {
    onClose: () => void;
}

const MobHeader: FunctionComponent<PropsWithChildren<MobHeaderProps>> = ({ onClose }) => {

    return (
        <>
            <nav className="mobile-nav shadow-box-header flex justify-between py-2 md:hidden px-4 h-16">
                <img src="img/logo.png" alt="Brand Logo" className="logo-image" />
                <div className="flex items-center">
                    <img
                        src="img/closebutton.svg"
                        alt="Close Navigation"
                        onClick={onClose}
                    />
                </div>
            </nav>
            <div className="mobile-background"></div>
            <div className="mobbackground text-[#333333]">
                <div className="py-8 px-4 space-y-4 flex-col flex">
                    <div id="visevsgc" className="font-bold text-[16px] leading-[28px]"><span className="text-[#0A3161]">U</span><span className="text-[##B31942]">S</span> Visa vs. <span className="text-[#00B894]">Green</span> Card</div>
                    <div id="about" className="font-bold text-[16px] leading-[28px]">About <span className="text-[#00B894]">Green</span> Card</div>
                    <div id="faq" className="font-bold text-[16px] leading-[28px]">FAQ</div>
                    <a className="font-normal text-[14px] leading-[28px]" target="_blank" rel="noopener noreferrer" href="https://dvimmigration.org/privacy-policy/">Privacy Policy</a>
                    <a className="font-normal text-[14px] leading-[28px]" target="_blank" rel="noopener noreferrer" href="https://dvimmigration.org/terms-and-conditions/">Terms and Conditions</a>
                    <button id="contact" className="text-white rounded-[4px] w-32 px-6 py-2 bg-[#00B894] border border-[#00B894]">Contact us</button>
                </div>
                <div className="footer-block py-8 flex px-4 flex-col">
                    <div className="text-white">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobHeader;
