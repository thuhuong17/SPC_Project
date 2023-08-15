import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";

export default function About_1() {
  return (
    <>
      <Navbar transparent />
      <main>
        {/* start layout 1 */}
        <section className="pb-20 bg-blueGray-200 -mt-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-justify">
                Chúng tôi là ai ?</h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600 text-justify">
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
                    <h4 className="text-xl font-bold text-white ">
                      Những mầm non của tương lai
                    </h4>
                    <p className=" text-justify text-md font-light mt-2 text-white">
                    Tuổi thơ không chỉ đẹp nhất khi được chơi đùa thỏa thích mà còn là những ngày tháng ở bên cạnh anh chị em của mình. 
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* ///// */}
        
      </main>
      <Footer />
    </>
  );
}
