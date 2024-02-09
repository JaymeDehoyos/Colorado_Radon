
import RadonMachine from "../../../assets/radon_machine.jpg"
import CardContainer from "../Carousel/CardContainer"
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
  // {
  //   name: 'Natalie Maraoui',
  //   rating: 5,
  //   comment: "Jared was absolutely amazing and is my go to for inspections. He is very thorough, priced fairly and always responds promptly. I highly recommend Affinity Home Inspections and will continue to use Jared whenever I need a home inspection!"
  // },
]

const Header = () => {

  return (
    <div>
      <h3 className="text-6xl mt-10 font-bold text-center">Colorado Radon Testing</h3>
      <br></br>
      <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>

        {/* Left side */}

        <div className='h-[80vh]'>
          <img
            className='h-full rounded-xl  p-2'
            src={RadonMachine}
            alt="Safe Home"
          />

        </div>

        {/* Right Side */}

        <div className='rounded-xl shadow-2xl flex flex-col h-full justify-center'>
          <h2 className='text-5xl text-center md:text-6xl font-bold'>Welcome!</h2>
          <p className='text-2xl text-center  py-6'>We service Denver Metro, Colorado Springs, and the Front Range</p>
          <p className='text-xl text-center  pb-6'>Weather you are a homeowner, buying, selling or renting you are at risk for Radon exposure in Colorado. Radon exposer happens primarily from breathing radon in the air that comes up through cracks and gaps in the foundation of homes.</p>
          <p className='text-xl text-center'>Radon is the leading cause of lung cancer among nonsmokers in the United States.</p>
          <p className='text-xl text-center'>Testing for Radon is simple.</p>
          <br></br>
          <div className='text-xl text-center mx-3 hover:text-red-500 hover:opacity-80 duration-150'>
            <a href="{<About />}">Learn More...</a>
          </div>
        </div>
      </div>
      <div className="py-8 mx-12 rounded-xl shadow-xl text-center">
          <p className="text-2xl font-semibold">How We Work!</p>
          <br></br>
          <p className="">The exterior windows and doors need to be closed 12 prior to testing and then at least 48 hours of testing.</p>
          <p className="">If you have a swamp cooler you will need to keep it turned off 12 hours before and during testing.</p>
          <p className="">You will recieve results of the Radon testing within hours once the radon monitor is picked up.</p>
          <p className="">It`s that fast!!</p>
          <p className="font-semibold hover:text-red-500">Keep Your Home Safe Today (720) 454-8388</p>
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
            <a href="https://www.affinityhomeinspections.com" className="mx-3 hover:text-red-500 hover:opacity-80 duration-150">Affinity Home Inspection</a>
          </div>
        </div>
        <div className="my-20 mt-5 top-10 py-8 mx-12">
          <h2 className="text-2xl font-semibold text-center">Reviews</h2>
          <a href="https://www.google.com/search?q=affinity+home+inspections&oq=a&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyEwgCEC4YgwEYxwEYsQMY0QMYgAQyBggDEEUYOTIGCAQQRRg7MhUIBRAuGCcYrwEYxwEYgAQYigUYjgUyEwgGEC4YgwEYxwEYsQMY0QMYgAQyEwgHEC4YgwEYxwEYsQMY0QMYgAQyBwgIEAAYjwIyBwgJEAAYjwLSAQkzNDcxajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x876c979fb91fa8e1:0x7a601415f476db3f,1,,,," className="flex justify-center mx-3 hover:text-red-500 hover:optional-80 duration-150">Find more great reviews!</a>
          <hr className="h-px my-7 bg-gray-300 border-0 dark:bg-gray-700"></hr>
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
