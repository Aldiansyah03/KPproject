import PropTypes from "prop-types"; // Import PropTypes

const UserFormPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Jangan render jika popup tidak terbuka

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-black font-bold">Tambah User</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {/* Form Input */}
        <form>
          <div className="mb-4 text-left">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black   "
              placeholder="Enter Name "
              style={{ backgroundColor: "#B8C7F3" }} // Set background color
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              className="w-full p-2 border rounded text-black"
              placeholder="Enter Email"
              style={{ backgroundColor: "#B8C7F3" }} // Set background color
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-gray-700 font-semibold">Divisi</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              placeholder="Enter Divisi"
              style={{ backgroundColor: "#B8C7F3" }} // Set background color
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-gray-700 font-semibold">Role</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              placeholder="Enter Role"
              style={{ backgroundColor: "#B8C7F3" }} // Set background color
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

// Menambahkan PropTypes untuk validasi props
UserFormPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,  // Pastikan isOpen adalah tipe boolean dan wajib
  onClose: PropTypes.func.isRequired  // Pastikan onClose adalah fungsi dan wajib
};

export default UserFormPopup;
