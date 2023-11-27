import Safe from "./assets/safe_home.jpg"
import Radon from "./assets/radon_home.jpg"
 
const Header = () => {

  return (
    <div>
      <h3 className="text-6xl mt-10 font-bold text-center">Colorado Radon Testing</h3>

      <div className="max-w-[1400px] h-[500px] bg-red-900 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
        <div className="lg:top-20 relative lg:col-span-1 col-span-2">
          <h1 className="text-2xl font-semibold">WELCOME</h1>
          <p className="pt-4">We serve Denver Metro, Colorado Springs, and the Front Range area.</p>
          <p>Weather you are a homeowner, buying, selling, or renting you are at risk for Radon exposure in Colorado.</p>
          <p>Radon is the leading cause of lung cancer among nonsmokers in the United States.</p>
          <a href="#Radon" className="hover:text-black hover:opacity-80 duration-150 text-white">Learn More </a>

          <div className="grid grid-cols-2 col-span-2 gap-2">
            <img 
              className="row-span-2 object-cover w-full h-full"
              src={Safe}
              alt="Safe Home"
            />
            <img
              className="object-cover w-full h-full"
              src={Radon}
              alt="How Radon comes in"
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
