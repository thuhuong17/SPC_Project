import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { Fragment } from "react";
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Landing from "views/Landing.js";
import Event from "views/Event.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import PersistLogin from "components/PersistLogin";
import Login from "views/auth/Login";
import Dashboard from "views/admin/Dashboard";
import RequireAuth from "RequiredAuth";
import { publicRoutes, privateRoutes } from "./config/routes";
import Roles from "./constant/Roles";

function App() {
  document.title = "Social Protecion Senter";
  return (
    <Router>
      <Routes>
        {/*Load routes from Public routes */}
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}

        {/*Load routes from Private routes */}
        <Route element={<PersistLogin />}>
          <Route
            path="/auth/login"
            element={
              <Auth>
                <Login />
              </Auth>
            }
          />
          {privateRoutes.map((privateRoute, privateRouteIndex) => {
            return (
              <Route
                key={privateRouteIndex}
                element={<RequireAuth allowedRoles={privateRoute.roles} />}
              >
                {privateRoute.routes.map((route, index) => {
                  let Layout1 = Fragment;
                  if (route.layout) {
                    Layout1 = route.layout;
                  } else if (route.layout === null) {
                    Layout1 = Fragment;
                  }
                  const Page = route.component;
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <Layout1>
                          <Page />
                        </Layout1>
                      }
                    />
                  );
                })}
              </Route>
            );
          })}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
