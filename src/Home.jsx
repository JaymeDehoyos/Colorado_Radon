import Houses from './assets/home-page.jpg';

const Header = () => {
  return (
    <div className='w-full h-screen top-0'>
      <div>
        <img 
            className="h-96 w-full object-cover object-center"
            src= {Houses}
            alt="Homes"
          />
      </div>
      <br></br>
      <div>
        <h2 className="text-4xl font-bold text-center">We serve Denver Metro, Colorado Springs, and the Front Range ares.</h2>
        <hr className="h-px my-7 bg-gray-300 border-0 dark:bg-gray-700"></hr>
        <div className="text-justify p-16 mx-12 rounded-xl shadow-xl">

          <p className="text-xl font-semibold">Weather you are a homeowner, buying, selling or renting you are at risk for Radon exposure in Colorado.</p>
          <p className="text-xl font-semibold">Radon is the leading cause of lung cancer among nonsmoker in the United States.</p>
          <p className="text-xl font-semibold">The EPA guidelines recommend testing a home every 2 years or more often if there is recent renovation or construction in the area. The EPA guidelines recommend a radon mitigation system if the average radon level is over 4.0 pCi/L.</p>
          <p className="text-xl font-semibold">Testing for Radon is simple.</p>
          <p className="text-xl font-semibold">The exterior windows and doors need to be closed 12 hours prior to testing and then at least 48 hours of testing. You can go in and out of the home normally.</p>
          <p className="text-xl font-semibold">If you have a swamp cooler you will need to keep it turned off 12 hours before and during testing.</p>
          <p className="text-xl font-semibold">You will receive results of the Radon testing within hours once the radon monitor is picked up.</p>

        </div>
      </div>
     </div>

  )
}

export default Header;
