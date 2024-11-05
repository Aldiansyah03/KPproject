import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import Search from "./Search";
import TambahBarangPopup from "../StockBarang/tambahbarangPopup";
import EditBarangPopup from "../StockBarang/editbarangPopup";
import DeleteBarangPopup from "../StockBarang/DelatebarangPopup";

const StokBarang = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Menampilkan 4 item per halaman
  const [inventoryData, setInventoryData] = useState([
    { id: 1, nama: "Laptop", jenis: "Elektronik", merk: "Dell", stock: 10, satuan: "Unit", tglPembelian: "12-8-2023" },
    { id: 2, nama: "Printer LaserJet", jenis: "Elektronik", merk: "HP", stock: 5, satuan: "Unit", tglPembelian: "12-8-2023" },
    { id: 3, nama: "Proyektor", jenis: "Elektronik", merk: "Epson", stock: 3, satuan: "Unit", tglPembelian: "12-8-2023" },
    { id: 4, nama: "Router Wireless", jenis: "Jaringan", merk: "Cisco", stock: 7, satuan: "Unit", tglPembelian: "12-8-2023" },
    { id: 5, nama: "Monitor LED 24 inch", jenis: "Elektronik", merk: "LG", stock: 5, satuan: "Unit", tglPembelian: "12-8-2023" },
    { id: 6, nama: "UPS 1000VA", jenis: "Elektronik", merk: "APC", stock: 8, satuan: "Unit", tglPembelian: "12-8-2023" },
    { id: 7, nama: "Switch HUB 16", jenis: "Jaringan", merk: "TP-Link", stock: 8, satuan: "Unit", tglPembelian: "12-8-2023" },
    { id: 8, nama: "Kabel LAN", jenis: "Jaringan", merk: "Belden", stock: 30, satuan: "Roll", tglPembelian: "12-8-2023" },
  ]);

  // State untuk mengontrol popup
  const [isTambahPopupOpen, setIsTambahPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fungsi untuk membuka popup tambah, edit, dan delete
  const openTambahPopup = () => setIsTambahPopupOpen(true);
  const openEditPopup = (item) => {
    setSelectedItem(item);
    setIsEditPopupOpen(true);
  };
  const openDeletePopup = (item) => {
    setSelectedItem(item);
    setIsDeletePopupOpen(true);
  };

  // Fungsi untuk menambah, mengedit, dan menghapus item
  const handleAddItem = (newItem) => setInventoryData([...inventoryData, newItem]);
  const handleEditItem = (updatedItem) => {
    setInventoryData(
      inventoryData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setIsEditPopupOpen(false);
  };
  const handleDeleteItem = () => {
    setInventoryData(inventoryData.filter((item) => item.id !== selectedItem.id));
    setIsDeletePopupOpen(false);
  };

  // Filter data berdasarkan pencarian
  const filteredData = inventoryData.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const goToPreviousPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  const goToNextPage = () => setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : prevPage));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Daftar Inventaris Barang</h1>

      {/* Menggunakan komponen Search */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={openTambahPopup}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Tambah Barang
        </button>
        <Search
          value={search}
          onChange={setSearch}
          placeholder="Cari barang..."
        />
      </div>

      {/* Tabel Inventaris */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">NO</th>
              <th className="border border-gray-300 px-4 py-2">Nama Barang</th>
              <th className="border border-gray-300 px-4 py-2">Jenis</th>
              <th className="border border-gray-300 px-4 py-2">Merk</th>
              <th className="border border-gray-300 px-4 py-2">Stock</th>
              <th className="border border-gray-300 px-4 py-2">Satuan</th>
              <th className="border border-gray-300 px-4 py-2">Tgl Pembelian</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((item, index) => (
                <tr key={item.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{indexOfFirstItem + index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.nama}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.jenis}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.merk}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.stock}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.satuan}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.tglPembelian}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => openEditPopup(item)}
                      className="text-blue-500 hover:text-blue-700 mx-2"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => openDeletePopup(item)}
                      className="text-red-500 hover:text-red-700 mx-2"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  Data tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="join mt-4 flex justify-start items-center">
        <button onClick={goToPreviousPage} className="join-item btn" disabled={currentPage === 1}>
          «
        </button>
        <span className="join-item btn">Page {currentPage} of {totalPages}</span>
        <button onClick={goToNextPage} className="join-item btn" disabled={currentPage === totalPages}>
          »
        </button>
      </div>

      {/* Komponen Popup */}
      <TambahBarangPopup
        isOpen={isTambahPopupOpen}
        onClose={() => setIsTambahPopupOpen(false)}
        onSave={handleAddItem}
      />
      {selectedItem && (
        <EditBarangPopup
          isOpen={isEditPopupOpen}
          onClose={() => setIsEditPopupOpen(false)}
          onSave={handleEditItem}
          item={selectedItem}
        />
      )}
      <DeleteBarangPopup
        isOpen={isDeletePopupOpen}
        onClose={() => setIsDeletePopupOpen(false)}
        onConfirm={handleDeleteItem}
      />
    </div>
  );
};

export default StokBarang;
