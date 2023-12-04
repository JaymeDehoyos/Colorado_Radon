import Safe from "./assets/safe_home.jpg"
import Homes from "./assets/colorado_homes2.jpg"
import Radon from "./assets/Radon.jpg"
 
const Header = () => {

  return (
    <div>
    <h3 className="text-6xl mt-10 font-bold text-center">Colorado Radon Testing</h3>
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>

{/* Left side */}

      <div className='grid grid-cols-2 grid-rows-3 h-[80vh]'>
        <img 
        className='rounded-xl row-span-3 object-cover w-full h-full p-2'
        src= {Homes}
        alt="Safe Home"
        />
    
        <img 
        className='rounded-xl row-span-2 object-cover w-full h-full p-2'
        src= {Safe}
        alt="Warning"
        />

        <img
        className='rounded-xl row-span-2 object-cover w-full h-full p-2'
        src={Radon}
        alt="Basement" 
        />
      </div>  




{/* Right Side */}

        <div className='rounded-xl shadow-xl flex flex-col h-full justify-center'>
          <h2 className='text-5xl text-center md:text-6xl font-bold'>Welcome!</h2>
          <p className='text-2xl text-center  py-6'>We service Denver Metro, Colorado Springs, and the Front Range</p>
          <p className='text-xl text-center  pb-6'>Weather you are a homeowner, buying, selling or renting you are at risk for Radon exposure in Colorado. Radon exposer happens primarily from breathing radon in the air that comes up through cracks and gaps in the foundation of homes.</p>
          <p className='text-xl text-center'>Radon is the leading cause of lung cancer among nonsmokers in the United States.</p>
          <p className='text-xl text-center'>Testing for Radon is simple.</p>
          <br></br>
          <div className='text-xl text-center mx-3 hover:text-white hover:opacity-80 duration-150'>
            <button>Learn More...</button>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;
