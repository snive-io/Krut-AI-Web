import React from "react";
import ToolsCard from "../../Components/ToolsCard/ToolsCard";
import cardData from "../../Data/CardData";
import Header from "../../Components/Header/Header";
import GetStarted from "../../Components/GetStarted/GetStarted"
const ToolsMobile = () => {
  return (
    <>

    
      <div className="block md:hidden min-h-screen">
       
        <Header />


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 lg:gap-5 lg:mx-16  lg:mt-16 2xl:mt-20 2xl:mx-20 mt-12">
          {cardData.map((card, index) => (
            <div className={`col-span-1`} key={index}>
              {/* Check if card index is 8 */}
              <ToolsCard
                title={card.title}
                description={card.description}
                gif={card.gif}
                thumbnail={card.thumbnail}
                isComingSoon={index === 8}
                index={index}
              />
            </div>
          ))}
        </div>
        <GetStarted />
      </div>
    </>
  );
};

export default ToolsMobile;
