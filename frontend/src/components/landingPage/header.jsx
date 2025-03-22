import { useState } from "react";
import Buttons from "./buttons";
import Avatar from "./UserAvatar";
import { useAuthStore } from "../../store/authStore";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuthStore(); // ✅ Get authentication status

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <img
                  src="https://raw.githubusercontent.com/Avijit-roy/Images/refs/heads/main/c759d556-3bf2-465f-88df-ec78639764fa.jpg"
                  alt="Logo"
                  className="h-8 w-8 md:h-10 md:w-10 rounded"
                />
                <span className="text-lg md:text-xl font-bold text-gray-800 whitespace-nowrap">
                  JeeRanker
                </span>
              </div>
              {/* Navigation */}
              <nav className="hidden lg:flex space-x-6">
                <Link to="/">
                  <a
                    href="#"
                    className="text-gray-800 hover:text-green-600 font-medium"
                  >
                    Home
                  </a>
                </Link>
                <a
                  href="#"
                  className="text-gray-800 hover:text-green-600 font-medium"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-green-600 font-medium"
                >
                  About
                </a>
                <Link to="/dashboard">
                  {isAuthenticated && (
                    <a
                      href="#"
                      className="text-gray-800 hover:text-green-600 font-medium"
                    >
                      Dashboard
                    </a>
                  )}
                </Link>
              </nav>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-3">
              {/* Buttons or Avatar based on authentication */}
              <div className="hidden md:flex">
                {isAuthenticated ? <Avatar /> : <Buttons />}
              </div>
              {/* Mobile Menu Button */}
              <button
                id="mobile-menu-button"
                className="lg:hidden focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`${isMobileMenuOpen ? "block" : "hidden"
            } lg:hidden bg-white shadow-lg`}
        >
          <div className="py-2">
            <Link to="/">
              <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Home
              </a>
            </Link>
            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Contact
            </a>
            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              About
            </a>
            {isAuthenticated && (
              <Link to="/dashboard">
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Dashboard
                </a>
              </Link>
            )}
            {/* Mobile Auth Buttons */}
            <div className="md:hidden px-4 py-2">
              {isAuthenticated ? <Avatar /> : <Buttons />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
