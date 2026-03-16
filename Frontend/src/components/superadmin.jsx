import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Homepage from "../pages/homepage";
import ManageUser from "../pages/manage_user";
import Attendance from "../pages/attendance";

function Superadmin() {

  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white w-64 p-5 fixed h-full transition-transform
        ${open ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}
      >
        <h1 className="text-xl font-bold mb-6">Super Admin</h1>

        <Link
          to="/superadmin/homepage"
          className="block w-full text-left p-2 rounded hover:bg-gray-700"
        >
          Homepage
        </Link>

        <Link
          to="/superadmin/manage_user"
          className="block w-full text-left p-2 rounded hover:bg-gray-700 mt-2"
        >
          Manage User
        </Link>

        <Link
          to="/superadmin/attendance"
          className="block w-full text-left p-2 rounded hover:bg-gray-700 mt-2"
        >
          Attendance
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64">

        {/* Topbar */}
        <div className="bg-white shadow p-4 flex items-center">
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <h2 className="ml-4 font-semibold text-lg">
            Super Admin Panel
          </h2>
        </div>

        {/* Page Content */}
        <div className="p-6">

          <Routes>
            <Route path="homepage" element={<Homepage />} />
            <Route path="manage_user" element={<ManageUser />} />
            <Route path="attendance" element={<Attendance />} />
          </Routes>

        </div>

      </div>

    </div>
  );
}

export default Superadmin;