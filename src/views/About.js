import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";

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
        {/* start layout 1 */}
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
Chúng tôi là ai ?</h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Trung tâm chúng tôi hoạt động vì trẻ em tại Việt Nam với vai trò là một tổ chức phát 
                  triển xã hội độc lập, phi chính phủ, phi chính trị và phi tôn giáo. 
                  ​Chúng tôi bảo vệ và chăm sóc trẻ mồ côi, bị bỏ rơi hoặc không thể nhận được sự chăm sóc từ gia đình.
                  Trung tâm chúng tôi được thành lập vào năm 1987. Từ 2 Làng trẻ em SOS tại hai thành phố theo hiệp định đã ký, đến 
                nay Làng trẻ em SOS Việt Nam đã có mặt tại 17 tỉnh thành phố trong cả nước.                 </p>
                
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={require("../assets/img/tre_em1.jpg").default}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Những mầm non của tương lai
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    Tuổi thơ không chỉ đẹp nhất khi được chơi đùa thỏa thích mà còn là những ngày tháng ở bên cạnh anh chị em của mình. 
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* ///// */}
        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
</svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("../assets/img/tre_em1.jpg").default}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Tầm nhìn</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Tất cả trẻ em đều cần có gia đình, lớn lên trong tình yêu thương, sự tôn trọng và an toàn
                  </p>
                  <h3 className="text-3xl font-semibold">Sứ mệnh</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Chúng tôi mang lại gia đình thay thế cho trẻ mồ côi, bị bỏ rơi và có hoàn cảnh đặc biệt khó khăn, giúp trẻ xây dựng tương lai tự lập, có ích và đóng góp vào sự phát triển của cộng đồng xung quanh trẻ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                GIÁ TRỊ CỐT LÕI
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../assets/img/tre_em1.jpg").default}
                    className="shadow-lg rounded mx-auto max-w-250-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">SỰ CAN ĐẢM</h5>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../assets/img/tre_em1.jpg").default}
                    className="shadow-lg rounded mx-auto max-w-250-px"
                  />
                  <div className="pt-6 text-center">
<h5 className="text-xl font-bold">SỰ TIN TƯỞNG</h5>
                    
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../assets/img/tre_em1.jpg").default}
                    className="shadow-lg rounded mx-auto max-w-250-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">SỰ MINH BẠCH</h5>
                    
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../assets/img/tre_em1.jpg").default}
                    className="shadow-lg rounded mx-auto max-w-250-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">SỰ CAM KẾT</h5>
                  
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-5xl font-semibold">Giá trị cốt lõi</h2>
                <p className="text-xl">Sự can đảm</p>
                <p className="text-xl">Sự tin tưởng</p>
                <p className="text-xl">Sự minh bạch</p>
                <p className="text-xl">Sự cam kết</p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-/12 lg:w-7/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../assets/img/tre_em1.jpg").default}
                    className="shadow-lg rounded mx-auto max-w-250-px"
                  />
                  
                </div>
              </div>
            </div>
            </div>
        </section> */}
        
      </main>
      <Footer />
    </>
  );
}