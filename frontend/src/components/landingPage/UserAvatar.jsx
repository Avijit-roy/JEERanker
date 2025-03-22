import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import ProfilePopup from "../profile/ProfilePopup";

function UserAvatar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuthStore();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src={user?.profilePicture || "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}
          alt="User Avatar"
          className="w-8 h-8 rounded-full border-2 border-black"
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <button
            onClick={() => {
              setIsProfileOpen(true);
              setIsDropdownOpen(false);
            }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            View Profile
          </button>
          <button
            onClick={logout}
            className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left font-semibold"
          >
            Logout
          </button>
        </div>
      )}

      <ProfilePopup
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </div>
  );
}

export default UserAvatar;
