import Navbar from "/src/Navbar.jsx";
import Footer from "/src/Footer.jsx";
// import radon_home from "./assets/radon_home.jpg"
import Rn from "./assets/Rn.jpg"

function About() {
  return (
    <div>
      <Navbar />
      <div className="my-32 mt-10">
        <div>
          <h2 className="text-6xl font-bold text-center">What is Radon?</h2>
          <h2 className="text-3xl font-bold mt-10 px-16">Radon Gas</h2>
        </div>
        {/* <hr className="h-px my-7 bg-gray-300 border-0 dark:bg-gray-700"></hr> */}
        <div className="grid md:grid-cols-2 gap-1 px-1 mt-4 text-center">
          <div>
            <a href="https://www.epa.gov/">
              <img
                className='rounded-xl max-w-[640px] m-auto hover:opacity-80 duration-150'
                src={Rn}
                alt="Radon Home"
              />
            </a>
          </div>
          <div className="py-2 m-auto text-2xl mr-4 rounded-xl shadow-md">
            <p className="text-xl">Radon is a radioactive gas that forms naturally from the earth when radioactive metals; uranium, thorium, or radium break down in rocks, soil and groundwater.</p>
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
