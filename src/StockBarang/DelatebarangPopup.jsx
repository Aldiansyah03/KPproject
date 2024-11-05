import PropTypes from "prop-types";

const DeleteBarangPopup = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
          <h2 className="text-lg font-semibold mb-4">Konfirmasi Hapus Barang</h2>
          <p className="text-black mb-6">Apakah Anda yakin ingin menghapus barang ini?</p>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">Hapus</button>
          <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded">Batal</button>
        </div>
      </div>
    );
  };
  
  DeleteBarangPopup.propTypes = { isOpen: PropTypes.bool, onClose: PropTypes.func, onConfirm: PropTypes.func };
  export default DeleteBarangPopup;
  