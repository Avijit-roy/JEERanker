import { useAuthStore } from "../../store/authStore";
import PropTypes from "prop-types";

function ProfilePopup({ isOpen, onClose }) {
  const { user = {} } = useAuthStore();

  const formatDate = (dateString) => {
    if (!dateString) return "Not provided";
    const date = new Date(dateString);
    return isNaN(date.getTime())
      ? "Invalid date"
      : date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Profile Content */}
        <div className="flex flex-col items-center">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 border"
          />
          <h2 className="text-2xl font-bold mb-4">{user.name || "User Name"}</h2>

          <div className="w-full space-y-3">
            <div className="flex items-center space-x-2">
              <span className="font-semibold w-20">Email:</span>
              <span className="text-gray-600">{user.email || "Not provided"}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold w-20">Phone:</span>
              <span className="text-gray-600">
                {user.phoneNumber || "Not provided"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold w-20">DOB:</span>
              <span className="text-gray-600">{formatDate(user.dateOfBirth)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfilePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProfilePopup;
