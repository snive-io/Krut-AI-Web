import React from "react";
import Header from "../../Components/Header/Header";
import MobileAppAd from "../../Components/Home/MobileAppAd";
import { Link } from "react-router-dom";
import GetStarted from "../../Components/GetStarted/GetStarted";
import github from "../../assets/Images/github.png";
import aws from "../../assets/Images/aws.png";
import shellcode from "../../assets/Images/shellcode.png";
import mongodb from "../../assets/Images/mongodb.png";
import StartupInida from "../../assets/Images/startupIndia.png";
import Footer from "../../Components/Footer/Footer";
import PromoVideo from "../../assets/Images/Render Last 720.mp4";
import BlogsList from "../../Components/Blogs/BlogsList";
import PricingCards from "../../Components/Pricing/PricingCards";
import ToolsList from "../../Components/Home/ToolsList";
import DiscordBanner from "../../Components/Home/DiscordBanner";

const Home = () => {
  return (
    <>
      {/* First Section */}
      <div className="conatiner-fluid bg-cover bg-no-repeat bg-center min-h-[560px] lg:min-h-[600px] 2xl:min-h-screen  "
        style={{ backgroundImage: `url("/images/Green_shade.png")` }}>

        <div className="bg-black bg-opacity-10 min-h-[560px] lg:min-h-[600px] 2xl:min-h-screen">
          <Header />

          <div className="flex justify-center items-center text-white">
            <div className="max-w-[330px] lg:max-w-[430px]">
            <img src="/images/productHunt.webp" alt="product hunt banner"  className="w-full"/>
            </div>
          </div>

          <div className="text-center py-10 2xl:py-24 xl:py-16 flex flex-col justify-center items-center">
            <div className="leading-tight ">
              <h1 className="text-white sm:text-5xl md:text-6xl text-4xl lg:text-7xl  xl:text-8xl 2xl:text-[9rem] font-bold">
                Design Your <span className="text-krutNeon">Ideas</span>
              </h1>
              <h1 className="text-white sm:text-5xl md:text-6xl text-4xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-bold">
                Into <span className="text-krutNeon">Visuals</span>
              </h1>
            </div>

            <div className="mt-10 lg:mt-4 2xl:mt-6 xl:mt-5 leading-normal">
              <h2 className="hidden md:block text-white text-center  2xl:text-3xl mx-auto lg:text-lg xl:text-xl">
                Acquire the tools necessary for designing ads, banners, websites
                and more, all with the
              </h2>
              <h2 className="hidden md:block text-white text-center 2xl:text-3xl xl:text-xl mx-auto">
                click of a button.
              </h2>

              <h2 className="md:hidden text-white text-center  2xl:text-3xl mx-4 lg:text-lg xl:text-xl">
                Acquire the tools necessary for designing ads, banners, websites
                and more, all with the click of button which saves
                cost, increases efficiency and accuracy at minimal cost.
              </h2>
              {/* <p className="md:hidden text-white text-center 2xl:text-3xl xl:text-xl mx-auto">click of a button</p> */}

              <ul className="hidden md:flex list-disc text-white  lg:gap-10 gap-5 justify-center items-center mt-5 lg:mt-3 xl:mt-4 2xl:mt-5 text-xs lg:text-sm xl:text-lg 2xl:text-2xl mx-auto">
                <li>Cost-saving</li>
                <li>Increased Efficiency</li>
                <li>Higher Accuracy</li>
                <li>Time-Efficient</li>
              </ul>
            </div>

            <Link to='/bookademo'>
              <div className="sec-one-button zoomEffect text-black rounded-full px-8 py-1 mt-16 text-lg  lg:px-20 lg:py-2 lg:mt-8 2xl:mt-14 2xl:py-4 2xl:px-28 lg:text-2xl 2xl:text-4xl font-bold"
                style={{ background: "linear-gradient(180deg, #FFFFFF -225.69%, #01DDE9 35.95%, #37003E 141.48%)" }} >
                Get Early Access
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className=" min-h-[8rem] md:min-h-[9rem] lg:min-h-[10rem] flex justify-center items-center mx-[16px] 2xl:mx-[64px] lg:mx-7 ">
        <video className="w-full h-auto  rounded-2xl 2xl:rounded-[3rem]  mt-[-1rem] mb-[-1rem] md:mb-[-2rem] lg:mb-[-3rem] 2xl:mt-[-4rem] 2xl:mb-[-4rem] object-cover"
          autoPlay loop muted controls >
          <source src={PromoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Third Section */}

      <ToolsList />


      <div
        className=" min-h-[8rem]  lg:min-h-screen bg-cover bg-no-repeat bg-center">
        <div className="lg:min-h-screen  min-h-[8rem] bg-black bg-opacity-95 py-16 flex flex-col justify-center ">
          <div className="border border-krutNeon  min-h-[10rem] md:min-h-[20rem] 2xl:min-h-[25rem] text-white rounded-[43px] mx-4 md:mx-16 lg:mx-20 xl:mx-[17rem] flex flex-col  justify-center items-center">
            <h1 className="text-center font-bold text-3xl md:text-5xl lg:text-6xl">
              Our Trusted Partners
            </h1>
            <div className="flex gap-5 mt-4 md:gap-8 lg:gap-10 md:mt-8 items-center justify-center">
              <img
                className="w-12 h-6 md:w-20 md:h-12 lg:w-24 lg:h-14 2xl:w-36 2xl:h-20"
                src={github}
                alt=""
              />
              <img
                className="w-10 h-5 md:w-16 md:h-10 lg:w-20 lg:h-12 2xl:w-28 2xl:h-16"
                src={aws}
                alt=""
              />
              <img
                className="w-20 h-4 md:w-36 md:h-10 lg:w-38 xl:w-48 lg:h-10 2xl:w-60 2xl:h-12"
                src={shellcode}
                alt=""
              />
              <img
                className="w-18 h-5 md:w-32 md:h-8 lg:w-36 lg:h-10 2xl:w-52 2xl:h-14"
                src={mongodb}
                alt=""
              />
            </div>
          </div>

          <div className="border border-krutNeon  min-h-[10rem] mt-8 md:min-h-[20rem] 2xl:min-h-[25rem] text-white rounded-[43px] mx-4 md:mx-16 lg:mx-20 xl:mx-[17rem] flex flex-col  justify-center items-center">
            <h1 className="text-center font-bold text-3xl md:text-5xl lg:text-6xl">
              Recognized By
            </h1>
            <img
              className="w-[156px] h-[38px] lg:w-[383px] lg:h-[105px] mt-4 lg:mt-8"
              src={StartupInida}
              alt=""
            />
          </div>
        </div>
      </div>

      <BlogsList isExtended={false} />
      <DiscordBanner />
      <PricingCards isHomePage={true} isExpanded={true} />
      <MobileAppAd />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Home;
