import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const AdoptionDropDown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <Link
        to="/adoption"
        className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        // href="#pablo"
        // ref={btnDropdownRef}
        // onClick={(e) => {
        //   e.preventDefault();
        //   dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        // }}
      >
        Nhận nuôi
      </Link>
      <div
      // ref={popoverDropdownRef}
      // className={
      //   (dropdownPopoverShow ? "block " : "hidden ") +
      //   "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      // }
      >
        {/* <Link
          to="/adoption"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Đăng ký nhận nuôi
        </Link>
        <Link
          to="/donate"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Chuyển khoản để giúp đỡ
        </Link> */}
      </div>
    </>
  );
};

export default AdoptionDropDown;
