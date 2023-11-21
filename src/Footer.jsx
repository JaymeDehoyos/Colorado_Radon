

const Footer = () => {
  return (
    <div className="w-full mt-10 bg-slate-500 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto border-b-2 border-gray-600 py-6">
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

          <div className='col-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase py-4'>Contact Us</p>
            <form className='flex flex-col w-80'>
              <input className='p-2 mr-4 rounded-md mb-4' type='name' placeholder='Name'></input>
              <input className='p-2 mr-4 rounded-md mb-4' type='phone' placeholder='Phone Number'></input>
              <input className='p-2 mr-4 rounded-md mb-4' type='email' placeholder='Email'></input>
              <input className='p-2 mr-4 rounded-md mb-4' type='address' placeholder='Address'></input>
              <textarea className='resize rounded-md'>Message</textarea>
              <button className='p-2 mb-4  hover:text-red-500 hover:opacity-80 duration-150'>Send</button>
            </form>
          </div>

        </div>
      </div>
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
          <p className='py-4'>© Copyright 2023 - All Rights Reserved </p>

          <div className="flex -mx-6">
            <a href="#" className="mx-3 hover:opacity-80 duration-150" >Powered By Jayme DeHoyos</a>
          </div>
        </div>
    </div>

  )
}

export default Footer;

