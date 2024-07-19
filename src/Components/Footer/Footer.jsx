import React, { useState } from 'react'
import logo from "../../assets/Images/image_prev_ui (2).png"
import { useNavigate } from 'react-router-dom'
import { subscribeAPI } from '../../utils/APIservice';
import toast from 'react-hot-toast';
import cardData from '../../Data/CardData';
import { APP_LINK } from '../../utils/links';

function Footer() {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");

    // Validation function for email using regex
    function isValidEmail(inputEmail) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(inputEmail);
    }

    //---------------_ Handle User Login ----------------------------------
    async function handleUserSubscribe() {
        setEmail(email.trimEnd());
        const emailCheck = isValidEmail(email);
        if (!email || !emailCheck) {
            return toast.error("Please enter a valid email address");
        }
        toast.promise(
            subscribeAPI({ email }),
            {
                loading: 'Subscribing...',
                success: <b>Subscribed successfully!</b>,
                error: <b>Subscription failed. Please try again later.</b>,
            }
        ).then(() => {
            setTimeout(() => {
                setEmail("");
            }, 2000);
        })
    }

    return (
        <>
            <div className="flex flex-col mt-10">

                <div className="m-5 xl:mx-10">
                    <div className="flex flex-col lg:flex-row justify-center md:justify-between">

                        <div className="m-3 w-[90%] lg:max-w-[40%] xl:max-w-2xl text-white">
                            <h2 className='text-3xl sm:text-5xl font-bold ps-1'>Stay ahead of the <span className='text-krutNeon'>curve</span> with</h2>
                            <img src={logo} onClick={() => Navigate('/')} alt="Krut logo" className='w-[180px] sm:w-[250px] cursor-pointer mt-1' />
                            <div className="ps-2">Subscribe Now !</div>
                            <div className="flex mt-7">
                                <input className='w-[70%] bg-transparent border border-white rounded px-3 py-0.5' type="email" placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className='ms-5 sm:ms-10 border border-white w-8 h-8 rounded-full flex justify-center items-center 
                                hover:bg-white hover:text-black'
                                    onClick={() => handleUserSubscribe()}
                                >
                                    <span className="material-symbols-outlined text-lg">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>


                        </div>

                        <div className=" flex text-white m-5 justify-center xl:space-x-10 xl:px-10">

                            <div className='px-3 sm:px-6'>
                                <h3 className="text-lg sm:text-xl font-semibold  mt-4 mb-2">Company</h3>
                                <ul className='text-sm sm:text-lg font-thin'>
                                    {/* <li className='cursor-pointer'> <a href="https://discord.gg/vf2jJxEVn7" target='_blank'>Community</a></li> */}
                                    <li className='cursor-pointer' onClick={() => Navigate('/blogs')}>Blogs</li>
                                    <li className='cursor-pointer'> <a href="https://krut-ai.notion.site/Krut-AI-MVP-User-Manual-b2d5df9733cd411e99b4e92a68c7c154" target='_blank'>Tutorials</a></li>
                                    <li className='cursor-pointer' onClick={() => Navigate('/pricing')}>Pricing</li>
                                    <li className='cursor-pointer' onClick={() => Navigate('/contact')}>Contact Us</li>
                                    <li className='cursor-pointer' onClick={() => window.location.href = APP_LINK + "login"}>Get Started</li>
                                    {/* <li>Legal</li> */}
                                    {/* <li className='hidden lg:block'>Pricing</li>
                                    <li className='hidden lg:block'>Contact Us</li>
                                    <li className='hidden lg:block'>Legal</li> */}
                                </ul>
                            </div>
                            {/* <div className='px-3 sm:px-6 block lg:hidden'>

                                <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">Company</h3>
                                <ul className='text-sm sm:text-lg font-thin'>
                                    <li>Pricing</li>
                                    <li>Contact Us</li>
                                    <li>Legal</li>
                                </ul>
                            </div> */}
                            <div className='px-3 sm:px-6'>

                                <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">Tools</h3>
                                <ul className='text-sm sm:text-lg font-thin'>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[0]?.link)}>{cardData[0]?.title}</li>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[1]?.link)}>{cardData[1]?.title}</li>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[2]?.link)}>{cardData[2]?.title}</li>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[3]?.link)}>{cardData[3]?.title}</li>
                                </ul>
                            </div>
                            <div className='px-3 sm:px-6'>

                                <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">Tools</h3>
                                <ul className='text-sm sm:text-lg font-thin'>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[4]?.link)}>{cardData[4]?.title}</li>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[5]?.link)}>{cardData[5]?.title}</li>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[6]?.link)}>{cardData[6]?.title}</li>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[7]?.link)}>{cardData[7]?.title}</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* social links */}
                <div className="py-5 w-full">

                    <div className="flex justify-center items-center">
                        <div className="flex flex-wrap justify-center space-x-3 md:space-x-5">
                            <a href="mailto:contact@krut.ai" target="_blank" className='p-1 md:p-0'>
                                <img className='h-8 zoomEffect' src="/icons/mail.png" alt="Krut Mail" />
                            </a>
                            <a href="https://discord.gg/vf2jJxEVn7" target="_blank" className='p-1 md:p-0'>
                                <img className='h-8 zoomEffect' src="/icons/discord.png" alt="Krut Discord" />
                            </a>
                            <a href="https://www.linkedin.com/company/krut-ai/?viewAsMember=true" target="_blank" className='p-1 md:p-0'>
                                <img className='h-8 zoomEffect' src="/icons/linkedIn.png" alt="Krut LinkedIn" />
                            </a>
                            <a href="https://www.instagram.com/_krut.ai/" target="_blank" className='p-1 md:p-0'>
                                <img className='h-8 zoomEffect' src="/icons/instagram.png" alt="Krut Instagram" />
                            </a>
                            <a href="https://twitter.com/krutAI_" target="_blank" className='p-1 md:p-0'>
                                <img className='h-8 zoomEffect' src="/icons/x.png" alt="Krut X" />
                            </a>
                            <a href="https://www.facebook.com/people/Krut-AI/61559205755709/" target="_blank" className='p-1 md:p-0'>
                                <img className='h-8 zoomEffect' src="/icons/facebook.png" alt="Krut Facebook" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCTUjDWEOkvDnLHrqX9VKnKw" target="_blank" className='p-1 md:p-0'>
                                <img className='h-8 zoomEffect' src="/icons/youtube.png" alt="Krut Youtube" />
                            </a>
                        </div>
                    </div>

                    <div className="text-gray-400 mt-8 my-3 items-center justify-center flex">
                        <div className="material-symbols-outlined"> distance </div>
                        <span className='px-1'> Bengaluru, Karnataka, India </span>
                    </div>

                    <div className="text-center text-gray-400 my-3">
                        <p>
                            <a className='cursor-pointer' href='/privacy_policy'>Privacy Policy</a> |
                            <a className='cursor-pointer' href='/terms_and_conditions'> Terms & Conditions</a>
                        </p>
                        <p>@2024 Krut AI</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer