import React from "react";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin";

// views

// import Dashboard from "views/admin/Dashboard.js";
// import Maps from "views/admin/Maps.js";
// import Settings from "views/admin/Settings.js";
// import Tables from "views/admin/Tables.js";
// import Child from "views/admin/Child";
// import Employee from "views/admin/Employee";
// import AddChild from "views/admin/AddChild";
// import TablesAccount from "views/admin/TablesAccount";
// import TablesWebsite from "views/admin/TablesWebsite";
// import AddPage from "views/admin/AddPage";
// import TablesListPost from "views/admin/TablesListPost";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />

        <div className="mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
