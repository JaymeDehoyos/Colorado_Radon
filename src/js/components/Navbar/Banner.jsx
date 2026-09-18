// Slim navy utility bar shown above the navbar.
function Banner() {
  return (
    <div className="bg-navy text-[#dce8f2] text-[13px] md:text-sm">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7 h-10 flex items-center justify-between">
        <div className="hidden sm:block">
          Serving Denver Metro <span className="text-teal">&bull;</span> Colorado Springs{" "}
          <span className="text-teal">&bull;</span> the Front Range
        </div>
        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          <span className="hidden sm:inline">NRPP Certified</span>
          <span className="hidden sm:inline text-teal">&bull;</span>
          <a href="tel:7204548388" className="font-semibold text-white hover:text-teal transition-colors">
            (720) 454-8388
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
