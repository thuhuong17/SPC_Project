import React from "react";
import { Switch, Route, Redirect, Routes, Navigate } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";

import TablesAccount from "views/admin/TablesAccount";
import TablesWebsite from "views/admin/TablesWebsite";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {/* <Routes>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/accounts" exact component={TablesAccount} />
            <Route path="/admin/website" exact component={TablesWebsite} />
            <Route
              path="/admin/*"
              element={<Navigate to="/admin/dashboard" replace />}
            />
          </Routes> */}
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
