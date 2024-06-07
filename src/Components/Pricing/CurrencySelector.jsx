import React from 'react'
import { currencyTable } from '../../assets/currencyDetails'

function CurrencySelector({ currency, setCurrency }) {
    return (
        <div className="px-8 sm:px-4 xl:px-8 2xl:px-16 my-2 md:my-4 lg:mb-10">
            <div className="rounded-3xl border border-krutNeon border-opacity-40 text-white p-5 border-l-8 flex items-center">
                <span className="material-symbols-outlined pe-3 text-krutNeon">  notification_important </span>
                <p>{currency !== "USD" && <span>Actual price may vary based on the exchange rate in place between USD and {currency} at the time of payment processing or invoicing. </span>}Prices inclusive of all taxes, levies and duties.</p>
            </div>

            <div className="w-full flex justify-center xl:justify-end mt-10">
                <select className='rounded-lg py-1.5 px-4 bg-transparent border border-krutNeon text-white' value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {currencyTable.map((item, index) => (
                        <option key={index} value={item.currency}>{item.flag} {item.currency} {item.symbol}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default CurrencySelector