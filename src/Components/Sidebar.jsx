// Sidebar.js
import { FaHome, FaBoxes, FaUsers, FaTools, FaSignOutAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#37578F] z-20 px-4 py-6 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profile Picture and Name */}
        <div className="flex flex-col items-center mb-6">
          <img src="src/assets/profile.svg" alt="profile" className="rounded-full h-20 w-20 mb-2" />
          <span className="text-white text-lg font-semibold">Muhammad</span>
          <span className="text-gray-300 text-sm">Aldiansyah</span>
        </div>
        
        <hr className="border-gray-500 mb-4" />

        {/* Menu Links */}
        <ul className="text-white font-semibold">
          <li className="mb-2 rounded hover:bg-blue-500 py-2 px-3">
            <Link to="/" onClick={onClose} className="flex items-center">
              <FaHome className="w-6 h-6 mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-2 rounded hover:bg-blue-500 py-2 px-3">
            <Link to="/stokbarang" onClick={onClose} className="flex items-center">
              <FaBoxes className="w-6 h-6 mr-2" />
              Stok Barang
            </Link>
          </li>
          <li className="mb-2 rounded hover:bg-blue-500 py-2 px-3">
            <Link to="/manageuser" onClick={onClose} className="flex items-center">
              <FaUsers className="w-6 h-6 mr-2" />
              Manage User
            </Link>
          </li>
          <li className="mb-2 rounded hover:bg-blue-500 py-2 px-3">
            <Link to="/maintenance" onClick={onClose} className="flex items-center">
              <FaTools className="w-6 h-6 mr-2" />
              Maintenance
            </Link>
          </li>
          <li className="mt-2 rounded hover:bg-red-500 py-2 px-3">
            <Link to="/logout" onClick={onClose} className="flex items-center">
              <FaSignOutAlt className="w-6 h-6 mr-2" />
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
