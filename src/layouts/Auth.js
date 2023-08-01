import React, { Children } from "react";
import { Switch, Route, Redirect, Routes, Navigate } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login";
import Register from "views/auth/Register.js";

export default function Auth({ children }) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          {children}
          {/* <Routes>
            <Route path="/auth/login" exact element={<Login />} />
            <Route path="/auth/register" exact element={<Register />} />
            <Route
              path="/auth"
              element={<Navigate to="/auth/login" replace />}
            />
          </Routes> */}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
