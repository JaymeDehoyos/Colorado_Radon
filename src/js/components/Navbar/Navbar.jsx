import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo_CRT.png";

const links = [
  { name: "Home", path: "/" },
  { name: "What is Radon?", path: "/about" },
  { name: "Specials", path: "/specials" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-hairline">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} className="h-11 w-11 rounded-[10px]" alt="Colorado Radon Testing logo" />
          <span className="font-head font-extrabold text-[18px] text-ink tracking-tight">
            Colorado <span className="text-brandblue">Radon</span> Testing
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-ink">
          {links.map((l) => (
            <Link key={l.name} to={l.path} className="hover:text-brandblue transition-colors">
              {l.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 bg-brandblue hover:bg-brandblued text-white font-head font-bold text-[15px] rounded-[10px] px-5 py-3 transition-colors shadow-[0_8px_20px_rgba(28,111,176,0.28)]"
        >
          Get a Free Quote
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-hairline px-5 py-4 flex flex-col gap-3 bg-white">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              onClick={() => setOpen(false)}
              className="text-ink font-medium py-1"
            >
              {l.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center bg-brandblue hover:bg-brandblued text-white font-head font-bold rounded-[10px] px-5 py-3 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
