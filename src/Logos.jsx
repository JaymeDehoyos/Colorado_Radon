// import React from "react";
import NRPP from "./assets/NRPP.png";

const Logos = () => {
  return (
    <div className="mx-auto mt-10 items-center">
      <div className="flex gap-8">
        <a href="https://nrpp.info">
        <img 
          className="h-20 w-auto hover:opacity-80 duration-150" 
          src= {NRPP}
          alt="NRPP"
        />
        </a>
      </div>
    </div>
  )
}


export default Logos;
