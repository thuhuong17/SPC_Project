import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  WrenchScrewdriverIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
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
    element: <Profile />,
  },
  {
    icon: WrenchScrewdriverIcon,
    name: "services",
    path: "/service",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "impact",
    path: "/impact",
    element: <SignUp />,
  },
  {
    icon: UserPlusIcon,
    name: "about",
    path: "/about",
    element: <About />,
  },
  {
    icon: DocumentTextIcon,
    name: "about",
    href: "",
    target: "_blank",
    element: "",
  },
];

export default routes;
