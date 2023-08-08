/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

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
              <li className="flex items-center justify-between">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-1 lg:py-2 flex items-center text-xs uppercase font-bold justify-between"
                  href="/event"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 text-lg leading-lg mr-2" />{" "}
                  Sự kiện
                </a>
              </li>
              <li className="flex items-center justify-between">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-1 lg:py-2 flex items-center text-xs uppercase font-bold justify-between"
                  href="/adoption"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 text-lg leading-lg mr-2" />{" "}
                  Đỡ đầu ngay
                </a>
              </li>
              <li className="flex items-center justify-between">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold justify-between"
                  href="/about"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 text-lg leading-lg mr-2" />{" "}
                  Giới thiệu
                </a>
              </li>
{/* search */}
              <li className="flex items-center justify-between">
              
              <input type="text" placeholder="Search" name="search"/>
              <div className="input-group-btn">
                  <i className="lg:text-blueGray-200 far fa-solid fa-magnifying-glass text-blueGray-400 text-lg leading-lg mr-2"></i>
              </div>
              </li>
            </ul>


            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <PagesDropdown />
              </li> */}
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
                  {/* <i class="fa-brands fa-square-instagram"></i> */}
                  <span className="lg:hidden inline-block ml-2">Instagram</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
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
