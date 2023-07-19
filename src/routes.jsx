import { Home, About, Event, Service, Profile, SignIn, SignUp, Contact } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: CalendarDaysIcon,
    name: "events",
    path: "/event",
    element: <Event />,
  },
  {
    icon: WrenchScrewdriverIcon,
    name: "services",
    path: "/service",
    element: <Service />,
  },
  
  {
    icon: UserCircleIcon,
    name: "about",
    path: "/about",
    element: <About />,
  },

  {
    icon: PhoneIcon,
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  // {
  //   icon: DocumentTextIcon,
  //   name: "about",
  //   href: "",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
