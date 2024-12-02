import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Search from "./Search";
import DeleteConfirmationPopup from "../ManageUser/DeleteConfirmationPopup";
import UserFormPopup from "../ManageUser/UserFormPopup";
import EditUserPopup from "../ManageUser/EditUserPopup"; // Import komponen EditUserPopup

const ManageUser = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Tambahkan state untuk mengontrol EditUserPopup
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Data pengguna contoh
  const [userData, setUserData] = useState([
    { id: 1, nama: "Lindsey Stroud", email: "lindsey.stroud@gmail.com", divisi: "Technology Department", role: "Head of Technology", avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp" },
    { id: 2, nama: "Sarah Brown", email: "sarah.brown@gmail.com", divisi: "Technology Department", role: "Lead Developer", avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp" },
    { id: 3, nama: "Michael Owen", email: "michael.owen@gmail.com", divisi: "Technology Department", role: "Backend Engineer", avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp" },
    { id: 4, nama: "Mary Jane", email: "mary.jane@gmail.com", divisi: "Technology Department", role: "Project Manager", avatar: "https://img.daisyui.com/images/profile/demo/5@94.webp" },
    { id: 5, nama: "Peter Doodle", email: "peter.doodle@gmail.com", divisi: "Technology Department", role: "UX Designer", avatar: "https://img.daisyui.com/images/profile/demo/6@94.webp" },
  ]);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  const filteredData = userData.filter(user =>
    user.nama.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const goToPreviousPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  const goToNextPage = () => setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : prevPage));

  // Fungsi untuk menampilkan popup konfirmasi hapus
  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setIsDeletePopupOpen(true);
  };

  // Fungsi untuk menghapus pengguna setelah konfirmasi
  const confirmDelete = () => {
    setUserData(userData.filter(user => user.id !== userToDelete.id));
    setIsDeletePopupOpen(false);
    setUserToDelete(null);
  };

  // Fungsi untuk menampilkan popup edit
  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditPopupOpen(true);
  };

  // Fungsi untuk menyimpan perubahan dari EditUserPopup
  const handleSaveEdit = (updatedUser) => {
    setUserData(userData.map(user => user.id === updatedUser.id ? updatedUser : user));
    setIsEditPopupOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="p-8">
  <h1 className="text-3xl font-bold mb-6 text-gray-800">User Management</h1>

  {/* Komponen Search */}
  <div className="flex justify-between items-center mb-4">
    <button
      onClick={togglePopup}
      className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
    >
      Tambah Pengguna
    </button>
    <Search
      value={search}
      onChange={setSearch}
      placeholder="Cari pengguna..."
    />
  </div>

  {/* Tabel Data Pengguna */}
  <div className="overflow-x-auto">
    <table className="table w-full border-collapse border border-gray-300 min-w-[600px]">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-gray-800">NO</th>
          <th className="border border-gray-300 px-4 py-2 text-gray-800">Nama</th>
          <th className="border border-gray-300 px-4 py-2 text-gray-800">Email Address</th>
          <th className="border border-gray-300 px-4 py-2 text-gray-800">Divisi</th>
          <th className="border border-gray-300 px-4 py-2 text-gray-800">Role</th>
          <th className="border border-gray-300 px-4 py-2 text-gray-800">Action</th>
        </tr>
      </thead>

      <tbody>
        {currentData.length > 0 ? (
          currentData.map((user, index) => (
            <tr key={user.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2 text-gray-600">{indexOfFirstItem + index + 1}</td>
              <td className="border border-gray-300 px-4 py-2 text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={user.avatar} alt={`${user.nama}'s avatar`} />
                    </div>
                  </div>
                  <div className="font-bold">{user.nama}</div>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-600">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2 text-gray-600">{user.divisi}</td>
              <td className="border border-gray-300 px-4 py-2 text-gray-600">{user.role}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button onClick={() => handleEditClick(user)} className="text-blue-500 hover:text-blue-700 mx-2">
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDeleteClick(user)}
                  className="text-red-500 hover:text-red-700 mx-2"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="text-center py-4 text-gray-500">
              Data tidak ditemukan
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

  {/* Pagination Controls */}
  <div className="bg-white join mt-4 flex justify-start items-center rounded shadow-md p-2">
    <button
      onClick={goToPreviousPage}
      className={`join-item btn px-4 py-2 mr-2 ${currentPage === 1 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
      disabled={currentPage === 1}
    >
      «
    </button>
    <span className="join-item px-6 py-2 bg-white text-gray-800 font-medium">
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={goToNextPage}
      className={`join-item btn px-4 py-2 ml-2 ${currentPage === totalPages ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
      disabled={currentPage === totalPages}
    >
      »
    </button>
  </div>

  {/* Popup Tambah Pengguna */}
  <UserFormPopup isOpen={isPopupOpen} onClose={togglePopup} />

  {/* Popup Edit Pengguna */}
  <EditUserPopup
    isOpen={isEditPopupOpen}
    onClose={() => setIsEditPopupOpen(false)}
    onSave={handleSaveEdit}
    user={selectedUser}
  />

  {/* Popup Konfirmasi Hapus */}
  <DeleteConfirmationPopup
    isOpen={isDeletePopupOpen}
    onClose={() => setIsDeletePopupOpen(false)}
    onConfirm={confirmDelete}
  />
</div>

  );
};

export default ManageUser;
