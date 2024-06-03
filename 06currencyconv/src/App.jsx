import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { input } from './components/index.js';
import usecurrencyInfo from './hooks/usecurrencyinfo.js';


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setconvertedAmount] = useState(0)
  
  const currencyInfo=usecurrencyInfo(from)
  const options=Object.keys(usecurrencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }



  return (
    
      <div
        className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url('https://images.ctfassets.net/cnu0m8re1exe/1xpZ1c7gdtd3W8JiTtBFQC/b2a5fa7f1a81c644e57f715788aa74a8/shutterstock_606386231.jpg')`,
        }}
      >
        <h1>hello currency counter</h1>
        <div className="w-full max-w-md mx-auto 
        border border-gray-60 rounded-lg p-5 
        backdrop-blur-sm bg-white/30">
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'><input 
            label="from" 
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setFrom(currency)}
            onAmountChange={(amount)=>setAmount(amount)}
            selectedCurrency={from}
            />
          
            </div>
            <div className='w-full mb-05'>
              <button
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
              border-2 border-white rounded-md bg-blue-600 
              text-white px-2 py-0.5"
              onClick={swap}>swap</button>
            </div>
            <div className="w-full mt-1 mb-4">
                        <input
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full 
                    bg-blue-600 text-white px-4 py-3 
                    rounded-lg">
                    {/* Convert {from.toUpperCase()} to {to.toUpperCase()} */}
                    </button>
          </form>
        </div>
      </div>
    
  );
}

export default App;
