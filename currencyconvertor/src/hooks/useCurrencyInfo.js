import { useState, useEffect } from 'react'

function useCurrencyInfo(currency) {
  const [info, setInfo] = useState({})

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json()) //this fetch selected currency and convert into json
      .then((res) => setInfo(res[currency]))
  }, [currency])

  return info
}

export default useCurrencyInfo
