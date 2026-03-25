import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navLink = (path) =>
    `relative font-medium transition duration-200 ${
      location.pathname === path
        ? "text-teal-500"
        : "text-gray-600 hover:text-teal-500"
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        /* Logo */
        <h1 className="text-2xl font-bold tracking-tight text-gray-800 cursor-pointer">
          Shop<span className="text-teal-500">Smart</span>
        </h1>

        /* Desktop Menu */
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={navLink("/")}>
            Home
          </Link>
          <Link to="/form" className={navLink("/form")}>
            Add Product
          </Link>
        </div>

        /* Right Side */
        <div className="flex items-center gap-5">
          
          /* Cart */
          <div className="relative cursor-pointer">
            <FiShoppingCart className="text-2xl text-gray-700 hover:text-teal-500 transition" />
            
            /* Badge (optional) */
            <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs px-1.5 rounded-full">
              2
            </span>
          </div>

          /* Mobile Toggle */
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-700"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      /* Mobile Menu */
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 py-4 bg-white border-t">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={navLink("/")}
          >
            Home
          </Link>
          <Link
            to="/form"
            onClick={() => setOpen(false)}
            className={navLink("/form")}
          >
            Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;