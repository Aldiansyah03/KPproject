import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import StokBarang from "./Components/StockBarang";
import ManageUser from "./Components/ManageUser";
import Maintenance from "./Components/Maintenance";
import Profile from "./Components/Profile";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
          <Navbar onToggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
          <div className="p-4 mt-20 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/stokbarang" element={<StokBarang />} />
              <Route path="/manageuser" element={<ManageUser />} />
              <Route path="/maintenance" element={<Maintenance />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
