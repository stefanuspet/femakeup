import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/AdminSidebar";
import Header from "../components/Header/HeaderAdmin";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAllowed, setIsAllowed] = useState(true);

    useEffect(() => {
      const role = localStorage.getItem("role");
      if (role !== "admin") {
        navigate("/");
      }
    }, []);

  useEffect(() => {
    // Check if the screen width is larger than 768px
    const checkScreenWidth = () => {
      if (window.innerWidth < 1024) {
        setIsAllowed(false);
      } else {
        setIsAllowed(true);
      }
    };

    // Initial check
    checkScreenWidth();

    // Listen for window resize events
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  if (!isAllowed) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Dashboard hanya bisa diakses melalui perangkat laptop.</h1>
      </div>
    );
  }
  return (
    <div className="bg-white">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="container mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DashboardLayout;
