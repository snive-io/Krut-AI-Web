import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Faq from '../../Components/faq/Faq'
import { faqData } from '../../Data/faqData'

function Help() {
    return (
        <>
            <Header />
            <Faq {...faqData} />
            <Footer />
        </>
    )
}

export default Help