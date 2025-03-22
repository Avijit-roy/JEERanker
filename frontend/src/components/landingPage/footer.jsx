function Footer() {
  return (
<><footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            {/* Logo and Description */}
            <div className="md:w-1/3 flex justify-center md:justify-start">
              <div>
                <h3 className="text-lg font-bold">JEERanker</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Your one-stop destination for success.
                </p>
              </div>
            </div>
            {/* Navigation Links (Centered) */}
            <div className="md:w-1/3 flex justify-center">
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Home
                </a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </a>
              </div>
            </div>
            {/* Social Media Links (Centered) */}
            <div className="md:w-1/3 flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-lg">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-lg">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-lg">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 mt-4">
            © 2025 JEERanker. All Rights Reserved.
          </div>
        </div>
      </footer></>
  );
}

export default Footer;
