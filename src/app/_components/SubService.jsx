'use client'
import React from "react";

const SubService = ({price,amount,service}) => {
  return (
    <div
      style={{ paddingRight: 10,marginBlock:3 }}
      className="sub-service  flex justify-between items-center w-full h-[40px] border-y border-black"
    >
        <h2 className="leading-3 font-semibold text-xl">{price}₹</h2>
        <p className="leading-4 text-xl">{amount} {service} </p>
    </div>
  );
};

export default SubService;
