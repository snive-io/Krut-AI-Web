import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from "react-icons/bs";
import { APP_LINK } from '../../utils/links';

const GetStarted = () => {
  return (
    <>
      <div className='min-h-[20rem] lg:min-h-[25rem] 2xl:min-h-[30rem] rounded-[2rem] mx-8 lg:mx-16 2xl:mx-24 my-4 flex flex-col justify-center items-center lg:mt-16' 
      style={{background: 'linear-gradient(176.42deg, rgba(255, 255, 255, 0.78) -13.17%, #81EEF4 53.37%, #289DA3 114%)'}}>
        <h1 className="text-center font-bold text-3xl lg:text-6xl ">Your Vision Dictates</h1>
        <h1 className="text-center font-bold text-3xl lg:text-6xl ">Krut's Actions</h1>

        {/* Use Link to navigate to another page */}
        <a href={APP_LINK} className="zoomEffect bg-black lg:text-xl py-4 w-3/5 lg:w-1/4 rounded-full lg:my-6 my-4 font-medium flex justify-center items-center text-xs gap-4 " style={{color:'#6AD9DF'}}> 
          <BsArrowRightCircle className="text-xl lg:text-2xl"/>
          Get Started for free
        </a>
      </div>
    </>
  );
}

export default GetStarted;
