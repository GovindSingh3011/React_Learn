import { useState, useEffect } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [amount, setAmount] = useState(1)
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo).filter((key) => /^[a-z]{3}$/i.test(key));


    const swap = () => {
        // Temporarily store 'from' before swapping
        setFrom((from) => {
            setTo(from); // Set 'to' to the previous 'from' value
            return to; // Set 'from' to the current 'to' value
        });
    };


    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    };

    useEffect(() => {
        convert(); // Automatically convert USD to INR on first render
    }, [currencyInfo]);

    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/1235971/pexels-photo-1235971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}>
            <div className="w-full">
                <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/40">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectedCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-1">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default App
