import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Radon from '../../../assets/Logo_CRT.png'
import { Link, useLocation } from 'react-router-dom';


function NavList() {
  const linkClasses =
    "flex items-center relative text-[#444444] transition-colors duration-200 hover:text-[#b29982]";

  return (
    <ul className="w-full my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {[
        { name: "Home", path: "/" },
        { name: "What is Radon?", path: "/about" },
        { name: "Specials", path: "/specials" },
        { name: "Contact Us", path: "/contact" },
      ].map((item) => (
        <Typography as="li" variant="medium" className="p-1 font-medium" key={item.name}>
          <Link to={item.path} className={linkClasses}>
            {item.name}
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b29982] transition-all duration-300"
            ></span>
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full bg-[#faf7f0] border-transparent rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-md">
      <div className="flex items-center w-full justify-between">
        {/* Logo */}
        <Typography as="a" href="/" variant="medium" className="mr-4 cursor-pointer py-1.5">
          <img className="h-20 w-auto" src={Radon} alt="Radon" />
        </Typography>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <NavList />
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-[#444444] hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
        </IconButton>
      </div>

      {/* Mobile Collapse Menu */}
      <Collapse open={openNav} className="lg:hidden">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
