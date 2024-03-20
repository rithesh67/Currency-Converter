import { useState } from "react";

import CurrencyButton from "./CurrencyButton";
import { useNavigate } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="CurrencyConverter">
        <div className="topBar dark:bg-black"></div>
        <div className="navbarStatus dark:bg-rit">
          <div className="flex">
            <div className="Currency mt-2 mx-2 text-xl text-white">
              Currency
            </div>
            <div className="Symbol">
              <button className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path fill="white" d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                </svg>
              </button>
            </div>
            <div className="Symbol mt-4 mx-1">
              <button onClick={handleOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="white"
                    d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4zm0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402z"
                  />
                </svg>
              </button>
              {open ? (
                <ul className="menu mt-2">
                  <li className="menu-item">
                    <button className="text-xs dark:text-white">Update</button>
                  </li>
                  <li className="menu-item">
                    <button className="text-xs dark:text-white">Help</button>
                  </li>
                  <li className="menu-item">
                    <button
                      className="text-xs dark:text-white"
                      onClick={() => navigate("/settings")}
                    >
                      Settings
                    </button>
                  </li>
                </ul>
              ) : null}
            </div>
            <div className="Symbol mt-3">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 21 21"
                >
                  <g transform="rotate(90 10.5 10.5)">
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6.5 3.5c-2.412 1.378-4 4.024-4 7a8 8 0 0 0 8 8m4-1c2.287-1.408 4-4.118 4-7a8 8 0 0 0-8-8" />
                      <path d="M6.5 7.5v-4h-4m12 10v4h4" />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className=" h-screen bg-slate-200 dark:bg-veti py-3">
          <CurrencyButton />
        </div>
      </div>
    </div>
  );
}

export default App;
