import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const EditUserPopup = ({ isOpen, onClose, onSave, user }) => {
  // Initialize state to store input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [divisi, setDivisi] = useState("");
  const [role, setRole] = useState("");

  // Use `useEffect` to update state when `user` prop changes
  useEffect(() => {
    if (user) {
      setName(user.nama || "");
      setEmail(user.email || "");
      setDivisi(user.divisi || "");
      setRole(user.role || "");
    }
  }, [user]);

  const handleSave = (e) => {
    e.preventDefault();
    // Call `onSave` with the updated data
    onSave({
      id: user.id,
      nama: name,
      email,
      divisi,
      role,
    });
    onClose(); // Close popup after saving
  };

  if (!isOpen) return null; // Early return if not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Edit User</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {/* Form Input */}
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ backgroundColor: "#F5F7FA" }}
              placeholder="Enter Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              className="w-full p-2 border rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: "#B8C7F3" }}
              placeholder="Enter Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Divisi</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              value={divisi}
              onChange={(e) => setDivisi(e.target.value)}
              style={{ backgroundColor: "#B8C7F3" }}
              placeholder="Enter Divisi"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Role</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{ backgroundColor: "#B8C7F3" }}
              placeholder="Enter Role"
            />
          </div>

          <div className="flex justify-end mt-4">
            <button type="button" onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded mr-2">
              Back
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Adding PropTypes for prop validation
EditUserPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    nama: PropTypes.string,
    email: PropTypes.string,
    divisi: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default EditUserPopup;
