import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import "../assets/styles/donation.css";
import apiMethod from "api/apiMethod";

export default function Donate() {
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({});
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState({});
  const [wards, setWards] = useState([]);
  const [ward, setWard] = useState({});

  const [amountInputState, setAmountInputState] = useState(false);
  const [amount, setAmount] = useState(300000);
  const [message, setMessage] = useState("");

  const [formInfor, setFormInfor] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    gender: "nam",
    birthDay: "",
    addressPermanent: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    const getCity = async () => {
      axios
        .get(
          "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
        )
        .then((res) => {
          const data = res.data;
          setCities(data);
        })
        .catch((error) => console.log(error));
    };
    getCity();
  }, []);

  useEffect(() => {
    const dist = city.Districts;
    if (dist != undefined) {
      setDistrict({});
      setDistricts(dist);
    }
  }, [city]);

  useEffect(() => {
    const war = district.Wards;
    if (war != undefined) {
      setWard({});
      setWards(war);
    }
  }, [district]);

  const handleCityChange = (e) => {
    const index = e.target.value;
    setCity(cities.at(index));
  };

  const handleDistrictChange = (e) => {
    const index = e.target.value;
    setDistrict(districts.at(index));
  };

  const handleWardChange = (e) => {
    const index = e.target.value;
    setWard(wards.at(index));
  };

  const handleBtnAmoutIpClick = () => {
    setAmountInputState(true);
  };

  const handleBtnAmoutDefaultClick = () => {
    setAmountInputState(false);
    setAmount(300000);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleInputChange = (e) => {
    setFormInfor({
      ...formInfor,
      [e.target.name]: e.target.value,
    });
  };

  console.log(message);

  const handleBtnClick = async () => {
    // window.location.replace(
    //   "https://sandbox.vnpayment.vn/apis/docs/thanh-toan-pay/pay.html#danh-s%C3%A1ch-tham-s%E1%BB%91-1"
    // );

    let address = formInfor.addressPermanent;
    if (ward.Name != undefined) address = address + ", " + ward.Name;
    if (district.Name != undefined) address = address + ", " + district.Name;
    if (city.Name != undefined) address = address + ", " + city.Name;
    formInfor.addressPermanent = address;

    formInfor.fullName = formInfor.lastName + " " + formInfor.firstName;

    var newDate = new Date(formInfor.birthDay);
    let dateMDY = `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;
    formInfor.birthDay = dateMDY;

    const params = {
      donor: formInfor,
      amount: amount,
      urlReturn: "http://localhost:3000/donate/return",
      message: message,
    };

    console.log(params);

    // console.log(formInfor);
    // console.log(amount);
    try {
      const response = await apiMethod.postDonation(params);
      console.log(response);
      window.location.replace(response.urlRedirect);
    } catch (error) {
      if (!error?.response) {
        console.log("No server response");
      } else {
        console.log(error.response);
      }
    }
    // console.log(response);
  };

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
                    Đăng ký tài trợ
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
              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Đăng ký tài trợ
                </h3>
                <h3 className="text-xl mb-2 font-semibold leading-normal">
                  Mức tài trợ (VND)
                </h3>
                <div className="form-group">
                  <div className="flex justify-between flex-row">
                    <button
                      className={
                        (amountInputState
                          ? "bg-white text-black btn-border-baleBlue"
                          : "bg-lightBlue-500 text-white") +
                        " active:bg-lightBlue-600 text-md font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ease-linear transition-all duration-150"
                      }
                      onClick={handleBtnAmoutDefaultClick}
                      type="button"
                    >
                      300.000 VND
                    </button>
                    <button
                      className={
                        (amountInputState
                          ? "bg-lightBlue-500 text-white"
                          : "bg-white text-black btn-border-baleBlue") +
                        " hover:bg-lightBlue-600 active:bg-lightBlue-600 text-md font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ease-linear transition-all duration-150"
                      }
                      onClick={handleBtnAmoutIpClick}
                      type="button"
                    >
                      Mức khác
                    </button>
                    <div className="ip-donate">
                      <input
                        style={
                          amountInputState
                            ? { visibility: "visible" }
                            : { visibility: "hidden" }
                        }
                        id="input-amount"
                        name="amount"
                        min="300000"
                        value={amount}
                        onChange={handleAmountChange}
                        type="number"
                        placeholder="300.000 VND"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Thông tin nhà tài trợ
                </h3>
                <form className="form-donate">
                  <em>
                    <small>
                      Các trường có đánh dấu * là thông tin bắt buộc phải nhập.
                    </small>
                  </em>
                  <div className="form-group">
                    <select
                      class="form-select"
                      id="gender"
                      name="gender"
                      value={formInfor.gender}
                      onChange={handleInputChange}
                    >
                      <option value="nam" selected>
                        Nam/Male
                      </option>
                      <option value="nữ">Nữ/Female</option>
                      <option value="khác">Khác/Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="flex justify-between fl-inputs">
                      <input
                        name="firstName"
                        value={formInfor.firstName}
                        type="text"
                        placeholder="Tên*"
                        onChange={handleInputChange}
                      />
                      <input
                        name="lastName"
                        value={formInfor.lastName}
                        type="text"
                        placeholder="Họ và tên đệm*"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      name="birthDay"
                      value={formInfor.birthDay}
                      placeholder="Ngày sinh*"
                      type="text"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      class="form-select"
                      id="city"
                      name="city"
                      // value={city.Name}
                      onChange={handleCityChange}
                    >
                      <option value="" selected>
                        Chọn tỉnh thành
                      </option>
                      {cities.map((city, index) => (
                        <option key={index} value={index}>
                          {city.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      class="form-select"
                      id="district"
                      name="district"
                      onChange={handleDistrictChange}
                      defaultValue={district}
                    >
                      <option value="-1">Chọn quận/huyện</option>
                      {districts ? (
                        districts.map((district, index) => (
                          <option key={index} value={index}>
                            {district.Name}
                          </option>
                        ))
                      ) : (
                        <></>
                      )}
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      class="form-select"
                      id="ward"
                      name="ward"
                      onChange={handleWardChange}
                      defaultValue={ward}
                    >
                      <option value="-1">Chọn xã/phường</option>
                      {wards ? (
                        wards.map((ward, index) => (
                          <option key={index} value={index}>
                            {ward.Name}
                          </option>
                        ))
                      ) : (
                        <></>
                      )}
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      name="addressPermanent"
                      placeholder="Địa chỉ (Số nhà, thôn, xã, phường)"
                      type="text"
                      value={formInfor.addressPermanent}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="phoneNumber"
                      value={formInfor.phoneNumber}
                      placeholder="Số điện thoại*"
                      type="text"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      value={formInfor.email}
                      placeholder="Địa chỉ Email"
                      type="text"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      name="message"
                      value={message}
                      placeholder="Gửi lời nhắn đến với trung tâm"
                      type="text"
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-lg font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleBtnClick}
                  >
                    Tài trợ ngay
                  </button>
                </form>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://sosvietnam.org/getmedia/105ffb55-e428-4bf1-90a3-4249e49ed403/1-2.jpg?width=600&height=600&ext=.jpg"
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
                      TUỔI THƠ VÔ GIÁ KHI CÓ ANH CHỊ EM BÊN CẠNH
                    </h4>
                  </blockquote>
                  <img
                    alt="..."
                    src="https://sosvietnam.org/getmedia/819fc9d0-cf45-4c09-a556-16ebea9a641a/1-3.jpg?width=600&height=600&ext=.jpg"
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
                      Bớt đi một đứa trẻ đau khổ là thêm một người lớn hạnh phúc
                    </h4>
                  </blockquote>
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
