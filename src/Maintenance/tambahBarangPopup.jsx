import PropTypes from "prop-types";
import { useState } from "react";

const TambahMaintenancePopup = ({ isOpen, onClose, onSave }) => {
  const [nama, setNama] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [lastMaintenance, setLastMaintenance] = useState("");
  const [nextMaintenance, setNextMaintenance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: Date.now(), // Unique ID
      nama,
      lokasi,
      lastMaintenance,
      nextMaintenance,
    });
    onClose();
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Tambah Maintenance</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nama Barang</label>
            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} required className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Lokasi</label>
            <input type="text" value={lokasi} onChange={(e) => setLokasi(e.target.value)} required className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Maintenance</label>
            <input type="date" value={lastMaintenance} onChange={(e) => setLastMaintenance(e.target.value)} required className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Next Maintenance</label>
            <input type="date" value={nextMaintenance} onChange={(e) => setNextMaintenance(e.target.value)} required className="w-full p-2 border rounded" />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded mr-2">Batal</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

TambahMaintenancePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default TambahMaintenancePopup;
