import Safe from "./assets/safe_home.jpg"
// import Radon from "./assets/radon_home.jpg"
 
const Header = () => {

  return (
    <div>
      <h3 className="text-6xl mt-10 font-bold text-center">Colorado Radon Testing</h3>

      <div className="flex justify-center my-32 mt-10">
        <div className="text-center p-16 mx-12 rounded-xl shadow-xl">
          <h1 className="text-4xl font-bold text-center">WELCOME</h1>
          <p className="pt-4 text-black">We serve Denver Metro, Colorado Springs, and the Front Range area.</p>
          <p>Weather you are a homeowner, buying, selling, or renting you are at risk for Radon exposure in Colorado.</p>
          <p>Radon is the leading cause of lung cancer among nonsmokers in the United States.</p>
          <a href="#Radon" className="hover:text-black hover:opacity-80 duration-150 text-black">Learn More </a>

          <div className=" float-left">
            <img 
              className=""
              src={Safe}
              alt="Safe Home"
            />
            {/* <img
              className="object-cover w-full h-full"
              src={Radon}
              alt="How Radon comes in"
            /> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
