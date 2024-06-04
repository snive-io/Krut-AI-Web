import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import "./pricing.css"
import Footer from '../../Components/Footer/Footer'
import GetStarted from '../../Components/GetStarted/GetStarted'
import PriceComparisonTable from '../../Components/Pricing/PriceComparisonTable'
import TalkToUsComponent from '../../Components/Pricing/TalkToUsComponent'
import HeroPricing from '../../Components/Pricing/HeroPricing'
import PricingCards from '../../Components/Pricing/PricingCards'
import { faqData } from '../../Data/faqData'
import Faq from '../../Components/faq/Faq'
import MobileAppAd from '../../Components/Home/MobileAppAd'
import CurrencySelector from '../../Components/Pricing/CurrencySelector'

function Pricing() {
    const [isMonthly, setIsMonthly] = useState(false);  //boolean for monthly or yearly
    const [currency, setCurrency] = useState("INR");  //Set Default currency Indian

    return (
        <>
            <div className='min-h-screen'>
                <Header />
                <HeroPricing isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
                <CurrencySelector currency={currency} setCurrency={setCurrency} />
                <PricingCards isMonthly={isMonthly} isExpanded={true} currency={currency} />
                <TalkToUsComponent />
                <div id='CompareChart' className='scroll-mt-10'></div>
                <PricingCards isMonthly={isMonthly} isExpanded={false} currency={currency} />
                <PriceComparisonTable />
                <Faq {...faqData} />
                <MobileAppAd />
                <GetStarted />
                <Footer />
            </div>
        </>
    )
}

export default Pricing