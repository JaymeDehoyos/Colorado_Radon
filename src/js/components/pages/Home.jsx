import { Link } from "react-router-dom";
import Footer from "../../../Footer";
import HeroImg from "../../../assets/colorado_homes2.jpg";
import NRPP from "../../../assets/NRPP.png";
import AARST from "../../../assets/aarst.png";

// TODO: paste your Google Business reviews link here so the review buttons point to it.
const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=colorado+radon+testing";

// Real client reviews. Add more objects here as they come in.
const reviews = [
  {
    name: "Z Hamilton",
    initial: "Z",
    text:
      "Jared is a highly skilled craftsman. He did a wonderful job and is very prompt, kind, and has a great sense of humor. We're thrilled with the quality of work.",
  },
];

function GoogleG({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" style={{ flex: "none" }} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

const Check = () => (
  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-[#e2f1f0] text-[#0b7f7a] text-[11px] font-extrabold">
    &#10003;
  </span>
);

const steps = [
  { n: 1, title: "Prep your home", body: "Keep exterior windows and doors closed for 12 hours before testing (and swamp coolers off).", color: "bg-navy" },
  { n: 2, title: "We test for 48 hours", body: "We place a professional radon monitor and let it measure the air in your home over two days.", color: "bg-brandblue" },
  { n: 3, title: "Get your results", body: "You receive your radon results within hours of the monitor being picked up. It's that fast.", color: "bg-teal" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#f7fbff] to-white py-16 md:py-[70px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-7 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#e2f1f0] text-[#0b7f7a] font-bold text-[12.5px] tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full">
              NRPP-Certified Radon Testing
            </span>
            <h1 className="font-head font-extrabold text-[40px] md:text-[52px] tracking-tight my-5 leading-[1.1]">
              Breathe easier in your <span className="text-brandblue">Colorado</span> home.
            </h1>
            <p className="text-[18px] md:text-[18.5px] max-w-[520px] mb-7">
              Fast, certified radon testing for homeowners, buyers, and sellers across the Front
              Range &mdash; with clear results in hours, not days.
            </p>
            <div className="flex flex-wrap gap-3.5 mb-7">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brandblue hover:bg-brandblued text-white font-head font-bold text-[15px] rounded-[10px] px-5 py-3 transition-colors shadow-[0_8px_20px_rgba(28,111,176,0.28)]">
                Schedule a Test &rarr;
              </Link>
              <a href="tel:7204548388" className="inline-flex items-center gap-2 bg-white text-ink border-[1.5px] border-hairline hover:border-brandblue hover:text-brandblue font-head font-bold text-[15px] rounded-[10px] px-5 py-3 transition-colors">
                Call (720) 454-8388
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14.5px] text-muted font-medium">
              <span className="inline-flex items-center gap-2"><Check /> EPA protocols</span>
              <span className="inline-flex items-center gap-2"><Check /> 25+ years experience</span>
              <span className="inline-flex items-center gap-2"><Check /> Results in hours</span>
            </div>
          </div>

          <div className="relative">
            <img src={HeroImg} alt="Colorado homes" className="w-full rounded-[20px] shadow-[0_30px_60px_rgba(15,52,87,0.18)] object-cover aspect-[4/4.3]" />
            <div className="absolute left-[-14px] md:left-[-22px] bottom-7 bg-white border border-hairline rounded-2xl px-5 py-4 shadow-[0_18px_40px_rgba(15,52,87,0.16)]">
              <div className="font-head font-extrabold text-[26px] text-ink">$150</div>
              <div className="text-[13px] text-muted font-semibold">flat-rate testing</div>
            </div>
            <div className="absolute right-[-10px] md:right-[-18px] top-6 bg-white border border-hairline rounded-2xl px-5 py-4 shadow-[0_18px_40px_rgba(15,52,87,0.16)]">
              <div className="font-head font-extrabold text-[26px] text-teal">Hours</div>
              <div className="text-[13px] text-muted font-semibold">to your results</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="border-y border-hairline bg-[#fbfdff]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-7 flex flex-wrap items-center justify-center gap-x-11 gap-y-4 py-6">
          <img src={NRPP} alt="NRPP certified" className="h-10 opacity-90" />
          <img src={AARST} alt="AARST member" className="h-10 opacity-90" />
          <span className="font-bold text-navy text-[15px] flex items-center gap-2"><Check /> EPA Protocols</span>
          <span className="font-bold text-navy text-[15px] flex items-center gap-2"><Check /> Licensed in Colorado</span>
        </div>
      </div>

      {/* WHY US */}
      <section className="py-16 md:py-[76px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-7">
          <div className="text-center max-w-[660px] mx-auto mb-12">
            <span className="inline-flex items-center gap-2 bg-[#e2f1f0] text-[#0b7f7a] font-bold text-[12.5px] tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full mb-3.5">Why Choose Us</span>
            <h2 className="font-head font-extrabold text-[30px] md:text-[36px] tracking-tight mb-3">Local, independent &amp; experienced</h2>
            <p className="text-[17px]">An independent radon tester you can trust &mdash; not a sales pipeline.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-hairline rounded-[18px] p-8">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-[#e7f0f8] text-brandblue grid place-items-center text-[24px] mb-4">&#127968;</div>
              <h3 className="font-head font-bold text-[22px] mb-2.5">Independent radon testing</h3>
              <p className="text-[15.5px]">We're an independent radon tester with over 25 years of combined commercial and residential construction, inspection, and testing experience. Because we don't sell mitigation systems, our results are unbiased.</p>
            </div>
            <div className="bg-white border border-hairline rounded-[18px] p-8">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-[#e7f0f8] text-brandblue grid place-items-center text-[24px] mb-4">&#128269;</div>
              <h3 className="font-head font-bold text-[22px] mb-2.5">Need a home inspection?</h3>
              <p className="text-[15.5px]">We partner with trusted local pros for full home inspections. Ask us, or visit{" "}
                <a href="https://www.affinityhomeinspections.com" target="_blank" rel="noreferrer" className="text-brandblue font-semibold hover:underline">Affinity Home Inspection &rarr;</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-[76px] bg-soft">
        <div className="max-w-[1180px] mx-auto px-5 md:px-7">
          <div className="text-center max-w-[660px] mx-auto mb-12">
            <span className="inline-flex items-center gap-2 bg-[#e2f1f0] text-[#0b7f7a] font-bold text-[12.5px] tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full mb-3.5">Simple Process</span>
            <h2 className="font-head font-extrabold text-[30px] md:text-[36px] tracking-tight mb-3">Testing for radon is simple</h2>
            <p className="text-[17px]">Three easy steps from booking to peace of mind.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="bg-white border border-hairline rounded-[18px] p-7 hover:shadow-[0_20px_40px_rgba(15,52,87,0.09)] hover:-translate-y-1 transition-all">
                <div className={`w-[46px] h-[46px] rounded-[13px] ${s.color} text-white font-head font-extrabold text-[20px] grid place-items-center mb-4`}>{s.n}</div>
                <h3 className="font-head font-bold text-[20px] mb-2">{s.title}</h3>
                <p className="text-[15px]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="py-16 md:py-[76px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-7">
          <div className="text-center max-w-[660px] mx-auto mb-12">
            <span className="inline-flex items-center gap-2 bg-[#e2f1f0] text-[#0b7f7a] font-bold text-[12.5px] tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full mb-3.5">Reviews</span>
            <h2 className="font-head font-extrabold text-[30px] md:text-[36px] tracking-tight mb-3">Trusted by Colorado homeowners</h2>
            <p className="text-[17px]">See what our clients say &mdash; straight from Google.</p>
          </div>
          <div className="grid md:grid-cols-[0.9fr_1.3fr] gap-6 items-stretch">
            {/* Summary card */}
            <div className="bg-white border border-hairline rounded-[20px] p-8 text-center flex flex-col justify-center shadow-[0_16px_40px_rgba(15,52,87,0.06)]">
              <div className="flex items-center justify-center gap-2.5 font-head font-bold text-ink text-[18px] mb-3.5">
                <GoogleG size={24} /> Google Reviews
              </div>
              <div className="font-head font-extrabold text-[54px] text-ink leading-none">5.0</div>
              <div className="text-[#fbbc05] text-[24px] tracking-[3px] my-2">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <div className="text-muted text-[14.5px] mb-5">Rated 5.0 by our clients</div>
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-brandblue hover:bg-brandblued text-white font-head font-bold text-[15px] rounded-[10px] px-5 py-3 transition-colors">
                Read all reviews on Google &rarr;
              </a>
            </div>
            {/* Review cards */}
            <div className="flex flex-col gap-4">
              {reviews.map((r) => (
                <div key={r.name} className="bg-white border border-hairline rounded-[18px] p-6 shadow-[0_10px_26px_rgba(15,52,87,0.05)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-brandblue text-white grid place-items-center font-head font-extrabold text-[18px]">{r.initial}</div>
                    <div>
                      <div className="font-head font-bold text-ink text-[16px]">{r.name}</div>
                      <div className="text-[12.5px] text-muted flex items-center gap-1.5"><GoogleG size={14} /> Posted on Google</div>
                    </div>
                    <div className="ml-auto text-[#fbbc05] text-[15px] tracking-[2px]">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  </div>
                  <p className="text-[15px]">&ldquo;{r.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div className="bg-navy text-white">
        <div className="max-w-[1180px] mx-auto px-5 md:px-7 py-12 flex flex-wrap justify-between items-center gap-6">
          <div>
            <h2 className="text-white font-head font-extrabold text-[26px] md:text-[30px] tracking-tight">Keep your home safe today</h2>
            <p className="text-[#bcd3e6] mt-1.5">Radon is the leading cause of lung cancer among non-smokers. Know your levels.</p>
          </div>
          <div className="text-left md:text-right">
            <a href="tel:7204548388" className="font-head font-extrabold text-[26px] text-white block hover:text-teal transition-colors">(720) 454-8388</a>
            <Link to="/contact" className="inline-flex mt-2.5 bg-white text-navy font-head font-bold text-[15px] rounded-[10px] px-5 py-3 hover:bg-[#eaf2f9] transition-colors">Schedule a Test</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;

