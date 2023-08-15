/*eslint-disable*/
import AboutDropDown from "components/Dropdowns/AboutDropdown";
import AdoptionDropDown from "components/Dropdowns/AdoptionDropdown";
import EventDropDown from "components/Dropdowns/EventDropdown";
import React from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/home"
            >
              {/* <Image src="./img/logo.png"></Image> */}
              TRUNG TÂM BẢO TRỢ XÃ HỘI - SPC
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <br></br>

            <ul className=" flex flex-col lg:flex-row list-none ml-auto center">
              <li className="flex items-center justify-between">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-1 lg:py-2 flex items-center text-xs uppercase font-bold justify-between"
                  href="/home"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 text-lg leading-lg mr-2" />{" "}
                  Trang chủ
                </a>
              </li>
              <li className="flex items-center">
                <EventDropDown />
              </li>
              <li className="flex items-center">
                <AdoptionDropDown />
              </li>
              <li className="flex items-center">
                <AboutDropDown />
              </li>
            </ul>

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* search */}
        

              <li className="flex items-center">
                <button
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-1 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link to="/donate">
                    <i className=""></i> QUYÊN GÓP NGAY
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
