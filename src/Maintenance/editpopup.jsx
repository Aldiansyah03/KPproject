import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const EditMaintenancePopup = ({ isOpen, onClose, onSave, item }) => {
  const [nama, setNama] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [lastMaintenance, setLastMaintenance] = useState("");
  const [nextMaintenance, setNextMaintenance] = useState("");

  useEffect(() => {
    if (item) {
      setNama(item.nama);
      setLokasi(item.lokasi);
      setLastMaintenance(item.lastMaintenance);
      setNextMaintenance(item.nextMaintenance);
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...item,
      nama,
      lokasi,
      lastMaintenance,
      nextMaintenance,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Maintenance</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nama Barang</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Lokasi</label>
            <input
              type="text"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Maintenance</label>
            <input
              type="date"
              value={lastMaintenance}
              onChange={(e) => setLastMaintenance(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Next Maintenance</label>
            <input
              type="date"
              value={nextMaintenance}
              onChange={(e) => setNextMaintenance(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded mr-2">
              Batal
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditMaintenancePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  item: PropTypes.object,
};

export default EditMaintenancePopup;
