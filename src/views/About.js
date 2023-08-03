import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function About() {
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
                    THÔNG TIN VỀ CHÚNG TÔI
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
        <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/tre_em1.jpg").default}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 pt-20">
                <div className="md:pr-12">
                  {/* <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div> */}
                  <h3 className="text-3xl font-semibold">Chúng tôi là ai???</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Làng trẻ em SOS quốc tế hoạt động vì trẻ em tại 138 quốc gia và vùng lãnh thổ với vai trò là một tổ chức phát 
                  triển xã hội độc lập, phi chính phủ, phi chính trị và phi tôn giáo. 
                  ​Chúng tôi bảo vệ và chăm sóc trẻ mồ côi, bị bỏ rơi hoặc không thể nhận được sự chăm sóc từ gia đình.
                  Làng trẻ em SOS Việt Nam được thành lập vào năm 1987. Từ 2 Làng trẻ em SOS tại hai thành phố theo hiệp định đã ký, đến 
                nay Làng trẻ em SOS Việt Nam đã có mặt tại 17 tỉnh thành phố trong cả nước. 
                  </p>
               
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 pt-28 pb-24">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <h3 className="text-3xl font-semibold">Tầm nhìn</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Tất cả trẻ em đều cần có gia đình, lớn lên trong tình yêu thương, sự tôn trọng và an toàn
                  </p>
                  <h3 className="text-3xl font-semibold">Sứ mệnh</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Chúng tôi mang lại gia đình thay thế cho trẻ mồ côi, bị bỏ rơi và có hoàn cảnh đặc biệt khó khăn, giúp trẻ xây dựng tương lai tự lập, có ích và đóng góp vào sự phát triển của cộng đồng xung quanh trẻ.
                  </p>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 pt-20">
                <div className="md:pr-12">
                  {/* <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div> */}
                  <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/tre_em1.jpg").default}
                />
               
                </div>
              </div>
            </div>
          </div>
        
      </main>
      <Footer />
    </>
  );
}
