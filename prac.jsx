import React from "react";
import { useState } from "react";
const currencies = [
  {
    id: 0,
    name: "EUR",
    abbrev: "Euros",
    amount: "€{value}",
    icon: <img src="images/euro.jpg" className="h-12 w-25" />,
  },
  {
    id: 1,
    name: "USD",
    abbrev: "US dollar",
    amount: "${ value }",
    icon: <img src="images/us.jpg" className="h-12 w-25" />,
  },
  {
    id: 2,
    name: "INR",
    abbrev: "Indian rupee",
    amount: "₹{ value }",
    icon: <img src="images/ind.jpg" className="h-12 w-25" />,
  },
  {
    id: 3,
    name: "CAD",
    abbrev: "Canadian dollar",
    amount: "${ value }",
    icon: <img src="images/can.jpg" className="h-12 w-25" />,
  },
  {
    id: 4,
    name: "GBP",
    abbrev: "Pound sterling",
    amount: "£{ value }",
    icon: <img src="images/uk.jpg" className="h-12 w-25" />,
  },
  {
    id: 5,
    name: "AUD",
    abbrev: "Australian dollar",
    amount: "${ value }",
    icon: <img src="images/aus.jpg" className="h-12 w-25" />,
  },
  {
    id: 6,
    name: "JPY",
    abbrev: "Japanese Yen",
    amount: "	¥{ value }",
    icon: <img src="images/japan.jpg" className="h-12 w-25" />,
  },
  {
    id: 7,
    name: "KRW",
    abbrev: "South Korean Won",
    amount: "₩{ value }",
    icon: <img src="images/sk.jpg" className="h-12 w-25" />,
  },
];
function CurrencyButton() {
  const [currencyList, setCurrencyList] = useState(currencies);

  const moveToTop = (id) => {
    const updatedList = [...currencyList];
    const clickedIndex = updatedList.findIndex(
      (currency) => currency.id === id
    );

    if (clickedIndex !== -1) {
      const clickedCurrency = updatedList.splice(clickedIndex, 1)[0];
      updatedList.unshift(clickedCurrency);
      setCurrencyList(updatedList);
    }
  };
  return (
    <div className="mt-2">
      {currencyList.map((Details) => (
        <button key={Details.id} onClick={() => moveToTop(Details.id)}>
          <div className="tradeBox flex">
            <div className="countryFlag text-white">{Details.icon}</div>
            <div className="countryStats mx-2">
              <div className="flex-col">
                <div className="text-start text-white">
                  {Details.name} {Details.amount}
                </div>
                <div className="text-start Abbrev">{Details.abbrev}</div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
export default CurrencyButton;
