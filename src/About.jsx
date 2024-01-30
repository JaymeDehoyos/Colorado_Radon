import Navbar from "/src/Navbar.jsx";
import Footer from "/src/Footer.jsx";
import radon_home from "./assets/radon_home.jpg"

function About() {
  return (
    <div>
      <Navbar />
          <div className="my-32 mt-10">
          <div>
            <h2 className="text-4xl font-bold text-center">What is Radon?</h2>
            <h2 className="text-2xl font-bold mt-10">Radon Gas</h2>
            {/* <hr className="h-px my-7 bg-gray-300 border-0 dark:bg-gray-700"></hr> */}
            <div className="mx-12 p-14 py-8">
            <img 
              className='float-left rounded-xl shadow-xl hover:opacity-80 duration-150'
              href="https://www.epa.gov/"
              src= {radon_home}
              alt="Radon Home"
            />
            </div>


            <div className="justify-center text-left mx-12 p-14 py-8 rounded-xl shadow-xl">
              <p className="text-xl">Radon is a radioactive gas that forms naturally from the earth when radioactive metals; uranium, thorium, or radium break down in rocks, soil and groundwater.</p>
              <p className="text-xl">Radon exposer happens primarily from breathing radon in the air that comes up through cracks and gaps in the foundation of homes.</p>
              <br></br>
              <p className="text-xl font-bold">Radon cannot be seen, has no smell and no taste.</p>
              <br></br>
              <p className="text-xl">Testing for Radon is the only way to know the levels in your home.</p>
              <p className="text-xl">Radon is the leading cause of lung cancer among nonsmokers in the United States.</p>
              <p className="text-xl">The EPA guidelines recommend radon mitigation if the average radon level is over 4.0 pCi/L.</p>
            </div>
          </div>
        </div>
      <Footer />
    </div>

  )
}

export default About
