import React from "react";
import CustomDrawer from "./Drawer";
import { Link } from "react-router-dom";

let data = [
  {
    rank: 1,
    name: "Selling with re entr",
    c_ratio: 3.96,
    over_all_profit: 381845,
    avg: 319.54,
    win: 0.65,
    price: null,
    action: "View",
  },
  {
    rank: 2,
    name: "strategy_name",
    c_ratio: 3.62,
    over_all_profit: 268872.5,
    avg: 216.31,
    win: 0.64,
    price: 500,
    action: "Buy",
  },
  {
    rank: 3,
    name: "Based on premium and",
    c_ratio: 3.42,
    over_all_profit: 255425,
    avg: 208.51,
    win: 0.64,
    price: null,
    action: "View",
  },
  {
    rank: 4,
    name: "strategy_name",
    c_ratio: 3.22,
    over_all_profit: 381845,
    avg: 319.54,
    win: 0.65,
    price: null,
    action: "View",
  },
  {
    rank: 5,
    name: "strategy_name",
    c_ratio: 3.22,
    over_all_profit: 381845,
    avg: 319.54,
    win: 0.65,
    price: null,
    action: "View",
  },
  {
    rank: 6,
    name: "Based on premium wit",
    c_ratio: 3.01,
    over_all_profit: 135980,
    avg: 185.77,
    win: 0.49,
    price: null,
    action: "View",
  },
  {
    rank: 7,
    name: "strategy_name",
    c_ratio: 2.76,
    over_all_profit: 267867.5,
    avg: 218.49,
    win: 0.6,
    price: null,
    action: "View",
  },
  {
    rank: 8,
    name: "Wait and trade_Save",
    c_ratio: 2.62,
    over_all_profit: 178252.5,
    avg: 161.9,
    win: 0.63,
    price: null,
    action: "View",
  },
  {
    rank: 9,
    name: "iron condor",
    c_ratio: 2.44,
    over_all_profit: 176420,
    avg: 137.51,
    win: 0.65,
    price: null,
    action: "View",
  },
  {
    rank: 10,
    name: "strategy_name",
    c_ratio: 2.04,
    over_all_profit: 244555,
    avg: 198.66,
    win: 0.62,
    price: null,
    action: "View",
  },
];

export const LeaderBoard = () => {
    const maxProfit = Math.max(...data.map(item => item.over_all_profit));
    
    return (
      <div className="bg-[#0f1014] text-white">

      <div className="flex items-center justify-center text-[20px] text-2xl space-x-2 mb-5 pt-5">
        <Link to="/" className="text-gray-100">
          Leader Board
        </Link>
        <span className="text-gray-400">/</span>
        <Link to="/scanner" className="text-gray-400 hover:text-gray-100">Scanner</Link>
      </div>

        <section className="bottom mt-5">
          <div className="box ">
            <table className="w-full h-[700px]">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-[#BABCAC]">Rank</th>
                  <th className="px-4 py-2 text-left text-[#BABCAC]">Name</th>
                  <th className="px-4 py-2 text-left text-[#BABCAC]">Calmar Ratio</th>
                  <th className="px-4 py-2 text-left text-[#BABCAC]">Overall Profit</th>
                  <th className="px-4 py-2 text-left text-[#BABCAC]">Avg. Daily Profit</th>
                  <th className="px-4 py-2 text-left text-[#BABCAC]">Win % (Day)</th>
                  <th className="px-4 py-2 text-left text-[#BABCAC]">Price (₹)</th>
                  <th className="px-4 py-2 text-left text-[#BABCAC]">Action</th>

                  {/* <th className="px-4 py-2 text-left text-[#BABCAC] border-b border-yellow-500">Rank</th>
                <th className="px-4 py-2 text-left text-[#BABCAC] border-b border-yellow-500">Name</th>
                <th className="px-4 py-2 text-left text-[#BABCAC] border-b border-yellow-500">Calmar Ratio</th>
                <th className="px-4 py-2 text-left text-[#BABCAC] border-b border-yellow-500">Overall Profit</th>
                <th className="px-4 py-2 text-left text-[#BABCAC] border-b border-yellow-500">Avg. Daily Profit</th>
                <th className="px-4 py-2 text-left text-[#BABCAC] border-b border-yellow-500">Win % (Day)</th>
                <th className="px-4 py-2 text-left text-[#BABCAC] border-b border-yellow-500">Price (₹)</th>
                <th className="px-4 py-2 text-left text-[#BABCAC] border-b border-yellow-500">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-700 transition-colors duration-300 ease-in-out glass2">
                    <td className="px-4 py-2 text-left">{row.rank}</td>
                    <td className="px-4 py-2 text-left">{row.name}</td>
                    <td className="px-4 py-2 text-left">{row.c_ratio}</td>
                    <td className={`px-4 py-2 text-left ${row.over_all_profit >= 200000 || row.over_all_profit === maxProfit ? 'text-green-500' : ''}`}>{row.over_all_profit}</td>

                    <td className={`px-4 py-2 text-left ${row.avg >= 300 || row.avg === maxProfit ? 'text-green-500' : ''}`}>{row.avg}</td>
                    <td className="px-4 py-2 text-left text-green-500">{row.win}</td>
                    <td className="px-4 py-2 text-left">{row.price !== null ? <span> {row.price}</span> : "N/A"}</td>
                    <td className="px-4 py-2 text-left">
                    <button className={`p-[5px] w-[60px] rounded-sm ${row.action === 'Buy' ? 'bg-green-500' : 'bg-[#FCD535] text-black'}`}>{row.action}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  };
  
  export default LeaderBoard;
