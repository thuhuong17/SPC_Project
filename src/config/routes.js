import Landing from "views/Landing.js";
import Event from "views/Event.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import { AuthProvider } from "context/AuthProviders";
import PersistLogin from "components/PersistLogin";
import Login from "views/auth/Login";
import Dashboard from "views/admin/Dashboard";
import TablesAccount from "views/admin/TablesAccount";
// import ROLES from "../constant/Roles";
import Admin from "layouts/Admin";

const ROLES = {
  superAdmin: "SUPER_ADMIN",
  admin: "ADMIN",
  webAdmin: "WEB_ADMIN",
};

// Public routes for user without account
const publicRoutes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/event",
    component: Event,
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

// Private routes for admin with account
const privateRoutes = [
  // Routes for all roles
  {
    roles: [ROLES.admin, ROLES.superAdmin, ROLES.webAdmin],
    routes: [
      {
        path: "/admin",
        component: Dashboard,
        layout: Admin,
      },
    ],
  },
  // Route for super admin roles
  {
    roles: [ROLES.superAdmin],
    routes: [
      {
        path: "/admin/accounts",
        component: TablesAccount,
        layout: Admin,
      },
    ],
  },
  // Route for admin roles
  // Route for web admin roles
];

export { publicRoutes, privateRoutes };
