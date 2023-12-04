
const Body = () => {
  return (
    <div className="my-20 mt-5 top-10 py-8 mx-12">
      <br></br>
        <div className="grid md:grid-cols-2 gap-1 px-1 text-center">
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
    </div>
  )
}

export default Body;
