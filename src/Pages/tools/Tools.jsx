import React, { useEffect, useState } from "react";
import IntroTools from "../../Components/tools/IntroTools";
import ToolSlider from "../../Components/tools/ToolSlider";
import Faq from "../../Components/faq/Faq";
import ToolsList from "../../Components/Home/ToolsList";
import cardData from "../../Data/CardData";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link, useLocation } from "react-router-dom";
import { faqData } from "../../Data/faqData";
import MobileAppAd from "../../Components/Home/MobileAppAd";

const Tools = () => {
  const [ToolData, setToolData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!window.location.search?.length) return;
    const location = window.location.search.split('=')[1];
    const keywords = location.split('%20');
    const data = cardData.filter((item) => item.title.includes(keywords[0]) && ((keywords[1]) ? item.title.includes(keywords[1]) : true));
    setToolData(data[0]);
  }, [location.search])

  return (
    <>
      <Header />
      {ToolData &&
        <IntroTools
          heading={ToolData?.title}
          description={ToolData?.description}
          video={ToolData?.video}>
        </IntroTools>
      }

      {ToolData &&
        <ToolSlider
          beforeImg={ToolData?.beforeImg}
          afterImg={ToolData?.afterImg}>
        </ToolSlider>
      }

      {ToolData &&
        <div className="text-center lg:pt-10 flex flex-col justify-center items-center">
          <Link to='/bookademo'>
            <div
              className="sec-one-button  text-black rounded-full px-8 py-1 text-lg  lg:px-20 lg:py-2 lg:mt-8 2xl:mt-14 2xl:py-4 2xl:px-28 lg:text-2xl 2xl:text-4xl font-bold"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF -225.69%, #01DDE9 35.95%, #37003E 141.48%)",
              }}>
              Try Krut AI
            </div>
          </Link>
        </div>
      }

      <ToolsList />
      <Faq {...faqData} />
      <MobileAppAd />
      <Footer />
    </>
  )
}

export default Tools;
