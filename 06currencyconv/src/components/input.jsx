import React, {useId, userId}from 'react'

function input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    CurrencyOptions=[],
    selectedCurrency="usd",
    amountDisabled=false,
    classname="",
}) {
    const id=useId()
  return (
    <div className={`text-4xl text-center textcolour=white ${classname}`}>
        <div classname='w-1-2'>
        <label html="id" classname='text-black/40 mb-2
         inline-block'>{label}</label>
         <input 
         id="id"
         type="number"
         classname='outline-none w-full
          bg-transparent py-1.5'
          placeholder='amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e)=>onAmountChange && onAmountChange
            (Number(e.target.value))
          }
         />
          </div>    
          <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                value={selectedCurrency}
                onChange={(e)=>onCurrencyChange &&
                 onCurrencyChange(e.target.value)}
                 disabled={currencydisable}>
                    {CurrencyOptions.map((currency)=>(<Option key={currency} value={currency}
                    >{currency}</Option>
                    ))}
                </select>
                </div>  
    </div>
  )
}

export default input
