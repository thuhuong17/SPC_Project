import apiMethod from "api/apiMethod";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import "../assets/styles/donation.css";

export default function DonationResult() {
  const search = window.location.search;
  const query = new URLSearchParams(search);

  console.log(query.size);
  useEffect(async () => {
    if (query.size != 0) {
      const params = {
        vnp_Amount: query.get("vnp_Amount"),
        vnp_BankCode: query.get("vnp_BankCode"),
        vnp_BankTranNo: query.get("vnp_BankTranNo"),
        vnp_CardType: query.get("vnp_CardType"),
        vnp_OrderInfo: query.get("vnp_OrderInfo"),
        vnp_PayDate: query.get("vnp_PayDate"),
        vnp_ResponseCode: query.get("vnp_ResponseCode"),
        vnp_TmnCode: query.get("vnp_TmnCode"),
        vnp_TransactionNo: query.get("vnp_TransactionNo"),
        vnp_TransactionStatus: query.get("vnp_TransactionStatus"),
        vnp_TxnRef: query.get("vnp_TxnRef"),
        vnp_SecureHash: query.get("vnp_SecureHash"),
      };
      console.log(params);

      const response = await apiMethod.postDonationResult(params);
      console.log(response);
    }
  }, []);

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://uploads.nguoidothi.net.vn/content/5f777939-cd4c-4543-9197-44bfa2d74a4a.jpg')",
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
                    Cảm ơn bạn đã tài trợ
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Khoản tiền tài trợ của bạn, dù lớn hay nhỏ, đều quan trọng
                    với chúng tôi trên hành trình mang lại nụ cười và tương lai
                    cho trẻ em mồ côi, bị bỏ rơi và có hoàn cảnh đặc biệt khó
                    khăn.
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

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap"></div>
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
