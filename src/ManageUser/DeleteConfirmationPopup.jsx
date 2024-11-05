import PropTypes from "prop-types";

const DeleteConfirmationPopup = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Konfirmasi Hapus</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <p className="text-black mb-6">Apakah Anda yakin ingin menghapus User ini?</p>
        <button
          onClick={onConfirm}
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 mb-2"
        >
          Hapus
        </button>
        <button
          onClick={onClose}
          className="text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-200"
        >
          Batal
        </button>
      </div>
    </div>
  );
};

DeleteConfirmationPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default DeleteConfirmationPopup;
