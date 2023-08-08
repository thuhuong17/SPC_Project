import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Child from "views/admin/Child";
import Employee from "views/admin/Employee";
import AddChild from "views/admin/AddChild";
import TablesAccount from "views/admin/TablesAccount";
import TableAdoptionNew from "views/admin/TableAdoptionNew";
import TablesWebsite from "views/admin/TablesWebsite";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          
          {/* <Switch> */}
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/child" exact component={Child}/>
            <Route path="/admin/addchild" exact component={AddChild}/>
            <Route path="/admin/employee" exact component={Employee}/>
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/accounts" exact component={TablesAccount} />
            <Route path="/admin/website" exact component={TablesWebsite} />
            <Route path="/admin/adopters" exact component={TablesAdopters} />
            <Route path="/admin/citizenID" exact component={TablesCitizenID} />
            <Route path="/admin/adoption" exact component={TableAdoptionNew} />
            <Route path="/admin/budgets" exact component={TableBudgets} />
            <Redirect from="/admin" to="/admin/dashboard" />
          {/* </Switch> */}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
