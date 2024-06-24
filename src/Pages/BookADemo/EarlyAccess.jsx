import React, { useState } from 'react';
import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer';
import Faq from '../../Components/faq/Faq';
import { faqData } from '../../Data/faqData';
import toast from 'react-hot-toast';
import { bookDemoAPI } from '../../utils/APIservice';
import { CountryCodes } from '../../Data/CountryCodes';

const EarlyAccess = () => {
    // State for input fields
    const [reference, setReference] = useState("");
    const [otherProfession, setOtherProfession] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        countryCodeIndex: '102', //India index in json
        phoneNumber: '',
        profession: '',
        referredBy: '',
    });

    // Handler for input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    // Validation function for email using regex
    function isValidEmail(inputEmail) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(inputEmail);
    }

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData?.email?.trimEnd()?.length || !formData?.firstName?.trimEnd()?.length || !formData?.lastName?.trimEnd()?.length || !formData?.phoneNumber?.trimEnd()?.length || !formData?.referredBy?.trimEnd()?.length || !formData?.profession?.trimEnd()?.length) {
            return toast.error("Please enter all fields");
        }

        const emailCheck = isValidEmail(formData?.email?.trimEnd());
        if (!emailCheck) return toast.error("Please enter a valid email address");

        if (formData.referredBy === "Others") {
            if (!reference?.trimEnd()?.length) return toast.error("Please enter reference details");
        }

        if (formData.profession === "Others") {
            if (!otherProfession?.trimEnd()?.length) return toast.error("Please enter your profession details");
        }

        if (!isAgreed) return toast.error("Please read and accept the privacy policy to continue");

        toast.loading('Sending Request...'); // Display loading indicator

        const response = await bookDemoAPI(
            {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phoneNumber: CountryCodes[formData.countryCodeIndex].code + formData.phoneNumber,
                profession: formData.profession === "Others" ? otherProfession : formData.profession,
                referredBy: formData.referredBy === "Others" ? reference : formData.referredBy,
            }
        )
        if (response) {
            toast.dismiss(); // Dismiss loading indicator
            toast.success(response?.message);
            // Reset form
            setTimeout(() => {
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    countryCodeIndex: '102', //India index in json
                    phoneNumber: '',
                    profession: '',
                    referredBy: '',
                })
            }, 2000);
        }
    };

    const formBackground = {
        backgroundColor: 'black',
        backgroundImage: `url("/images/Green_shade.webp")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit} >
                <div className='flex justify-center' style={formBackground}>
                    {/* Form */}
                    <div className='bg-white rounded-2xl flex-row items-center min-h-[25rem] w-[90%] lg:w-[50%] mx-3 lg:my-5 p-10 pb-10'>
                        <div>
                            <h1 className='text-3xl lg:text-5xl 2xl:text-7xl font-black mx-2 pt-4 lg:pt-1 lg:mt-6 2xl:mt-7 lg:text-center'>Early Access</h1>
                            <p className='mx-2 lg:mx-3 font-bold text-sm 2xl:text-lg 2xl:mt-10 mt-4 text-gray-600 lg:text-center'>Get ready to experience the future</p>
                        </div>
                        <div className='min-h-[16rem] 2xl:min-h-[25rem] mx-2 my-8 2xl:my-12'>
                            <div className='flex justify-between'>
                                <div className='h-14 2xl:h-16 flex flex-col w-[47%]'>
                                    <label htmlFor="firstName" className='text-xs 2xl:text-sm font-medium'>First Name</label>
                                    <input id='firstName' name='firstName' value={formData.firstName} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='First Name' />
                                </div>
                                <div className='h-14 2xl:h-16 flex flex-col w-[47%]'>
                                    <label htmlFor="lastName" className='text-xs 2xl:text-sm font-medium'>Last Name</label>
                                    <input id='lastName' name='lastName' value={formData.lastName} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Last Name' />
                                </div>
                            </div>
                            <div className='my-3 2xl:my-6'>
                                <div className='mb-2 2xl:mb-5 h-14 2xl:h-16 flex flex-col w-full'>
                                    <label htmlFor="email" className='text-xs 2xl:text-sm font-medium'>Email</label>
                                    <input id='email' name='email' value={formData.email} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Email' />
                                </div>


                                <div className='flex justify-between mb-2 2xl:mb-5'>
                                    <div className='h-14 2xl:h-16 flex flex-col w-[15%]'>
                                        <label htmlFor="countryCodeIndex" className='text-xs 2xl:text-sm font-medium'>Code</label>
                                        <select id='countryCodeIndex' name='countryCodeIndex' value={formData.countryCodeIndex} aria-valuenow={formData.countryCodeIndex} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text">
                                            {CountryCodes.map((item, index) => (
                                                <option key={index} value={index}> {item.name} ({item.code})</option>
                                            ))}
                                        </select>

                                    </div>
                                    <div className='h-14 2xl:h-16 flex flex-col w-[80%]'>
                                        <label htmlFor="phoneNumber" className='text-xs 2xl:text-sm font-medium'>Phone Number</label>
                                        <input id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="tel" placeholder='Phone number' />
                                    </div>
                                </div>

                                {/* <div className='mb-2 2xl:mb-5 h-14 2xl:h-16 flex flex-col w-full'>
                                    <label htmlFor="phoneNumber" className='text-xs 2xl:text-sm font-medium'>Phone number</label>
                                    <input id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="tel" placeholder='Phone number' />
                                </div> */}

                                {/* <div className='mb-2 2xl:mb-5 2xl:h-16 flex flex-col w-full'>
                                        <label htmlFor="message" className='text-xs 2xl:text-sm font-medium'>Message</label>
                                        <input id='message' name='message' value={formData.message} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Message' />
                                    </div> */}

                                <div className='mb-2 2xl:mb-5 2xl:h-16 flex flex-col w-full'>
                                    <label htmlFor="profession" className='text-xs 2xl:text-sm font-medium'>Are you ?</label>
                                    <select id='profession' name='profession' value={formData.profession} aria-valuenow={formData.profession} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text">
                                        <option value="">Select</option>
                                        <option value="Creator">Creator</option>
                                        <option value="SMB">Small And Midsize Business</option>
                                        <option value="E-Commerce">E-Commerce</option>
                                        <option value="Marketing Agency">Marketing Agency</option>
                                        <option value="Influencer Agency">Influencer Agency</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                {formData.profession === "Others" &&
                                    <div className='mb-2 2xl:mb-5 2xl:h-16 flex flex-col w-full'>
                                        <label htmlFor="profession2" className='text-xs 2xl:text-sm font-medium'>Others, Please Specify</label>
                                        <input id='profession2' name='profession2' value={otherProfession} onChange={(e) => setOtherProfession(e.target.value)} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Profession' />
                                    </div>
                                }

                                <div className='mb-2 2xl:mb-5 2xl:h-16 flex flex-col w-full'>
                                    <label htmlFor="referredBy" className='text-xs 2xl:text-sm font-medium'>How did you hear about us?</label>
                                    <select id='referredBy' name='referredBy' value={formData.referredBy} aria-valuenow={formData.referredBy} onChange={handleInputChange} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Facebook, instagram, twitter'>
                                        <option value="">Select</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="Discord">Discord</option>
                                        <option value="Twitter">Twitter</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="Youtube">Youtube</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                {formData.referredBy === "Others" &&
                                    <div className='mb-2 2xl:mb-5 2xl:h-16 flex flex-col w-full'>
                                        <label htmlFor="reference2" className='text-xs 2xl:text-sm font-medium'>Others, Please Specify</label>
                                        <input id='reference2' name='reference2' value={reference} onChange={(e) => setReference(e.target.value)} className='px-2 2xl:placeholder:text-sm border border-gray-400 rounded h-9 2xl:h-16' type="text" placeholder='Referred By' />
                                    </div>
                                }

                                <div className='mb-2 2xl:mb-5 flex items-start md:items-center w-[92%] space-x-3'>
                                    <input id='privacyAgreement' name='privacyAgreement' value={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)} className='px-2 border border-gray-400 rounded' type="checkbox" />
                                    <p className='text-xs 2xl:text-sm font-medium'>I have read and agree to the
                                        <a className='px-1.5 underline underline-offset-4 decoration-1' href='/terms_and_conditions'>Terms and Conditions</a>
                                        and accept the
                                        <a className='px-1.5 underline underline-offset-4 decoration-1' href='/privacy_policy'>Privacy Policy</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center '>
                            <button type='submit' className='mx-2 bg-black rounded-full text-white text-center w-[75%] py-3 2xl:py-4 text-lg 2xl:text-2xl font-medium'>
                                Get Early Access
                            </button>
                        </div>
                    </div>

                </div>
            </form>

            <Faq {...faqData} />
            <Footer />
        </div>


    );
}

export default EarlyAccess;
