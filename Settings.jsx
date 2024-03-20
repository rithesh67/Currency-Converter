import React from "react";
import { useNavigate } from "react-router-dom";
import FractionalDigits from "./FractionalDigits";
import { useState } from "react";
import Switcher from "./Switcher";
export default function Settings() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="CurrencyConverter">
        <div className="topBar"></div>
        <div className="navbarStatus dark:bg-rit">
          <div className="flex text-Black">
            <div className="Symbol">
              <button className="mt-3 mx-2 " onClick={() => navigate("/")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M244 400L100 256l144-144M120 256h292"
                  />
                </svg>
              </button>
            </div>
            <div className="Currency text-white mt-2 mx-2 text-xl">
              Settings
            </div>
          </div>
        </div>
        <div className=" h-screen dark:bg-veti">
          <div className="">
            <button className="flex py-2">
              <div className="mx-2">
                <Switcher />
              </div>
              <div className="dark:text-white mx-2">Themes</div>
            </button>
            <button className="flex">
              <div className="mx-2">
                <FractionalDigits />
              </div>
              <div className="dark:text-white mx-2">Fractional Digits</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
