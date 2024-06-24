import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import GetStarted from "../../Components/GetStarted/GetStarted"
import Footer from "../../Components/Footer/Footer";
import { BlogsData } from "../../Data/BlogsData";
import { useNavigate } from "react-router-dom";
import BlogsList from "../../Components/Blogs/BlogsList";
import MobileAppAd from "../../Components/Home/MobileAppAd";

const Blogs = () => {
  const linearGreenBackground = {
    backgroundColor: "black",
    backgroundImage: `url("/images/Green_shade.webp")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const [blogs] = useState(BlogsData.sort((a, b) => b.id - a.id));
  const Navigate = useNavigate();


  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div
          className="h-[624px] w-full absolute top-0 -z-50"
          style={linearGreenBackground}
        ></div>


        <div className="my-10 2xl:my-16">
          <h1 className="text-white text-3xl sm:text-5xl xl:text-7xl 2xl:text-8xl text-center font-bold">
            Blogs
          </h1>
          <p className="mt-8 mx-2 sm:mx-4 text-sm px-8 text-center xl:text-base 2xl:text-lg 2xl:font-normal text-white xl:font-light">
            Get Valuable insights, practical tips, and thought-provoking analyses to keep you informed and inspired.
          </p>

          <div className="min-h-[220px] md:min-h-[240px] xl:min-h-[340px] 2xl:min-h-[440px] xl:mx-20 2xl:mx-40 border border-krutNeon rounded-2xl 2xl:rounded-3xl mx-4 md:mx-12 mt-16 mb-4 flex">

            <div className="p-4 bg-white text-black min-h-[200px] w-3/5 lg:w-[55%] rounded-2xl 2xl:rounded-3xl">
              <h1 className="mx-2 lg:mx-8 font-bold xl:font-black py-2 lg:pt-4 xl:py-8 sm:text-xl xl:text-4xl 2xl:text-5xl">{blogs[0].title}</h1>
              <p className="mt-2 lg:mt-2 mx-2 lg:mx-8 text-xs sm:text-xs  2xl:text-base lg:font-normal">
                {blogs[0].titleIntro}
              </p>
            </div>

            <div className="min-h-[200px] md:min-h-[240px] xl:min-h-[340px] 2xl:min-h-[440px]  w-2/5 lg:w-[45%] flex flex-col justify-center md:justify-end md:items-end items-center relative md:mb-8 md:mx-4 lg:pr-4">
              <div className="absolute top-2 lg:top-4 lg:right-6 right-1 min-h-[8px] md:min-h-[16px] lg:min-h-[24px] w-[8px] md:w-[16px] lg:w-[24px] bg-white rounded-full"></div>
              <h1 className="text-white font-semibold text-center  sm:text-lg md:text-xl lg:text-5xl xl:text-7xl  2xl:text-8xl xl:font-bold ">
                Recent Post
              </h1>
              <button className="border lg:border-2  border-krutNeon text-white text-[10px] sm:text-sm lg:text-lg 2xl:text-2xl rounded-lg lg:rounded-full px-2 lg:px-8 lg:font-medium py-1  mt-2"
                onClick={() => Navigate(`/blog?id=${blogs.length}`)}
              >
                Read more
              </button>
            </div>

          </div>

        </div>

        <BlogsList isExtended={true}/>
        <MobileAppAd />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
