import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Radon from '../../../assets/Logo_CRT.png'
import { Link } from 'react-router-dom';

function NavList() {

  return (
    <ul className="w-full my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 duration-150">
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/" className="flex items-center hover:text-black transition-colors">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/about" className="flex items-center hover:text-black transition-colors">
          What is Radon?
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/Specials" className="flex items-center hover:text-black transition-colors">
          Specials
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/contact" className="flex items-center hover:text-black transition-colors">
          Contact Us
        </Link>
      </Typography>
    </ul>
  );
}
 
export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full bg-red-900 border-transparent rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center w-full justify-between text-white">

        <Typography
          as="a"
          href="home"
          variant="gradient"
          className="mr-4 cursor-pointer py-1.5"
        >
          <img 
          className="h-20 w-auto"
          src= {Radon}
          alt="Radon"
         />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse className="hidden" open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
