import React, { useEffect, useState } from 'react'
import ToolsCard from '../ToolsCard/ToolsCard'
import cardData from '../../Data/CardData'
import bgVector from "../../assets/Images/vector_spiral.png";
import { Link, useLocation } from 'react-router-dom';



function ToolsList() {
    const [activeTool, setActiveTool] = useState("");
    const location = useLocation();

    useEffect(() => {
        if (!window.location.search?.length) return;
        const location = window.location.search.split('=')[1];
        const keywords = location.split('%20');
        const data = cardData.filter((item) => item.title.includes(keywords[0]) && ((keywords[1]) ? item.title.includes(keywords[1]) : true));
        setActiveTool(data[0].title);
    }, [location.search])


    return (
        <div id='ToolsList'
            className="min-h-[80rem] xl:min-h-[95rem] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgVector})` }} >
            <div className="min-h-[80rem xl:min-h-[95rem] bg-black bg-opacity-80">
                <div className=" text-center pt-24 mx-2 lg:pt-40">
                    <h1 className="text-krutNeon text-3xl md:text-4xl lg:text-7xl 2xl:text-8xl font-bold 2xl:font-extrabold leading-tight">
                        AI Creative Suite{" "}
                        <span className="text-white text-3xl md:text-4xl lg:text-7xl font-bold 2xl:text-8xl 2xl:font-extrabold leading-tight">
                            For Your
                        </span>
                    </h1>
                    <h1 className="text-krutNeon text-3xl md:text-4xl lg:text-7xl 2xl:text-8xl 2xl:font-extrabold font-bold leading-tight">
                        Creative Ideas
                    </h1>
                </div>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 lg:gap-5 lg:mx-16  lg:mt-16 2xl:mt-20 2xl:mx-20 mt-12"> */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 mx-8  lg:mx-16  lg:mt-16 2xl:mt-20 2xl:mx-20 mt-12">
                        {cardData.map((card, index) => (

                            <div className={`col-span-1 ${activeTool === card.title ? "hidden" : ""}  ${index >= 4 ? "hidden sm:block" : ""}`}
                                key={index} >
                                {/* Check if card index is 8 */}

                                <ToolsCard
                                    title={card.title}
                                    description={card.description}
                                    gif={card.gif}
                                    thumbnail={card.thumbnail}
                                    isComingSoon={index === 8} //coming soon test case
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Link to='/mobiletools'>
                    <div className="md:hidden border border-krutNeon mx-16 py-2 text-white text-center rounded-full  mt-10 text-lg font-bold">
                        Explore More
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default ToolsList