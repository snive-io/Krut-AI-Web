import React, { useState } from 'react';
import toolImage from '../../assets/Images/toolsbgg.jpeg';
import { useNavigate } from 'react-router-dom';

const ToolsCard = ({ title, description, gif, thumbnail, isComingSoon, index }) => {

  const Navigate = useNavigate();
  const [activeTileIndex, setActiveTileIndex] = useState(null);
  const handleTileMouseEnter = (index) => {
    if (index !== 7) {
      setActiveTileIndex(index);
    }

  };
  const handleTileMouseLeave = () => {
    setActiveTileIndex(null);
  };
  return (

    <div className="bg-white relative px-2 py-2 h-[21rem] xl:h-[24rem] 2xl:h-[24rem] rounded-[1rem] cursor-pointer" onMouseEnter={() => handleTileMouseEnter(index)}
      onMouseLeave={handleTileMouseLeave} onClick={() => { Navigate(`/tools?tool=${title}`) }}
       data-aos="fade-up" data-aos-delay={300 + (index * 300)} data-aos-anchor="#trigger-right" data-aos-anchor-placement="top-center" >
      {isComingSoon && (
        <div className="absolute   inset-0 top-[30%] flex  justify-center  text-white px-2 py-1 rounded-tl-2xl rounded-br-xl">
          <span className="lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold 2xl:font-bold md:text-sm xl:font-extrabold">Coming soon</span>
        </div>
      )}
      <img src={thumbnail} alt={title} className={activeTileIndex === index ? "hidden" : "block h-[16rem] xl:h-[20rem] 2xl:h-[18rem] w-full object-cover rounded-t-3xl transition-opacity duration-500"} />

      {!isComingSoon && (
        <video
          src={gif}
          autoPlay
          loop
          className={activeTileIndex === index ? "block h-[16rem] xl:h-[16rem] 2xl:h-[18rem] w-full rounded-t-3xl object-cover transition-opacity duration-500" : "hidden"}
        />
      )}

      <div className="absolute bottom-0 left-0 p-3 w-full h-[6rem] md:h-[6rem] xl:h-[7rem] 2xl:h-[7rem]   bg-white  rounded-b-3xl">
        <h6 className="font-extrabold  xl:text-[22px] 2xl:text-3xl">{title}</h6>
        <p className="font-medium text-xs lg:text-sm 2xl:text-base   mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ToolsCard;
