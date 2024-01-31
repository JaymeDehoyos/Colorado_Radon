import Navbar from "/src/Navbar.jsx";
// import Special from "./assets/Radon_Specials.jpg"
import SpecialsR from "./assets/Denver_Radon.png"
import Footer from "/src/Footer.jsx";

function Specials() {
  return (

    <div>
      <Navbar />
      <div className="max-w-[640px] m-auto py-16 px-28 items-center">
      <img 
              className= "flex rounded-xl"
              src= {SpecialsR}
              alt="Radon Specials"
            />

      </div>
      <Footer />
    </div>

  )
}

export default Specials;
