import Safe from "../../../assets/safe_home.jpg"
import Homes from "../../../assets/colorado_homes2.jpg"
import Radon from "../../../assets/Radon.jpg"
// import Carousel from "../Carousel/Carousel"
import CardContainer from "../Carousel/CardContainer"
// import ZReview from "../Carousel/Reviews/ZReview"
// import YReview from "../Carousel/Reviews/YReview"
import NRPP from "../../../assets/NRPP.png"
import Footer from "../../../Footer"

import { Carousel } from "@material-tailwind/react"

const reviews = [
  // {
  //   name: 'Matt Smith',
  //   rating: 3,
  //   comment: "Not enough video games on their phones to keep me entertained while on my trip there."
  // },
  {
    name: 'Z Hamilton',
    rating: 5,
    comment: "Jared is a highly skilled craftsman.  He built a patio cover for our home and did a wonderful job. We are thrilled with the design, stone pillars, and quality of work. We have enjoyed our patio for almost two years now and it gives our home a larger feel. Jared is also very prompt, kind, and has a great sense of humor."
  },
  {
    name: 'Natalie Maraoui',
    rating: 5,
    comment: "Jared was absolutely amazing and is my go to for inspections. He is very thorough, priced fairly and always responds promptly. I highly recommend Affinity Home Inspections and will continue to use Jared whenever I need a home inspection!"
  },
]

const Header = () => {

  return (
    <div>
      <h3 className="text-6xl mt-10 font-bold text-center">Colorado Radon Testing</h3>
      <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>

        {/* Left side */}

        <div className='grid grid-cols-2 grid-rows-3 h-[80vh]'>
          <img
            className='rounded-xl row-span-3 object-cover w-full h-full p-2'
            src={Homes}
            alt="Safe Home"
          />

          <img
            className='rounded-xl row-span-2 object-cover w-full h-full p-2'
            src={Safe}
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

      <div className="my-20 mt-5 top-10 py-8 mx-12">
        <br></br>
        <div className="grid md:grid-cols-2 gap-1 px-1 text-center text-black">
          <div className="py-8 rounded-xl shadow-xl">
            <p className="text-2xl font-semibold">We are an independent Radon Tester.</p>
            <p className="">We have over 25 years of combined commercial,</p>
            <p className="">residental construction, inspection and testing.</p>
          </div>
          <div className="py-8 rounded-xl shadow-xl">
            <p className="text-2xl font-semibold">Need a Home Inspection?</p>
            <a href="https://www.affinityhomeinspections.com" className="mx-3 hover:text-white hover:opacity-80 duration-150">Affinity Home Inspection</a>
          </div>
        </div>
        <div className="my-20 mt-5 top-10 py-8 mx-12">
          <br></br>
          {
            <Carousel className="rounded-xl gap-2">
              {reviews.map((review, idx) => (
                <CardContainer key={idx} name={review.name} rating={review.rating}>
                  {review.comment}
                </CardContainer>
              ))}
            </Carousel>
          }
          <br></br>
        </div>
        <div className="flex justify-center mx-auto mt-60">
          <div className="flex">
            <a href="https://nrpp.info">
              <img
                className="h-20 w-auto hover:opacity-80 duration-150"
                src={NRPP}
                alt="NRPP"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Header;
