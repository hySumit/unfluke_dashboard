import React from "react";
import { Link } from "react-router-dom";
import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";
import { CgMathEqual } from "react-icons/cg";
import { CgMathDivide } from "react-icons/cg";
import { LiaGreaterThanEqualSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { LiaLessThanEqualSolid } from "react-icons/lia";
import { LiaLessThanSolid } from "react-icons/lia";
import { FaXmark } from "react-icons/fa6";
import Switch from "./Switch";

const Scanner = () => {
  return (
    <div className="bg-[#0f1014] text-white min-h-screen p-5">
      <div className="flex items-center justify-center text-[20px] text-2xl space-x-2 mb-5">
        <Link to="/" className="text-gray-400 hover:text-gray-100">
          Leader Board
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-100">Scanner</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 space-y-6 ">
          <div className="ml-[10px]">
            <label className="block text-gray-400">Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 bg-[#0f1014] text-white border border-gray-600 rounded hover:bg-gray-800 transition-colors duration-300 ease-in-out"
              placeholder="Name"
            />
          </div>
          <div className="ml-[10px]">
            <label className="block text-gray-400">Description</label>
            <input
              type="text"
              className="w-full mt-1 p-2 bg-[#0f1014] text-white border border-gray-600 rounded hover:bg-gray-800 transition-colors duration-300 ease-in-out"
              placeholder="Description"
            />
          </div>
          <div className="border-gray-600 border glass p-2 rounded-[20px] border-1 w-[450px] h-[350px]">
            <div className="mb-5">
              {/* <label className="block text-gray-400">Search</label> */}
              <input
                type="text"
                className="w-full mt-1 p-2 bg-[#0f1014] text-white border border-gray-600 rounde hover:bg-gray-800 transition-colors duration-300 ease-in-out"
                placeholder="Search"
              />
            </div>
            <div className="border border-gray-600  p-2 space-y-2 overflow-auto h-64">
              {[
                "Bollinger Bands (BBANDS upperband)",
                "Bollinger Bands (BBANDS middleband)",
                "Bollinger Bands (BBANDS lowerband)",
                "Exponential Moving Average (EMA)",
                "Parabolic SAR (SAR)",
                "Parabolic SAR (SAR)",
                "Simple Moving Average (SMA)",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0f1014] border border-[#FCD535] rounded p-2 hover:bg-[#0a0800] transition-colors duration-300 ease-in-out "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="drag glass border border-gray-600 relative left-[20px] p-2  overflow-auto h-[190px] ">
            <input type="box" placeholder="Drag Something here!" className="w-full h-[100px] mt-1 p-2 bg-[#0f1014] text-white border border-gray-600 rounded-[10px] hover:bg-gray-800 transition-colors duration-300 ease-in-out text-center " />
            <div className="bottom-1 flex items-center justify-between">

            <div className="result mt-4 ml-2">
              <Switch/>
              <label htmlFor="">Latest Result</label>
            </div>

            <div className="buttons">
            {[
                    "Submit",
                    "Save"
                  ].map((op, index) => (
                    <button
                      key={index}
                      className="p-2 mt-3 w-[70px] rounded bg-[#FCD535] border border-gray-600 text-black m-1 hover:bg-[#ffcc01] transition-colors duration-300 ease-in-out "
                    >
                      {op}
                    </button>
                  ))}
            </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-4">
          <div className="border border-gray-600 w-[710px] glass rounded-[20px] p-4 space-y-4 relative left-[100px] ">
            <h2 className="text-lg font-semibold text-gray-100">Filter</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400">Equity</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 bg-[#0f1014] text-white border border-[#FCD535] rounded hover:bg-[#0a0800] transition-colors duration-300 ease-in-out"
                  placeholder="Equity"
                />
              </div>
              <div>
                <label className="block text-gray-400">Nifty 50</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 bg-[#0f1014] text-white border border-[#FCD535] rounded hover:bg-[#0a0800] transition-colors duration-300 ease-in-out"
                  placeholder="Nifty 50"
                />
              </div>
              <div>
                <label className="block text-gray-400">X</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 bg-[#0f1014] text-white border border-[#FCD535] rounded hover:bg-[#0a0800] transition-colors duration-300 ease-in-out"
                  placeholder="X"
                />
              </div>
              <div>
                <label className="block text-gray-400">Start Time</label>
                <input
                  type="time"
                  className="w-full mt-1 p-2 bg-[#0f1014] text-white border border-[#FCD535] rounded hover:bg-[#0a0800] transition-colors duration-300 ease-in-out"
                  defaultValue="09:30"
                />
              </div>
              <div>
                <label className="block text-gray-400">End Time</label>
                <input
                  type="time"
                  className="w-full mt-1 p-2 bg-[#0f1014] text-white border border-[#FCD535] rounded hover:bg-[#0a0800] transition-colors duration-300 ease-in-out"
                  defaultValue="15:00"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-1 text-gray-400">
                <input
                  type="radio"
                  name="satisfy"
                  className="form-radio bg-gray-600"
                  defaultChecked
                />
                <span>Satisfy</span>
              </label>
              <label className="flex items-center space-x-1 text-gray-400">
                <input
                  type="radio"
                  name="satisfy"
                  className="form-radio bg-gray-600"
                />
                <span>Not Satisfy</span>
              </label>
              <Switch/>
              <label htmlFor="">Duplicate results</label>
              <button className="p-2 bg-[#FCD535] border border-gray-600 text-black rounded hover:bg-[#ffcc01] transition-colors duration-300 ease-in-out">
                Timeframe
              </button>
            </div>
          </div>
          <div className="border border-gray-600 glass2 rounded-[20px] p-4 space-y-4 w-[710px] relative left-[100px] h-[360px]">
            <h2 className="text-lg font-semibold text-gray-100">Operations</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-100">Math Operation</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    <CgMathPlus />,
                    <CgMathMinus />,
                    <FaXmark />,
                    <CgMathDivide />,
                  ].map((op, index) => (
                    <button
                      key={index}
                      className="p-3 rounded bg-[#FCD535] border border-gray-600 text-black m-1 hover:bg-[#ffcc01] transition-colors duration-300 ease-in-out "
                    >
                      {op}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Number", "Stock LTP"].map((item, index) => (
                    <button
                      key={index}
                      className="p-2 m-3 bg-[#FCD535] border border-gray-600 text-black rounded hover:bg-[#ffcc01] transition-colors duration-300 ease-in-out"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-100">
                  Comparison / Cross
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    <LiaGreaterThanSolid />,
                    <LiaLessThanSolid />,
                    <LiaGreaterThanEqualSolid />,
                    <LiaLessThanEqualSolid />,
                  ].map((op, index) => (
                    <button
                      key={index}
                      className="p-3 m-1 bg-[#FCD535] border border-gray-600 text-black rounded hover:bg-[#ffcc01] transition-colors duration-300 ease-in-out"
                    >
                      {op}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cross from above to below",
                    "Cross from below to above",
                  ].map((item, index) => (
                    <button
                      key={index}
                      className="p-2 m-2 bg-[#FCD535] border border-gray-600 text-black rounded hover:bg-[#ffcc01] transition-colors duration-300 ease-in-out"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2 relative top-[-30px]">
                <h3 className="font-semibold text-gray-100">
                  Binary Operation
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["OR", "AND", "SUBTRACT"].map((item, index) => (
                    <button
                      key={index}
                      className="p-2 bg-[#FCD535] border border-gray-600 text-black rounded hover:bg-[#ffcc01] transition-colors duration-300 ease-in-out"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
