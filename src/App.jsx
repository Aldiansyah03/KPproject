import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import StokBarang from "./Components/StockBarang";
import ManageUser from "./Components/ManageUser";
import Maintenance from "./Components/Maintenance";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Home from "./Components/Home"; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Halaman dengan Sidebar dan Navbar */}
        <Route
          path="/*"
          element={
            <div className="flex min-h-screen">
              {/* Sidebar */}
              <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
              />

              {/* Main Content Area */}
              <div
                className={`flex-1 flex flex-col transition-all duration-300 ${
                  isSidebarOpen ? "ml-64" : "ml-0"
                }`}
              >
                {/* Navbar */}
                <Navbar onToggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />

                <div className="p-4 mt-20 overflow-y-auto">
                  {/* Routes for Pages with Sidebar */}
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/stokbarang" element={<StokBarang />} />
                    <Route path="/manageuser" element={<ManageUser />} />
                    <Route path="/maintenance" element={<Maintenance />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
