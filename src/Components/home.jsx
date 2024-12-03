import { useState, useEffect } from "react";

const Home = () => {
  // Mock data barang dan maintenance
  const [maintenanceData] = useState([ // Hanya menggunakan state untuk data statis
    { id: 1, nama: "Laptop", lokasi: "Ruang Admin", nextMaintenance: "2024-12-05", status: "Pending" },
    { id: 2, nama: "Printer LaserJet", lokasi: "Ruang IT Support", nextMaintenance: "2024-12-01", status: "Completed" },
    { id: 3, nama: "Proyektor", lokasi: "Ruang Meeting", nextMaintenance: "2024-12-15", status: "Pending" },
    { id: 4, nama: "Router Wireless", lokasi: "Gudang Jaringan", nextMaintenance: "2024-11-20", status: "Completed" },
    { id: 5, nama: "Monitor LED 24 inch", lokasi: "Ruang Meeting", nextMaintenance: "2025-01-10", status: "Pending" },
  ]);

  const [upcomingMaintenance, setUpcomingMaintenance] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const sevenDaysLater = new Date();
    sevenDaysLater.setDate(currentDate.getDate() + 7);

    const upcoming = maintenanceData.filter((item) => {
      const maintenanceDate = new Date(item.nextMaintenance);
      const timeDifference = maintenanceDate - currentDate;
      const daysUntilMaintenance = timeDifference / (1000 * 3600 * 24);
      
      return daysUntilMaintenance <= 7 && daysUntilMaintenance >= 0;
    });

    setUpcomingMaintenance(upcoming);
  }, [maintenanceData]);

  return (
    <div className="p-4">
      <h1 className="text-black font-bold text-2xl mb-4">Selamat Datang di Dashboard</h1>

      {/* Notifikasi Deadline Maintenance */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Notifikasi Maintenance Barang</h2>

        {upcomingMaintenance.length > 0 ? (
          <div className="space-y-4">
            {upcomingMaintenance.map((item) => (
              <div
                key={item.id}
                className={`p-4 rounded-lg shadow-md ${
                  item.status === "Pending" ? "bg-yellow-100 border-yellow-500" : "bg-green-100 border-green-500"
                } border-l-4`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.nama}</h3>
                    <p className="text-sm text-gray-600">{item.lokasi}</p>
                    <p className="text-sm text-gray-500">
                      Maintenance Terjadwal: {new Date(item.nextMaintenance).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      item.status === "Pending" ? "text-yellow-600" : "text-green-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Tidak ada maintenance dalam waktu dekat.</p>
        )}
      </div>


    </div>
  );
};

export default Home;
