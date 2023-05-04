import React, { useState, useEffect } from 'react';

const Popup = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setVisible(currentScrollTop < lastScrollTop || currentScrollTop <= 0);
            setLastScrollTop(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    return (
        <div
            className={`popup px-4 py-2 flex justify-evenly drop-shadow ${visible ? 'visible fade-in' : 'fade-out'
                }`}
        >
            <div className="flex flex-col">
                <a href="https://dvimmigration.org/services/apply-now/?plan=visa-plan" target="_blank" rel="noopener noreferrer" className="py-1.5 leading-[18px] text-[10px]"><span className="font-bold text-black"><span className="text-[#0A3161]">U</span><span className="text-[#B31942]">S</span> Visa </span>sumbission -<span className="font-bold text-[11px]">$199.99</span> </a>
                <a style={{ width: "100%", textAlign: "center" }} className="text-[12px] font-bold leading-[18px] text-black border-[#333333]/80 border rounded-[2px] py-1 px-6">Buy</a>
            </div>
            <div className="flex flex-col">
                <a href="https://dvimmigration.org/services/apply-now/?plan=visa-green-card-plan" target="_blank" rel="noopener noreferrer" className="py-1.5 leading-[18px] text-[10px] text-black"><span className="font-bold"><span className="text-[#0A3161]">U</span><span className="text-[#B31942]">S</span> Visa +</span> <span className="text-[#00B894] font-bold">Green</span><span className="font-bold"> Card </span><span className="font-bold text-[#00B894] text-[11px]">$29.99</span></a>
                <a style={{ width: "100%", textAlign: "center" }} className="text-[12px] font-bold leading-[18px] text-white bg-[#00B894] border-[#00B894] border rounded-[2px] py-1 px-6 inline-block" href="https://dvimmigration.org/services/apply-now/?plan=visa-green-card-plan" target="_blank" rel="noopener noreferrer">Buy</a>
            </div>
        </div >
    )
}

export default Popup