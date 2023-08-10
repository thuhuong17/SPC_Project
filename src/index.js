import React from "react";
import ReactDOM from "react-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css"
// import "assets/styles/tailwind.css";

import { AuthProvider } from "./context/AuthProviders";
import App from "./App";


ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);

