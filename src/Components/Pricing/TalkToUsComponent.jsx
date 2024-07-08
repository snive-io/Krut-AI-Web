import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function TalkToUsComponent() {
    const Navigate = useNavigate();
    const [talkToUsBackground, setTalkToUsBackground] = useState({
        backgroundColor: 'black',
        backgroundImage: `url("/images/pricingPageBanner.webp")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    });


    useEffect(() => {
        // Function to update the background image URL based on screen size
        const handleResize = () => {
            if (window.innerWidth >= 768) { // Assuming lg breakpoint is 768px
                setTalkToUsBackground({
                    ...talkToUsBackground,
                    backgroundImage: `url("/images/pricingPageBannerLg.webp")`,
                });
            } else {
                setTalkToUsBackground({
                    ...talkToUsBackground,
                    backgroundImage: `url("/images/pricingPageBanner.webp")`,
                });
            }
        };

        // Call handleResize initially and on window resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


  return (
    <>
       {/* ======== Talk to Us =========  */}
       <div className="px-8 sm:px-4 xl:px-8 mb-16">
                    <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full rounded-3xl p-10" style={talkToUsBackground} 
                    // data-aos="flip-up"
                    >
                        <div className="">
                            <div className="max-w-sm lg:max-w-full text-white font-bold text-xl md:text-2xl lg:text-4xl xl:text-5xl lg:space-y-4">
                                <p className='block md:hidden'>Ready to start your AI journey? Let's find your Ideal Krut Plan together.</p>
                                <p className='hidden md:block'>Ready to start your AI journey? </p>
                                <p className='hidden md:block'>Let's find your Ideal Krut Plan together.</p>
                            </div>
                        </div>
                        <div className="lg:w-full lg:flex lg:justify-end lg:mt-44"> {/* Change: Added justify-end */}
                            <button className='max-w-[200px] bg-white text-xl rounded-3xl mb-5 mt-8 py-1.5 px-10 font-semibold cursor-pointer zoomEffect'
                            onClick={()=>Navigate("/contact")}>
                                Talk to Us
                            </button>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default TalkToUsComponent