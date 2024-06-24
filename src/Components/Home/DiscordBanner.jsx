import React from 'react'
import { Link } from 'react-router-dom';
import dicordVector from "../../assets/Images/discord_vector.webp";

function DiscordBanner() {
  return (
    <div className="container-fluid min-h-[40rem] my-12 md:my-8 lg:my-5 2xl:my-20 ">
    <div className=" bg-gray-200 min-h-[34rem]  md:min-h-[28rem] lg:min-h-[33rem] 2xl:min-h-[38rem]  rounded-xl md:rounded-5xl  lg:rounded-[3rem] md:flex mx-6 md:mx-16 2xl:mx-36">
      <div className="lg:w-1/2 sm:w-full discord-img flex justify-center items-center">
        <img
          src={dicordVector}
          className="h-auto w-[25rem] md:w-[33rem] mt-4"
          alt=""
        />
      </div>
      <div className="lg:w-1/2 sm:w-full xl:w-1/2 text-center  md:pr-4 flex flex-col justify-center items-center">
        <h2 className="font-medium text-lg md:text-xl px-2 md:px-4 leading-tight">
          Share your ideas and get inspired. Connect with like-minded
          creators and discuss your ideas on our{" "}
          <span className="font-bold">Discord server</span>
        </h2>
        <Link to={"https://discord.gg/vf2jJxEVn7"}>
          {" "}
          <div className="mt-7 bg-black w-[11rem] md:w-[13rem] text-white md:py-3 px-4 py-2 md:px-2 rounded-full text-xl md:text-2xl font-semibold zoomEffect">
            Join Discord
          </div>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default DiscordBanner