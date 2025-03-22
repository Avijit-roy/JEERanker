import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div className="flex items-center space-x-4"> {/* Increased space-x-2 to space-x-4 */}
      <Link to="/login">
        <button className="text-gray-800 hover:text-green-600 font-medium">
          Sign in
        </button>
      </Link>
      <Link to="/signup">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Sign up
        </button>
      </Link>
    </div>
  );
}

export default Buttons;