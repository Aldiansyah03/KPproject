import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const EditBarangPopup = ({ isOpen, onClose, onSave, item }) => {
  // Initialize state for input fields
  const [nama, setNama] = useState("");
  const [jenis, setJenis] = useState("");
  const [merk, setMerk] = useState("");
  const [stock, setStock] = useState("");
  const [satuan, setSatuan] = useState("");
  const [tglPembelian, setTglPembelian] = useState("");

  // Use useEffect to update state when the `item` prop changes
  useEffect(() => {
    if (item) {
      setNama(item.nama || "");
      setJenis(item.jenis || "");
      setMerk(item.merk || "");
      setStock(item.stock || "");
      setSatuan(item.satuan || "");
      setTglPembelian(item.tglPembelian || "");
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...item,
      nama,
      jenis,
      merk,
      stock: Number(stock),
      satuan,
      tglPembelian,
    });
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Edit Barang</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {/* Form Input */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <label className="block text-gray-700 font-semibold">Nama Barang</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              placeholder="Nama Barang"
              style={{ backgroundColor: "#B8C7F3" }}
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-gray-700 font-semibold">Jenis Barang</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              placeholder="Jenis Barang"
              style={{ backgroundColor: "#B8C7F3" }}
              value={jenis}
              onChange={(e) => setJenis(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-gray-700 font-semibold">Merk</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              placeholder="Merk"
              style={{ backgroundColor: "#B8C7F3" }}
              value={merk}
              onChange={(e) => setMerk(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-gray-700 font-semibold">Stock</label>
            <input
              type="number"
              className="w-full p-2 border rounded text-black"
              placeholder="Stock"
              style={{ backgroundColor: "#B8C7F3" }}
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-gray-700 font-semibold">Satuan</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              placeholder="Satuan"
              style={{ backgroundColor: "#B8C7F3" }}
              value={satuan}
              onChange={(e) => setSatuan(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-gray-700 font-semibold">Tanggal Pembelian</label>
            <input
              type="date"
              className="w-full p-2 border rounded text-black"
              style={{ backgroundColor: "#B8C7F3" }}
              value={tglPembelian}
              onChange={(e) => setTglPembelian(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end mt-4">
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

EditBarangPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  item: PropTypes.shape({
    nama: PropTypes.string,
    jenis: PropTypes.string,
    merk: PropTypes.string,
    stock: PropTypes.number,
    satuan: PropTypes.string,
    tglPembelian: PropTypes.string,
  }).isRequired,
};

export default EditBarangPopup;
