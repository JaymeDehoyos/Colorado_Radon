
import { Link } from "react-router-dom";
import Footer from "../../../Footer";
import Coupon from "../../../assets/Coupon.png";
 
function Specials() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#f7fbff] to-white pt-16 md:pt-20 pb-4 text-center px-5">
        <span className="inline-flex items-center gap-2 bg-[#e2f1f0] text-[#0b7f7a] font-bold text-[12.5px] tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full mb-4">
          Limited-Time Offer
        </span>
        <h1 className="font-head font-extrabold text-[42px] md:text-[64px] tracking-tight">
          <span className="text-brandblue">$150</span> Radon Testing
        </h1>
        <p className="mt-4 text-[18px] text-muted max-w-[560px] mx-auto">
          Flat-rate, certified radon testing across the Front Range.
        </p>
      </section>
 
      {/* COUPON */}
      <section className="max-w-[900px] mx-auto py-14 md:py-16 px-5">
        <div className="bg-white border border-hairline rounded-[22px] p-4 md:p-6 shadow-[0_24px_50px_rgba(15,52,87,0.12)]">
          <img src={Coupon} alt="$150 Radon Testing Special" className="w-full rounded-[14px]" />
        </div>
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brandblue hover:bg-brandblued text-white font-head font-bold text-[16px] rounded-[10px] px-7 py-3.5 transition-colors shadow-[0_8px_20px_rgba(28,111,176,0.28)]"
          >
            Claim This Offer →
          </Link>
          <p className="mt-4 text-muted">
            Or call / text <a href="tel:7204548388" className="text-brandblue font-semibold">(720) 454-8388</a>
          </p>
        </div>
      </section>
 
      <Footer />
    </div>
  );
}
 
export default Specials;

