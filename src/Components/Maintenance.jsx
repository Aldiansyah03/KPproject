import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Search from "./Search";
import TambahMaintenancePopup from "../Maintenance/tambahBarangPopup";
import EditMaintenancePopup from "../Maintenance/editpopup";
import DeleteMaintenancePopup from "../Maintenance/Delate";

const Maintenance = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [maintenanceData, setMaintenanceData] = useState([
    { id: 1, nama: "Laptop", lokasi: "Ruang Admin", lastMaintenance: "15-07-2024", nextMaintenance: "10-06-2025", status: "Pending" },
    { id: 2, nama: "Printer LaserJet", lokasi: "Ruang IT Support", lastMaintenance: "10-06-2024", nextMaintenance: "10-06-2025", status: "Completed" },
    { id: 3, nama: "Proyektor", lokasi: "Ruang Meeting", lastMaintenance: "10-06-2024", nextMaintenance: "10-06-2025", status: "Pending" },
    { id: 4, nama: "Router Wireless", lokasi: "Gudang Jaringan", lastMaintenance: "10-06-2024", nextMaintenance: "10-06-2025", status: "Completed" },
    { id: 5, nama: "Monitor LED 24 inch", lokasi: "Ruang Meeting", lastMaintenance: "10-06-2024", nextMaintenance: "10-06-2025", status: "Pending" },
    { id: 6, nama: "UPS 1000VA", lokasi: "Ruang Server", lastMaintenance: "10-06-2024", nextMaintenance: "10-06-2025", status: "Completed" },
    { id: 7, nama: "Switch HUB 16", lokasi: "Gudang Jaringan", lastMaintenance: "10-06-2024", nextMaintenance: "10-06-2025", status: "Pending" },
    { id: 8, nama: "Kabel LAN", lokasi: "Gudang Jaringan", lastMaintenance: "10-06-2024", nextMaintenance: "10-06-2025", status: "Completed" },
  ]);

  const [isTambahPopupOpen, setIsTambahPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openTambahPopup = () => setIsTambahPopupOpen(true);
  const openEditPopup = (item) => {
    setSelectedItem(item);
    setIsEditPopupOpen(true);
  };
  const openDeletePopup = (item) => {
    setSelectedItem(item);
    setIsDeletePopupOpen(true);
  };

  const handleAddMaintenance = (newItem) => setMaintenanceData([...maintenanceData, newItem]);
  const handleEditMaintenance = (updatedItem) => {
    setMaintenanceData(maintenanceData.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setIsEditPopupOpen(false);
  };
  const handleDeleteMaintenance = () => {
    setMaintenanceData(maintenanceData.filter((item) => item.id !== selectedItem.id));
    setIsDeletePopupOpen(false);
  };

  const filteredData = maintenanceData.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const goToPreviousPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  const goToNextPage = () => setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));

  return (
    <div className="p-8 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Maintenance Barang</h1>

      {/* Search dan Tombol Tambah */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={openTambahPopup}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Tambah Maintenance
        </button>
        <Search
          value={search}
          onChange={setSearch}
          placeholder="Cari maintenance..."
        />
      </div>

      {/* Tabel Data Maintenance */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-gray-800">NO</th>
              <th className="border border-gray-300 px-4 py-2 text-gray-800">Nama Barang</th>
              <th className="border border-gray-300 px-4 py-2 text-gray-800">Ruangan</th>
              <th className="border border-gray-300 px-4 py-2 text-gray-800">Last Maintenance</th>
              <th className="border border-gray-300 px-4 py-2 text-gray-800">Next Maintenance</th>
              <th className="border border-gray-300 px-4 py-2 text-gray-800">Status</th> {/* New Status Column */}
              <th className="border border-gray-300 px-4 py-2 text-gray-800">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((item, index) => (
                <tr key={item.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">
                    {indexOfFirstItem + index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">
                    {item.nama}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">
                    {item.lokasi}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">
                    {item.lastMaintenance}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">
                    {item.nextMaintenance}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">
                    {item.status} {/* Displaying status */}
                  </td>
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
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  Data tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white join mt-4 flex justify-start items-center rounded shadow-md p-2">
        <button
          onClick={goToPreviousPage}
          className={`join-item btn px-4 py-2 mr-2 ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={currentPage === 1}
        >
          «
        </button>
        <span className="join-item px-6 py-2 bg-white text-gray-800 font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          className={`join-item btn px-4 py-2 ml-2 ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>

      {/* Popup Tambah Maintenance */}
      <TambahMaintenancePopup
        isOpen={isTambahPopupOpen}
        onClose={() => setIsTambahPopupOpen(false)}
        onSave={handleAddMaintenance}
      />

      {/* Popup Edit Maintenance */}
      {selectedItem && (
        <EditMaintenancePopup
          isOpen={isEditPopupOpen}
          onClose={() => setIsEditPopupOpen(false)}
          onSave={handleEditMaintenance}
          item={selectedItem}
        />
      )}

      {/* Popup Konfirmasi Hapus */}
      <DeleteMaintenancePopup
        isOpen={isDeletePopupOpen}
        onClose={() => setIsDeletePopupOpen(false)}
        onConfirm={handleDeleteMaintenance}
      />
    </div>
  );
};

export default Maintenance;
