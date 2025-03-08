"use client";
import React, { useRef, useState } from "react";
import SubService from "./SubService";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Service = ({ name, idx, SubServices = [] , logo }) => {
  const [IsOpened, setIsOpened] = useState(idx == 0);
  const ServiceRef = useRef(null);
  const IndicatorRef = useRef(null);

  const ToggleIsOpened = () => setIsOpened(!IsOpened);

  useGSAP(() => {
    if(IsOpened){
      gsap.to(ServiceRef.current, {
        height:SubServices.length * 50 + 70,
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(IndicatorRef.current, {
        rotate: 180,
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(ServiceRef.current, {
        height:70 ,
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(IndicatorRef.current, {
        rotate: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  },[IsOpened])

  return (
    <div
      ref={ServiceRef}
      onClick={ToggleIsOpened}
      style={{ paddingBlock: 10, marginBlock: 4 }}
      className="service border-y overflow-hidden border-black w-full h-[70px] flex flex-col justify-start items-center  relative"
    >
      <div
        style={{
          paddingInline: 20,
        }}
        className="service-content absolute top-0 left-0 w-full h-[65px] flex justify-between items-center"
      >
        <div className="logo-name h-full w-auto flex justify-evenly items-center gap-3">
          <div  className="logo h-12 aspect-square">
            <img src={logo} alt="logo" className="h-full w-full object-cover" />
          </div>
          <h1 className="text-2xl font-semibold  uppercase">{name}</h1>
        </div>
        <div
          style={{
            clipPath: "polygon(0% 0% , 100% 0% , 50% 100% , 50% 100%)",
          }}
          ref={IndicatorRef}
          className="icon w-4 h-3 relative bg-black"
        ></div>
      </div>
      <div
        style={{ paddingTop: 10, paddingLeft: 75, paddingBottom: 3 }}
        className="service-data absolute left-0 top-[60px] flex flex-col justify-start items-end w-full h-auto"
      >
        {SubServices.map((subService, index) => (
          <SubService key={index} {...subService} />
        ))}
      </div>
    </div>
  );
};

export default Service;
