
const Body = () => {
  return (
    <div className="w-full my-30 mt-60">
      <div>
        <div className="grid md:grid-cols-2 gap-1 px-1 text-center">
          <div className="py-8 rounded-xl shadow-xl">
            <p className="text-2xl font-bold">We are an independent Radon Tester.</p>
            <p className="">We have over 25 years of combined commercial, residental construction, inspection and testing.</p>
          </div>
          <div className="py-8 rounded-xl shadow-xl">
            <p className="text-2xl font-bold">Need a Home Inspection?</p>
            <a href="https://www.affinityhomeinspections.com" className="mx-3 hover:text-red-500 hover:opacity-80 duration-150">Affinity Home Inspection</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body;
