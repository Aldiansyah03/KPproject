import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = ({ onToggleSidebar, isOpen }) => {
  const navigate = useNavigate(); // Inisialisasi useNavigate untuk navigasi

  // State untuk mengontrol dropdown
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Fungsi toggle untuk membuka/menutup dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Fungsi untuk navigasi ke halaman profil
  const goToProfile = () => {
    navigate('/profile'); // Ubah '/profile' sesuai dengan rute profil yang Anda tetapkan
  };

  return (
    <nav
      className={`bg-white px-4 py-3 h-20 flex justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md transition-all duration-300 ${
        isOpen ? "w-[calc(100%-16rem)] ml-64" : "w-full"
      }`}
    >
      {/* Left section: Hamburger and Logo */}
      <div className="flex items-center text-xl text-black">
        <button
          onClick={onToggleSidebar}
          className="text-black focus:outline-none mr-2"
          aria-label="Open Sidebar"
        >
          <AiOutlineMenu className="text-2xl" />
        </button>

        {/* Logo */}
        <img
          src="src/assets/logo.svg"
          alt="logo"
          className="h-24 w-24 mr-2"
        />

        {/* Vertical Divider */}
        <div className="border-l-2 h-10 mx-4 hidden md:inline"></div>

        {/* Title */}
        <span className="text-black font-semibold text-lg hidden md:inline">
          Sistem Informasi Inventaris UPT TIK
        </span>
      </div>

      {/* Profile section */}
      <div className="flex items-center space-x-3 relative">
        <button onClick={toggleDropdown} className="flex items-center text-black">
          <img
            src="src/assets/profile.svg"
            alt="profile"
            className="rounded-full h-12 w-12"
          />
          <span onClick={goToProfile} className="ml-2 font-semibold hidden md:inline cursor-pointer">
            Muhammad Aldiansyah
          </span>
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onToggleSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired, // new prop for sidebar status
};

export default Navbar;
