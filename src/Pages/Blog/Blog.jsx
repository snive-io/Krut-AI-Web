import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import { IoMdShareAlt } from "react-icons/io";
import { BlogsData } from '../../Data/BlogsData';
import Footer from '../../Components/Footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import "./blog.css"
import { APP_LINK } from '../../utils/links';


const Blog = () => {
    const [blogData, setBlogData] = useState(BlogsData[BlogsData?.length - 1]);
    const [currentURL, setCurrentURL] = useState(window.location.href);
    const location = useLocation();
    const Navigate = useNavigate();

    useEffect(() => {
        // console.log(currentURL)
        if (!window.location.search?.length) return;
        const id = window.location.search.split('=')[1] - 1;
        if (id >= 0 && id < BlogsData?.length) setBlogData(BlogsData[id]);
        setCurrentURL(window.location.href)
    }, [location, currentURL]);


    return (
        <>
            <div className='min-h-screen '>
                <Header />
                <div className='hidden md:block md:min-h-screen  md:mx-28 lg:min-h-screen md:py-4 lg:mx-48 xl:mx-64 lg:py-4 xl:py-10'>
                    <div className='xl:min-h-[10rem] lg:min-h-[7rem] flex flex-col items-center justify-center'>
                        <p className='text-krutNeon font-bold md:text-sm lg:text-xl'>{blogData.genre}</p>
                        {/* md:text-[28px] lg:text-[36px] xl:text-[46px] 2xl:text-[56px]  */}
                        <h1 className='text-white 
                        text-[3.5rem] text-center
                        font-bold mt-2'>{blogData.title}</h1>
                    </div>

                    <div className=' lg:min-h-[25rem]  xl:mt-12 md:py-8 lg:py-10  flex items-center justify-center'>
                        <div className='w-[77%]'>
                            <img className='w-full rounded-xl' src={blogData.titleImg} alt={blogData.title} />
                        </div>
                        <div className='w-[23%] flex flex-col mx-4'>
                            <div className=' border-krutNeon  border border-opacity-30 md:min-h-[3rem] lg:min-h-[4rem] xl:min-h-[6rem] 2xl:min-h-[8rem] md:rounded-xl lg:rounded-3xl flex items-center justify-center'>
                                <div>
                                    <img className='rounded-full md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 2xl:w-24 2xl:h-24  xl:h-16' src={blogData.profilePic} alt={blogData.author} />
                                </div>
                                <div className='text-center text-white md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-lg font-medium mx-2'>
                                    <h1>{blogData.author}</h1>
                                    <p>{blogData.date}</p>
                                </div>
                            </div>
                            <div className='border border-krutNeon border-opacity-30 md:min-h-[6rem] lg:min-h-[8rem] xl:min-h-[12rem] mt-4 md:rounded-xl lg:rounded-3xl flex flex-col justify-center items-center'>
                                <div>
                                    <h1 className='text-white text-center md:text-[10px] lg:text-[10px] xl:text-[16px] 2xl:text-lg'>Share this Article</h1>
                                    <div>
                                        <div className="flex justify-center items-center mt-2">
                                            <div className="flex xl:space-x-6  md:space-x-2">
                                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`} target="_blank">
                                                    <img className='md:h-2 lg:h-4' src="/icons/facebook.png" alt="facebook" />
                                                </a>
                                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}&title=${blogData.title}&summary=${blogData.titleIntro}`} target="_blank">
                                                    <img className='md:h-2 lg:h-4' src="/icons/linkedIn.png" alt="linkedIn" />
                                                </a>
                                                <a href="http://instagram.com" target="_blank">
                                                    <img className='md:h-2 lg:h-4' src="/icons/instagram.png" alt="instagram" />
                                                </a>
                                                <a href="http://x.com" target="_blank">
                                                    <img className='md:h-2 lg:h-4' src="/icons/x.png" alt="x" />
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='text-white text-xs lg:text-sm 2xl:text-xl md:mt-2 lg:mt-4 2xl:mt-5 text-center'>
                                    <h1 className='text-xs md:text-[10px] lg:text-sm'>Get Started For Free</h1>
                                    <a className='rounded-full py-1.5 px-4 mt-2 2xl:mt-3 md:text-xs lg:text-sm text-black font-semibold' style={{ background: 'linear-gradient(180deg, #FFFFFF -225.69%, #01DDE9 35.95%, #37003E 141.48%)' }}
                                        href={APP_LINK}>
                                        Try Krut AI
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 xl:mt-16'>
                        <p className='text-white'>
                            {blogData.titleIntro}
                        </p>
                    </div>


                    <div className='mt-4 xl:mt-16 text-white'>
                        {/* Dynamically render blog content */}
                        <div dangerouslySetInnerHTML={{ __html: blogData.blogContent }} />
                    </div>

                </div>



                {/* ========= Mobile mode ============*/}

                <div className='block md:hidden min-h-screen '>
                    <div className='min-h-[8rem]  flex flex-col justify-center items-center mx-[20px] text-center mt-5'>
                        <h4 className='text-krutNeon font-bold'>{blogData.genre}</h4>
                        <h1 className='text-white font-bold text-[2rem]'>{blogData.title}</h1>
                    </div>
                    <div className='min-h-[5rem] bg-black flex items-center'>
                        <div className='flex mx-[20px] sm:mx-auto'>
                            <div>
                                <img className='rounded-full w-10 h-10 ' src={blogData.profilePic} alt={blogData.author} />
                            </div>
                            <div className='text-center text-white text-[12px]  font-medium mx-2'>
                                <h1>{blogData.author}</h1>
                                <p>{blogData.date}</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-2'>
                        <div className='mx-[20px]'>
                            <img src={blogData.titleImg} alt={blogData.title} className='w-full h-auto rounded-xl' />
                        </div>
                        <div>
                            <p className='text-white my-8 mx-[20px] text-[15px] font-light'>
                                {blogData.titleIntro}
                            </p>
                        </div>
                    </div>

                    <div className='my-2 mx-[20px] text-white'>
                        {/* Dynamically render blog content */}
                        <div dangerouslySetInnerHTML={{ __html: blogData.blogContent }} />
                    </div>

                    <div className='mx-16 min-h-[3.5rem] rounded-[13.5px] my-8 border border-krutNeon border-opacity-50 items-center flex justify-center'>
                        <div className="flex justify-center items-center ">
                            <div className="flex justify-center items-center space-x-4">
                                <IoMdShareAlt className='text-krutNeon text-3xl' />
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`} target="_blank">
                                    <img className='h-6' src="/icons/facebook.png" alt="facebook" />
                                </a>
                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}&title=${blogData.title}&summary=${blogData.titleIntro}`} target="_blank">
                                    <img className='h-6' src="/icons/linkedIn.png" alt="linkedIn" />
                                </a>
                                <a href="http://instagram.com" target="_blank">
                                    <img className='h-6' src="/icons/instagram.png" alt="instagram" />
                                </a>
                                <a href="http://x.com" target="_blank">
                                    <img className='h-6' src="/icons/x.png" alt="x" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </>
    )
}

export default Blog