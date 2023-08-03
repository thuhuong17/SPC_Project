import Event from "views/Event.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Dashboard from "views/admin/Dashboard";
import TablesAccount from "views/admin/TablesAccount";
import Admin from "layouts/Admin";
import Maps from "views/admin/Maps";
import TableBudgets from "views/admin/TableBudgets";
import TablesAdoption from "views/admin/TableAdoption";
import TablesAdopters from "views/admin/TableAdopter";
// import TablesWebsite from "views/admin/TablesWebsite";
import Child from "views/admin/Child";
import TableEmployee from "views/admin/TableEmployee";
import TablesListPost from "views/admin/TablesListPost";
import AddPage from "views/admin/AddPage";
import Adoption from "views/Adoption";

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
    path: "/adoption",
    component: Adoption,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/admin",
    component: Dashboard,
    layout: Admin,
  },
  {
    path: "/admin/maps",
    component: Maps,
    layout: Admin,
  },
  // {
  //   path: "/admin/settings",
  //   component: Settings,
  //   layout: Admin,
  // },
  {
    path: "/admin/child",
    component: Child,
    layout: Admin,
  },
  // {
  //   path: "/admin/addchild",
  //   component: AddChild,
  //   layout: Admin,
  // },
  {
    path: "/admin/employee",
    component: TableEmployee,
    layout: Admin,
  },
  {
    path: "/admin/website",
    component: TablesListPost,
    layout: Admin,
  },
  {
    path: "/admin/add-page",
    component: AddPage,
    layout: Admin,
  },
  {
    path: "/admin/adopters",
    component: TablesAdopters,
    layout: Admin,
  },
  {
    path: "/admin/adoption",
    component: TablesAdoption,
    layout: Admin,
  },
  {
    path: "/admin/budgets",
    component: TableBudgets,
    layout: Admin,
  },
  {
    path: "/admin/accounts",
    component: TablesAccount,
    layout: Admin,
  },
  {
    path: "/admin/dashboard",
    component: Dashboard,
    layout: Admin,
  },
];

// Private routes for admin with account
const privateRoutes = [
  // Routes for all roles
  {
    roles: [ROLES.admin, ROLES.superAdmin, ROLES.webAdmin],
    routes: [
      // {
      //   path: "/admin",
      //   component: Dashboard,
      //   layout: Admin,
      // },
    ],
  },
  // Route for super admin roles
  {
    roles: [ROLES.superAdmin],
    routes: [
      // {
      //   path: "/admin/accounts",
      //   component: TablesAccount,
      //   layout: Admin,
      // },
      // {
      //   path: "/admin/dashboard",
      //   component: Dashboard,
      //   layout: Admin,
      // },
    ],
  },
  {
    roles: [ROLES.admin, ROLES.superAdmin],

    routes: [
      // {
      //   path: "/admin/maps",
      //   component: Maps,
      //   layout: Admin,
      // },
      // {
      //   path: "/admin/settings",
      //   component: Settings,
      //   layout: Admin,
      // },
      // {
      //   path: "/admin/child",
      //   component: Child,
      //   layout: Admin,
      // },
      // {
      //   path: "/admin/addchild",
      //   component: AddChild,
      //   layout: Admin,
      // },
      // {
      //   path: "/admin/employee",
      //   component: TableEmployee,
      //   layout: Admin,
      // },
      // {
      //   path: "/admin/website",
      //   component: TablesWebsite,
      //   layout: Admin,
      // },
      // {
      //   path: "/admin/adopters",
      //   component: TablesAdopters,
      //   layout: Admin,
      // },
      // {
      //   path: "/admin/adoption",
      //   component: TablesAdoption,
      //   layout: Admin,
      // },
      // {
      //   path: "/admin/budgets",
      //   component: TableBudgets,
      //   layout: Admin,
      // },
    ],
  },
  // Route for admin roles
  // Route for web admin roles
];

export { publicRoutes, privateRoutes };
