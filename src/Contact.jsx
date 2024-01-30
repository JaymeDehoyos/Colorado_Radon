import Navbar from "/src/Navbar.jsx";
import Leblanc from "./assets/leblanc photo.jpg.jpeg";

function Contact() {
  return (

    <div>
      <Navbar/>
      <div className="grid md:grid-cols-2">
        <div>
      <img 
        className= "rounded-xl max-w-[640px] m-auto py-16"
        src= {Leblanc}
        alt="The Leblanc's"
      />
      </div>
      <div className="py-24 text-2xl mr-4">
      <p>Holli and Jared have been Colorado residents for over 10 years. We have experience and are knowledgable 
      about the effects radon has on families.
      <br></br>
      We understand the importance of testing homes and businesses for radon exposure.
      We are NRPP certified and follow EPA protocols for radon measurements.
      <br></br> 
      Jared has experience as a licensed contractor, certified home inspector, and licensed radon measurement professional. Holli has experience as a licensed real estate agent and licensed radon measurement professional. 
      They enjoy spending time in the mountains, snowboarding, and paddle boarding with their family.
      </p>
      </div>
      </div>
      <div className="grid md:grid-cols-2 gap-1 px-1 text-center">
          <div className="py-8 rounded-xl shadow-xl">
            <p className="text-2xl font-semibold">Holli</p>
            <p className="">NRPP Cert. ID 113160-RMP</p>
            <p className="">Colorado Liecense: RME.0000251</p>
          </div>
          <div className="py-8 rounded-xl shadow-xl">
            <p className="text-2xl font-semibold">Jared</p>
            <p className="">NRPP Cert. ID 113480-RMP</p>
            <p className="">Colorado Lience: RME.0000362</p>
          </div>
        </div>
        <hr className="h-px my-7 bg-gray-300 border-0 dark:bg-gray-700"></hr>
        <div className='justify-center col-span-2 pt-8 md:pt-2'>
            <p className='text-center text-4xl font-bold uppercase py-4'>Contact Us</p>
            <form className='flex flex-col m-auto w-96'>
              <input className='p-4 mr-4 rounded-md mb-6' type='name' placeholder='Name'></input>
              <input className='p-4 mr-4 rounded-md mb-6' type='phone' placeholder='Phone Number'></input>
              <input className='p-4 mr-4 rounded-md mb-6' type='email' placeholder='Email'></input>
              <input className='p-4 mr-4 rounded-md mb-6' type='address' placeholder='Address'></input>
              <textarea className='resize rounded-md'>Message</textarea>
              <button className='p-4 mb-6  hover:text-black hover:opacity-80 duration-150 rounded-l'>Send</button>
            </form>
          </div>
    </div>
  )
}

export default Contact;
