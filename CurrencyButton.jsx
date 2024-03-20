import React, { useState, useEffect, useCallback } from "react";
import "./index.css";
import { useSelector } from "react-redux";

function CurrencyButton() {
  const [value, setValue] = useState("100");
  const count = useSelector((state) => state.counter.value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  var myHeaders = new Headers();
  myHeaders.append("apikey", "jO1JLElzdKx7vBhoj35ra1jjbRppTWCO");
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
  const [currencies, setCurrencies] = useState([
    {
      id: 0,
      name: "EUR",
      abbrev: "European Euros",
      symbol: " €",
      amount: "",
      icon: <img src="images/euro.jpg" className="h-12 w-25" />,
    },
    {
      id: 1,
      name: "USD",
      abbrev: "US dollar",
      symbol: "	$",
      amount: "",
      icon: <img src="images/us.jpg" className="h-12 w-25" />,
    },
    {
      id: 2,
      name: "INR",
      abbrev: "Indian rupee",
      symbol: "	₹",
      amount: "",
      icon: <img src="images/ind.jpg" className="h-12 w-25" />,
    },
    {
      id: 3,
      name: "CAD",
      abbrev: "Canadian dollar",
      symbol: "	$",
      amount: "",
      icon: <img src="images/can.jpg" className="h-12 w-25" />,
    },
    {
      id: 4,
      name: "GBP",
      abbrev: "Pound sterling",
      symbol: "£",
      amount: "",
      icon: <img src="images/uk.jpg" className="h-12 w-25" />,
    },
    {
      id: 5,
      name: "AUD",
      abbrev: "Australian dollar",
      symbol: "	$",
      amount: "",
      icon: <img src="images/aus.jpg" className="h-12 w-25" />,
    },
    {
      id: 6,
      name: "JPY",
      abbrev: "Japanese Yen",
      symbol: "¥",
      amount: "",
      icon: <img src="images/japan.jpg" className="h-12 w-25" />,
    },
    {
      id: 7,
      name: "KRW",
      abbrev: "South Korean Won",
      symbol: "₩",
      amount: "",
      icon: <img src="images/sk.jpg" className="h-12 w-25" />,
    },
  ]);

  const fetchCurrencies = useCallback(
    (newCurrencies) => {
      const symbols = [...newCurrencies]
        .reduce((symbols, currency, index) => {
          if (index !== 0) {
            symbols.push(currency.name);
          }
          return symbols;
        }, [])
        .join(",");
      console.log("api useEffect");
      fetch(
        `https://api.apilayer.com/exchangerates_data/2023-09-11?symbols=${symbols}&base=${newCurrencies[0].name}`,
        requestOptions
      )
        .then((response) => response.text())
        .then(function (result) {
          // console.log("api response", result);
          const rates = [...newCurrencies];
          for (let i = 1; i < newCurrencies.length; i++) {
            rates[i].amount =
              JSON.parse(result).rates[newCurrencies[i].name] * value;
          }

          // console.log("rates", rates);
          setCurrencies(rates);
        })
        .catch((error) => console.log("error", error));
    },
    [value]
  );
  const swapToIndex0 = useCallback(
    (index) => {
      if (index !== 0) {
        const updatedCurrencies = [...currencies];
        const [movedCurrency] = updatedCurrencies.splice(index, 1);
        updatedCurrencies.unshift(movedCurrency);
        setCurrencies(updatedCurrencies);
        fetchCurrencies(updatedCurrencies);
        // console.log(updatedCurrencies[0].name);
      }
    },
    [currencies, fetchCurrencies]
  );
  useEffect(() => {
    if (value) {
      fetchCurrencies(currencies);
    }
  }, [value]);
  return (
    <div className="">
      {currencies.map((Details, index) => (
        <div key={index} className="mx-2 CurrencyBox">
          <button onClick={() => swapToIndex0(index)} className="py-1 w-full">
            <div className="tradeBox flex ">
              <div className="countryFlag text-black dark:text-white">
                {Details.icon}
              </div>
              <div className="countryStats mx-2">
                <div className="flex-col">
                  <div className="text-start text-black dark:text-white flex">
                    {Details.name} {Details.symbol}
                    <div>
                      <input
                        key={index}
                        value={
                          index === 0
                            ? value || ""
                            : parseFloat(Details.amount).toFixed(count) || ""
                        }
                        onChange={handleChange}
                        className="ValueBox bg-slate-200 dark:bg-veti "
                        readonly={index !== 0}
                      />
                    </div>
                  </div>
                  <div className="text-start Abbrev dark:text-white">
                    {Details.abbrev}
                  </div>
                </div>
              </div>
            </div>
            <hr
              className="w-full hr "
              style={{
                border: "none",
                height: "1px",
                backgroundColor: "#444444",
              }}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
export default CurrencyButton;
