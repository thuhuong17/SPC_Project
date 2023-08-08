import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Event() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://sldtbxh.bacgiang.gov.vn/documents/21423/16555458/1682048223663_20.4.23.jpg/557d4aa4-a634-4031-b364-2eaa0cd8d53e?t=1682048223666')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    THÔNG TIN SỰ KIỆN
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                  Thông tin cập nhật về các chương trình, dự án, hoạt động, câu chuyện từ Trung tâm của chúng tôi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        {/* start event */}
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            </div>
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Các sự kiện của chúng tôi</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Các chương trình quyên góp cho các bé
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/tre_em1.jpg").default}
                    className="shadow-lg rounded mx-auto max-w-250-px"
                  />
                  <div className="pt-6 text-center">
                    <Link to="/event/event_detail">
                    <h5 className="text-xl font-bold">Quyên góp cho trẻ em cùng cao Tây Bắc</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Cần rất nhiều tấm lòng từ miền xuôi
                    </p>
                    </Link>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/tre_em1.jpg").default}
                    className="shadow-lg rounded mx-auto max-w-250-px"
                  />
                  <div className="pt-6 text-center">
                  <Link to="/event/event_detail">
                    <h5 className="text-xl font-bold">Quyên góp cho trẻ em cùng cao Tây Bắc</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Cần rất nhiều tấm lòng từ miền xuôi
                    </p>
                    </Link>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/tre_em1.jpg").default}
                    className="shadow-lg rounded mx-auto max-w-250-px"
                  />
                  <div className="pt-6 text-center">
                  <Link to="/event/event_detail">
                    <h5 className="text-xl font-bold">Quyên góp cho trẻ em cùng cao Tây Bắc</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Cần rất nhiều tấm lòng từ miền xuôi
                    </p>
                    </Link>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/tre_em1.jpg").default}
                    className="shadow-lg rounded mx-auto max-w-250-px"
                  />
                  <div className="pt-6 text-center">
                  <Link to="/event/event_detail">
                    <h5 className="text-xl font-bold">Quyên góp cho trẻ em cùng cao Tây Bắc</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Cần rất nhiều tấm lòng từ miền xuôi
                    </p>
                    </Link>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </section>
      </main>
      <Footer />
    </>
  );
}
