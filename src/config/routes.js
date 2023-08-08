import Event from "views/Event.js";
import Dashboard from "views/admin/Dashboard";
import TablesAccount from "views/admin/TablesAccount";
import Admin from "layouts/Admin";
import Maps from "views/admin/Maps";
import TableBudgets from "views/admin/TableBudgets";
import TablesAdoption from "views/admin/TableAdoption";
import TablesAdopters from "views/admin/TableAdopter";
import Child from "views/admin/Child";
import Settings from "views/admin/Settings";
import Service from "views/Service";
import Contact from "views/Contact";
import Donate from "views/Donate";
import DonationResult from "views/DonationResult";
import TableEmployee from "views/admin/TableEmployee";
import Donation from "views/admin/Donation";
import Home from "views/Home";
import EventDetail from "views/Event_detail";
import Adoption from "views/Adoption";
import About from "views/About";
import Articles from "views/admin/Articles";

const ROLES = {
  superAdmin: "SUPER_ADMIN",
  admin: "ADMIN",
  webAdmin: "WEB_ADMIN",
};

// Public routes for user without account
const publicRoutes = [
  //for web
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/event",
    component: Event,
  },
  {
    path: "/event/event_detail",
    component: EventDetail,
  },
  {
    path: "/service",
    component: Service,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/adoption",
    component: Adoption,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/donate",
    component: Donate,
  },
  {
    path: "/donate/return",
    component: DonationResult,
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
      {
        path: "/admin/dashboard",
        component: Dashboard,
        layout: Admin,
      },
    ],
  },
  {
    roles: [ROLES.admin, ROLES.superAdmin],

    routes: [
      {
        path: "/admin/maps",
        component: Maps,
        layout: Admin,
      },
      {
        path: "/admin/settings",
        component: Settings,
        layout: Admin,
      },
      {
        path: "/admin/child",
        component: Child,
        layout: Admin,
      },

      {
        path: "/admin/employee",
        component: TableEmployee,
        layout: Admin,
      },
      {
        path: "/admin/donations",
        component: Donation,
        layout: Admin,
      },
      {
        path: "/admin/website",
        component: Articles,
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
    ],
  },
  // Route for admin roles
  // Route for web admin roles
];

export { publicRoutes, privateRoutes };
