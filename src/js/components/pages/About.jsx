import Footer from "/src/Footer.jsx";
// import radon_home from "./assets/radon_home.jpg"
import Rn from "../../../assets/Rn.jpg";

function About() {
  return (
    <div>
      <div className="my-32 mt-10">
        <div>
          <h2 className="text-6xl font-bold text-center">What is Radon?</h2>
          <br></br>
          <h2 className="text-3xl font-bold mt-6 px-16">Radon Gas</h2>
        </div>
        <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
          <div>
            <a href="https://www.epa.gov/">
              <img
                className='rounded-xl max-w-[640px] hover:opacity-80 duration-150'
                src={Rn}
                alt="Radon Home"
              />
            </a>
          </div>
          <div className="rounded-xl shadow-xl flex flex-col justify-center text-center">
            <p className="px-4 py-2 text-xl">Radon is a radioactive gas that forms naturally from the earth when radioactive metals; uranium, thorium, or radium break down in rocks, soil and groundwater.</p>
            <p className="text-xl">Radon exposer happens primarily from breathing radon in the air that comes up through cracks and gaps in the foundation of homes.</p>
            <br></br>
            <p className="text-xl font-bold">Radon cannot be seen, has no smell and no taste.</p>
            <br></br>
            <p className="text-xl">Testing for Radon is the only way to know the levels in your home.</p>
            <p className="text-xl font-bold">Radon is the leading cause of lung cancer among nonsmokers in the United States.</p>
            <p className="text-xl">The EPA guidelines recommend radon mitigation if the average radon level is over 4.0 pCi/L.</p>
            <br></br>
            <p className="text-xl">We do not install radon mitigation systems. We have experience and resouces to guide you through getting a radon mitigation system installed if the radon test comes back about the EPA recommended guideline. </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
