// import React from "react";
import AARST from "./assets/aarst.png";
import NRPP from "./assets/NRPP.png";

const Logos = () => {
  return (
    <div className="mx-auto mt-10 items-center">
      <div className="flex gap-8">
        <img 
          href="#https://aarst.org"
          className="h-20 w-auto hover:opacity-80 duration-150" 
          src= {AARST}
          alt="AARST"
        />
        <img 
          href="#https://nrpp.info"
          className="h-20 w-auto hover:opacity-80 duration-150" 
          src= {NRPP}
          alt="NRPP"
        />
      </div>
    </div>
  )
}


export default Logos;
