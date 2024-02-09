import { Avatar } from "@material-tailwind/react";
import Holli from "../../../assets/holli.jpg";
import Jared from "../../../assets/Jared.jpg";


function Contact() {
  return (

    <div>
      <h1 className="text-4xl mt-10 font-bold text-center">Don`t wait - Contact us today! (720) 454-8388</h1>
        <div className="py-14 px-1 text-center">
          <div className="py-16 mx-12 m-auto text-2xl mr-4 rounded-xl h-full shadow-md">
            <p>Holli and Jared have been Colorado residents for over 10 years. They have experience and are knowledgable
              about the effects radon has on families.
              <br></br>
              We understand the importance of testing homes and businesses for radon exposure.
              We are NRPP certified and follow EPA protocols for radon measurements.
              <br></br>
              Jared has experience as a licensed contractor, certified home inspector, and licensed radon measurement professional. Holli has experience as a licensed real estate agent and licensed radon measurement professional.
              They enjoy spending time in the mountains, snowboarding, and paddle boarding with their family.
            </p>
            <br></br>
            <p className="text-xl">PLEASE NOTE: We do NOT install radon mitigation systems. We have experience and resouces to guide you through getting a radon mitigation system installed if the radon test comes back about the EPA recommended guideline. </p>
          </div>
        </div>
        <div className="py-16 mx-12 px-1 grid md:grid-cols-2 gap-1 text-center">
          <div className="flex flex-col py-8 rounded-xl shadow-xl">
            <div className="flex justify-center gap-4">
            <Avatar src={Holli} alt="avatar" size="md" />
            </div>
            <p className="text-2xl font-semibold">Holli</p>
            <p className="">NRPP Cert. ID 113160-RMP</p>
            <p className="">Colorado License: RME.0000251</p>
          </div>
          <div className="py-8 rounded-xl shadow-xl">
          <div className="flex justify-center">
            <Avatar src={Jared} alt="avatar" size="md"/>
            </div>
            <p className="text-2xl font-semibold">Jared</p>
            <p className="">NRPP Cert. ID 113480-RMP</p>
            <p className="">Colorado License: RME.0000362</p>
          </div>
        </div>
        <hr className="h-px my-7 bg-gray-300 border-0 dark:bg-gray-700"></hr>
        <div className='justify-center col-span-2 pt-8 md:pt-2'>
            <p className='text-center text-4xl font-bold uppercase'>Message Us</p>
            <p className="text-center p-4 py-4">Have questions? Feel free to contact us by calling or texting (720) 454-8388 or filling out the contact form. 
            We will call you back as soon as possible. Email: info@coloradoradontests.com </p>
            <form className='flex flex-col p-4 m-auto w-96 justify-center'>
              <input className='p-4 mr-2 rounded-md mb-6' type='name' placeholder='Name'></input>
              <input className='p-4 mr-2 rounded-md mb-6' type='phone' placeholder='Phone Number'></input>
              <input className='p-4 mr-2 rounded-md mb-6' type='email' placeholder='Email'></input>
              <input className='p-4 mr-2 rounded-md mb-6' type='address' placeholder='Address'></input>
              <textarea className='resize rounded-md'>Message</textarea>
              <button className='p-4 mb-6  hover:text-black hover:opacity-80 duration-150 rounded-l'>Send</button>
            </form>
          </div>
          <div className="w-full mt-10 bg-red-900 text-white py-y px-2">
      <div className="max-w-[1240px] mx-auto border-b-2 border-black py-6">
        <div className='flex flex-wrap justify-around'>
          
         <div className="font-bold py-4">
          <p className='font-bold uppercase py-4'>EMAIL</p>
          <ul>
            <li className='py-1'>info@coloradoradontests.com</li>

          </ul>
          <p className='font-bold uppercase py-4'>HOURS</p>
            <ul>
              <li className='py-1'>Monday - Friday: 9AM - 5PM</li>
              <li className='py-1'>Saturday & Sunday: CLOSED</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
          <p className='py-4'>© Copyright 2024 - All Rights Reserved </p>

          <div className="flex -mx-6">
            <a href="#" className="mx-3 hover:text-black hover:opacity-80 duration-150" >Powered By Jayme DeHoyos</a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Contact;
