import Footer from "/src/Footer.jsx";
// import radon_home from "./assets/radon_home.jpg"
import Rn from "../../../assets/Rn.jpg";

function About() {
  return (
    <div>

      {/* HERO */}
      <div className="mt-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold">
          What is Radon?
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Learn why radon testing is important for your home and family
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1400px] mx-auto py-16 px-6 grid lg:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="flex items-center justify-center">
          <a href="https://www.epa.gov/" target="_blank" rel="noreferrer">
            <img
              className="rounded-xl w-full max-w-[6000px] shadow-lg hover:opacity-90 transition"
              src={Rn}
              alt="Radon in Home"
            />
          </a>
        </div>

        {/* TEXT CARD */}
        <div className="rounded-xl shadow-xl p-8 flex flex-col justify-center space-y-4 text-center">

          <h2 className="text-3xl font-bold mb-2">
            Radon Gas
          </h2>

          <p className="text-lg">
            Radon is a radioactive gas that forms naturally when uranium,
            thorium, and radium break down in rocks, soil, and groundwater.
          </p>

          <p className="text-lg">
            Exposure happens primarily by breathing radon that enters homes
            through cracks and gaps in foundations.
          </p>

          <p className="text-lg font-semibold">
            Radon has no smell, taste, or color.
          </p>

          <p className="text-lg">
            Testing for radon is the only way to know the level in your home.
          </p>

          <p className="text-lg font-semibold">
            Radon is the leading cause of lung cancer among non-smokers in the
            United States.
          </p>

          <p className="text-lg">
            EPA guidelines recommend mitigation when levels exceed 4.0 pCi/L.
          </p>

          <p className="text-lg">
            We do not install mitigation systems, but we can help guide you to
            trusted mitigation professionals if elevated levels are found.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="/contact"
              className="inline-block bg-yellow-400 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              Schedule a Radon Test
            </a>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default About;
