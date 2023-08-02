import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import * as moment from "moment";

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

    // console.log(formInfor);
    // console.log(amount);
    try {
      const response = await apiMethod.postDonation(formInfor, amount);
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
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
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
                <div className="form-group">
                  <select name="bankcode" id="bankcode" class="form-control">
                    <option value="">Chọn ngân hàng </option>
                    <option value="MBAPP">Ung dung MobileBanking</option>
                    <option value="VNPAYQR">VNPAYQR</option>
                    <option value="VNBANK">LOCAL BANK</option>
                    <option value="IB">INTERNET BANKING</option>
                    <option value="ATM">ATM CARD</option>
                    <option value="INTCARD">INTERNATIONAL CARD</option>
                    <option value="VISA">VISA</option>
                    <option value="MASTERCARD"> MASTERCARD</option>
                    <option value="JCB">JCB</option>
                    <option value="UPI">UPI</option>
                    <option value="VIB">VIB</option>
                    <option value="VIETCAPITALBANK">VIETCAPITALBANK</option>
                    <option value="SCB">Ngan hang SCB</option>
                    <option value="NCB">Ngan hang NCB</option>
                    <option value="SACOMBANK">Ngan hang SacomBank </option>
                    <option value="EXIMBANK">Ngan hang EximBank </option>
                    <option value="MSBANK">Ngan hang MSBANK </option>
                    <option value="NAMABANK">Ngan hang NamABank </option>
                    <option value="VNMART"> Vi dien tu VnMart</option>
                    <option value="VIETINBANK">Ngan hang Vietinbank </option>
                    <option value="VIETCOMBANK">Ngan hang VCB </option>
                    <option value="HDBANK">Ngan hang HDBank</option>
                    <option value="DONGABANK">Ngan hang Dong A</option>
                    <option value="TPBANK">Ngân hàng TPBank </option>
                    <option value="OJB">Ngân hàng OceanBank</option>
                    <option value="BIDV">Ngân hàng BIDV </option>
                    <option value="TECHCOMBANK">Ngân hàng Techcombank </option>
                    <option value="VPBANK">Ngan hang VPBank </option>
                    <option value="AGRIBANK">Ngan hang Agribank </option>
                    <option value="MBBANK">Ngan hang MBBank </option>
                    <option value="ACB">Ngan hang ACB </option>
                    <option value="OCB">Ngan hang OCB </option>
                    <option value="IVB">Ngan hang IVB </option>
                    <option value="SHB">Ngan hang SHB </option>
                    <option value="APPLEPAY">Apple Pay </option>
                  </select>
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
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleBtnClick}
                  >
                    Tài trợ ngay
                  </button>
                </form>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                {/* <Link to="/donate/donate_one" className="font-bold text-blueGray-700 mt-8">
                  <button variant="text">DONATE ONE</button>
                </Link> */}
                <Link to="/donate/donate_one">
                  <button
                    className="bg-lightBlue-500 text-white w-22 h-15 outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    DONATION ONE
                  </button>
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
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
                      Cho tre em chung toi
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">DU AN NUOI EM</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    day la du an nuoi em cho cac em an hoc
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            xay nha cho cac tre em
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">can ao am</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <Link to="/donate//donate/donate_month">
                          <button
                            className="bg-lightBlue-500 text-white w-22 h-15 outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            DONATION MONTHLY
                          </button>
                        </Link>
                      </div>
                    </li>
                  </ul>
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
