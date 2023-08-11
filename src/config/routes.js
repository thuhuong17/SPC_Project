import Event from "../views/Event.js";
import Dashboard from "../views/admin/Dashboard";
import TablesAccount from "../views/admin/TablesAccount";
import Admin from "../layouts/Admin";
import Maps from "../views/admin/Maps";
import TableBudgets from "../views/admin/TableBudgets";
import TablesAdoption from "../views/admin/TableAdoption";
import TablesAdopters from "../views/admin/TableAdopter";
import Child from "../views/admin/Child";
import TableEmployee from "../views/admin/TableEmployee";
import TablesListPost from "../views/admin/TablesListPost";
import AddPage from "../views/admin/AddPage";
import Home from "../views/Home";
// import Service from "../views/Service";
import Contact from "../views/Contact";
import Donate from "../views/Donate";
import EventDetail from "../views/Event_detail";
import Adoption from "../views/Adoption";
import About from "../views/About";
import About_1 from "../views/About_1";
import About_2 from "../views/About_2";
import DonationResult from "../views/DonationResult.js";
import Catalog from "../views/Catalog.js";
import Article from "../views/Article.js";
import Donation from "../views/admin/Donation.js";
import AddChild from "../views/admin/AddChild.js";
import Employee from "../views/admin/Employee.js";
import Articles from "../views/admin/Articles.js";
import TableAdoptionNew from "../views/admin/TableAdoptionNew.js";
import TablesFinance from "../views/admin/TablesFinance.js";

const ROLES = {
  superAdmin: "SUPER_ADMIN",
  admin: "ADMIN",
  webAdmin: "WEB_ADMIN",
};

// Public routes for user without account
const publicRoutes = [
  //for web
  {
    path: "/",
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
  // {
  //   path: "/service",
  //   component: Service,
  // },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/about/chung-toi-la-ai",
    component: About_1,
  },
  {
    path: "/about/tam-nhin-va-su-menh",
    component: About_2,
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
  {
    path: "/thong-tin/:name/:id",
    component: Catalog,
  },
  {
    path: "/thong-tin/:categoryUrl/:articleUrl/:id",
    component: Article,
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
      {
        path: "/admin/budgets",
        component: TableBudgets,
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
        path: "/admin/addchild",
        component: AddChild,
        layout: Admin,
      },
      {
        path: "/admin/employee",
        component: Employee,
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
        component: TableAdoptionNew,
        layout: Admin,
      },
      {
        path: "/admin/budgets",
        component: TableBudgets,
        layout: Admin,
      },
      {
        path: "/admin/finance",
        component: TablesFinance,
        layout: Admin,
      },
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
