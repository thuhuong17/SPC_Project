import { Link } from "react-router-dom";
import React from "react"
export default function NavItem({ name, icon, url }) {
  console.log(icon);
  return (
    <li className="items-center">
      <Link
        className={
          "text-xs uppercase py-3 font-bold block " +
          (window.location.href.indexOf(url) !== -1
            ? "text-lightBlue-500 hover:text-lightBlue-600"
            : "text-blueGray-700 hover:text-blueGray-500")
        }
        to={url}
      >
        <i
          className={
            "fas " +
            `${icon}` +
            " mr-2 text-sm " +
            (window.location.href.indexOf(url) !== -1
              ? "opacity-75"
              : "text-blueGray-300")
          }
        ></i>{" "}
        {name}
      </Link>
    </li>
  );
}
