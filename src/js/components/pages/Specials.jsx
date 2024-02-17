// import Special from "./assets/Radon_Specials.jpg"
import Coupon from "../../../assets/Radon_Testing.png";
import Footer from "/src/Footer.jsx";

function Specials() {
  return (
    <div>
      <h2 className="text-8xl mt-10 font-bold text-center">$150 Radon Testing</h2>
      <h2 className="text-3xl font-semibold text-center">Call Now! (720) 454-8388</h2>

      <div className="max-w-[1080px] m-auto py-16 px-28 items-center">
      <img 
        className= "flex rounded-xl"
        src={Coupon}
        alt="Radon Specials"
      />
      </div>
      <Footer />
    </div>

  )
}

export default Specials;
