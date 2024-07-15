import React from "react";
import Header from "../../Components/Header/Header";
import MobileAppAd from "../../Components/Home/MobileAppAd";
import { Link } from "react-router-dom";
import GetStarted from "../../Components/GetStarted/GetStarted";
import github from "../../assets/Images/github.png";
import nvidia from "../../assets/Images/nvidia.png";
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
import { APP_LINK } from "../../utils/links";

const Home = () => {
  return (
    <>
      {/* First Section */}
      <div className="conatiner-fluid bg-cover bg-no-repeat bg-center min-h-[560px] lg:min-h-[600px] 2xl:min-h-screen  "
        style={{ backgroundImage: `url("/images/Green_shade.webp")` }}>

        <div className="bg-black bg-opacity-10 min-h-[560px] lg:min-h-[600px] 2xl:min-h-screen">
          <Header />

          <div className="flex justify-center mt-4">
            <a href="https://www.producthunt.com/posts/krut-ai?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-krut&#0045;ai" target="_blank">
              {/* <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=465883&theme=neutral&period=daily" alt="Krut&#0032;AI - AI&#0032;co&#0045;pilot&#0032;for&#0032;e&#0045;commerce&#0032;brands | Product Hunt" style={{ width: "250px", height: "54px" }} width="250" height="54" /> */}
              <img src="/images/ProductHunt.svg" alt="Product Hunt 4th Rank" className="w-72" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
          </div>


          <div className="text-center py-10 2xl:py-24 xl:py-16 flex flex-col justify-center items-center">
            <div className="leading-tight"
            // data-aos="fade-up"
            >
              <h1 className="text-white sm:text-5xl md:text-6xl text-4xl lg:text-7xl  xl:text-8xl font-bold">
                AI <span className="text-krutNeon">Co-pilot</span> for
              </h1>
              <h1 className="text-white sm:text-5xl md:text-6xl text-4xl lg:text-7xl xl:text-8xl font-bold">
                <span className="text-krutNeon">E-commerce</span> Brands
              </h1>
            </div>

            <div className="mt-10 lg:mt-4 2xl:mt-6 xl:mt-5 leading-normal">
              <h2 className="hidden md:block text-white text-center  2xl:text-3xl mx-auto lg:text-lg xl:text-xl">
                An AI Platform that generates high-quality custom content creation for e-commerce
              </h2>
              <h2 className="hidden md:block text-white text-center 2xl:text-3xl xl:text-xl mx-auto">
                brands without being an expert prompter.
              </h2>

              <h2 className="md:hidden text-white text-center  2xl:text-3xl mx-4 lg:text-lg xl:text-xl">
                An AI Platform that generates high-quality custom content creation for e-commerce brands without being an expert prompter.
              </h2>
              {/* <p className="md:hidden text-white text-center 2xl:text-3xl xl:text-xl mx-auto">click of a button</p> */}

              <ul className="hidden md:flex list-disc text-white font-bold lg:gap-10 gap-5 justify-center items-center mt-5 lg:mt-3 xl:mt-4 2xl:mt-5 text-xs lg:text-sm xl:text-lg 2xl:text-2xl mx-auto">
                <li>Time-Efficient</li>
                <li>Cost-saving</li>
                <li>Increased Efficiency</li>
                {/* <li>Higher Accuracy</li> */}
              </ul>
            </div>

            <a href={APP_LINK}>
              <div className="sec-one-button zoomEffect text-black rounded-full px-8 py-1 mt-16 text-lg  lg:px-20 lg:py-2 lg:mt-8 2xl:mt-14 2xl:py-4 2xl:px-28 lg:text-2xl 2xl:text-4xl font-bold"
                style={{ background: "linear-gradient(180deg, #FFFFFF -225.69%, #01DDE9 35.95%, #37003E 141.48%)" }} >
                Try Krut AI
              </div>
            </a>

          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className=" min-h-[8rem] md:min-h-[9rem] lg:min-h-[10rem] flex justify-center items-center mx-[16px] 2xl:mx-[64px] lg:mx-7"
      //  data-aos="flip-up"
      >
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
        <div className="lg:min-h-screen  min-h-[8rem] bg-black bg-opacity-95 pt-16 flex flex-col justify-center ">
          <div className="border border-krutNeon  min-h-[10rem] md:min-h-[20rem] 2xl:min-h-[25rem] text-white rounded-[43px] mx-4 md:mx-16 lg:mx-20 xl:mx-[17rem] flex flex-col  justify-center items-center">
            <h1 className="text-center font-bold text-3xl md:text-5xl lg:text-6xl">
              Our Trusted Partners
            </h1>
            <div className="flex flex-wrap space-x-3 md:space-x-5 space-y-2 md:space-y-4 md:mt-8 items-center justify-center max-w-[80%]">
              <img
                className="h-4 md:h-8 lg:h-14 max-h-[40px] mt-2 ms-5"
                src={github}
                alt="github"
              />
              <img
                className="h-4 md:h-8 lg:h-14 max-h-[40px]"
                src={shellcode}
                alt="shellcode"
              />
              <img
                className="h-4 md:h-8 lg:h-14 max-h-[40px]"
                src={aws}
                alt="aws"
              />
              <img
                className="h-4 md:h-8 lg:h-14 max-h-[40px]"
                src={mongodb}
                alt="mongodb"
              />
              {/* <img
                className="h-4 md:h-8 lg:h-14 max-h-[40px]"
                src={partners}
                alt="partners"
              /> */}
              <img
                className="h-4 md:h-8 lg:h-14 max-h-[45px]"
                src={nvidia}
                alt="nvidia"
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
