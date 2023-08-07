import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { Fragment } from "react";
import Auth from "layouts/Auth.js";
import PersistLogin from "components/PersistLogin";
import Login from "views/auth/Login";
import RequireAuth from "RequiredAuth";
import { publicRoutes, privateRoutes } from "./config/routes";

function App() {
  document.title = "Social Protecion Senter";
  return (
    <Router>
      <Routes>
        {/*Load routes from Public routes */}
        {publicRoutes.map((route, index) => {
          let Layout1 = Fragment;
          if (route.layout) {
            Layout1 = route.layout;
          } else if (route.layout === null) {
            Layout1 = Fragment;
          }
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Layout1>
            <Page />
          </Layout1>} />;
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
