import { Link } from "react-router-dom";
import Footer from "../../../Footer";
import RadonDiagram from "../../../assets/radon_home.jpg";

const facts = [
  { strong: false, text: "Radon is a radioactive gas that forms naturally when uranium, thorium, and radium break down in rocks, soil, and groundwater." },
  { strong: false, text: "Exposure happens primarily by breathing radon that enters homes through cracks and gaps in foundations." },
  { strong: true, text: "Radon has no smell, taste, or color." },
  { strong: false, text: "Testing for radon is the only way to know the level in your home." },
  { strong: true, text: "Radon is the leading cause of lung cancer among non-smokers in the United States." },
  { strong: false, text: "EPA guidelines recommend mitigation when levels exceed 4.0 pCi/L." },
  { strong: false, text: "We do not install mitigation systems, but we can help guide you to trusted mitigation professionals if elevated levels are found." },
];

function About() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#f7fbff] to-white pt-16 md:pt-20 pb-4 text-center px-5">
        <span className="inline-flex items-center gap-2 bg-[#e2f1f0] text-[#0b7f7a] font-bold text-[12.5px] tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full mb-4">
          Radon Education
        </span>
        <h1 className="font-head font-extrabold text-[38px] md:text-[52px] tracking-tight">What is Radon?</h1>
        <p className="mt-4 text-[18px] text-muted max-w-[560px] mx-auto">
          Learn why radon testing is important for your home and family.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1180px] mx-auto py-14 md:py-16 px-5 md:px-7 grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex items-center justify-center">
          <a href="https://www.epa.gov/radon" target="_blank" rel="noreferrer">
            <img
              src={RadonDiagram}
              alt="How radon enters a home"
              className="rounded-[20px] w-full shadow-[0_24px_50px_rgba(15,52,87,0.14)] hover:opacity-95 transition"
            />
          </a>
        </div>

        <div className="bg-white border border-hairline rounded-[20px] p-8 md:p-10 shadow-[0_16px_40px_rgba(15,52,87,0.06)]">
          <h2 className="font-head font-extrabold text-[28px] mb-5">Radon Gas</h2>
          <div className="space-y-4">
            {facts.map((f, i) => (
              <p key={i} className={`text-[16px] ${f.strong ? "font-semibold text-ink" : ""}`}>{f.text}</p>
            ))}
          </div>
          <div className="pt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brandblue hover:bg-brandblued text-white font-head font-bold text-[15px] rounded-[10px] px-6 py-3 transition-colors shadow-[0_8px_20px_rgba(28,111,176,0.28)]"
            >
              Schedule a Radon Test &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
