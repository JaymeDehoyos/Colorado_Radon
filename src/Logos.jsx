// import React from "react";
import AARST from "./assets/aarst.png";
import NRPP from "./assets/NRPP.png";

const Logos = () => {
  return (
    <div className="mx-auto items-center">

      <div className="flex gap-8">
        <img className="h-20 w-auto" 
            href="#https://aarst.org"
            src= {AARST}
            alt="AARST"
          />
          <img 
          className="h-20 w-auto" 
          href="#https://nrpp.info"
          src= {NRPP}
          alt="NRPP"
            />
      </div>
    </div>
  )
}


export default Logos;
