import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/FormAdoption.css"
// components
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

import "assets/styles/FormAdoption.css"


export default function Adoption() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender:'',
    nationality: '',
    addressPermanent: '',
    addressTemporary:'',
    birthday: '',
    phoneNumber: '',
    email: '',
    nation:'',
    occupation: '',
    income: '',
    relationship: '',
    citizenIdentNumber:'',
    issueDate: '',
    issuePlace: '',
    expireDate: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or API call here
    console.log('Form submitted:', formData);
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
                "url('https://luattienphong.vn/wp-content/uploads/2018/02/thu-tuc-nhan-con-nuoi-tai-cac-lang-tre-mo-coi-1c.jpg')",
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
                    Nhận nuôi trẻ mồ côi
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    "Give, double the love."
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
            <div className="flex flex-wrap">
              
            </div>
                <br /> <br /> <br />
                {/* Form nhận nuôi */}
                <div className="formbold-main-wrapper">
                  <div className="formbold-form-wrapper">
                    <form action="#">
                      <div className="formbold-steps">
                        <ul>
                          <li className={`formbold-step-menu1 ${currentStep === 1 ? 'active' : ''}`}>
                            <span>1</span>
                            Lý Lịch
                          </li>
                          <li className={`formbold-step-menu2 ${currentStep === 2 ? 'active' : ''}`}>
                            <span>2</span>
                            Liên lạc
                          </li>
                          <li className={`formbold-step-menu3 ${currentStep === 3 ? 'active' : ''}`}>
                            <span>3</span>
                            CCCD
                          </li>
                          <li className={`formbold-step-menu4 ${currentStep === 4 ? 'active' : ''}`}>
                            <span>4</span>
                            Xác nhận
                          </li>
                        </ul>
                      </div>

                      {/* Form Step 1 */}
                      <div className={`formbold-form-step-1 ${currentStep === 1 ? 'active' : ''}`}>
                        <div className="formbold-input-flex">
                          <div>
                            <label htmlFor="firstname" className="formbold-form-label"> Tên/First name </label>
                            <input
                              type="text"
                              name="firstname"
                              placeholder="Nhập tên..."
                              id="firstname"
                              className="formbold-form-input"
                              value={formData.firstname}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <label htmlFor="lastname" className="formbold-form-label"> Họ/Last name </label>
                            <input
                              type="text"
                              name="lastname"
                              placeholder="Nhập tên họ..."
                              id="lastname"
                              className="formbold-form-input"
                              value={formData.lastname}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div className="formbold-input-flex">
                          <div>
                            <label htmlFor="gender" className="formbold-form-label"> Giới Tính/Gender </label>
                            <form>
                              <input
                                type="radio"
                                name="gender"
                                id="male"
                                value={formData.gender}
                                className="Gender"
                                onChange={handleInputChange}
                              />
                              <label for="male">Nam/Male</label>

                              <input
                                type="radio"
                                name="gender"
                                id="female"
                                value={formData.gender}
                                className="Gender"
                                onChange={handleInputChange}
                              />
                              <label for="female">Nữ/Female</label>
                            </form>
                            
                          </div>
                          <div>
                            <label htmlFor="nationality" className="formbold-form-label"> Dân Tộc/Nationality </label>
                            <select
                              id="nationality"
                              className="formbold-form-input"
                              value={formData.nationality}
                              onChange={handleInputChange}
                            >
                                  <option value="Kinh">Kinh</option>
                                  <option value="Tày">Tày</option>
                                  <option value="Thái">Thái</option>
                                  <option value="Mường">Mường</option>
                                  <option value="Khơ Mú">Khơ Mú</option>
                                  <option value="H'Mông">H'Mông</option>
                                  <option value="Nùng">Nùng</option>
                                  <option value="Dao">Dao</option>
                                  <option value="Gia Rai">Gia Rai</option>
                                  <option value="Ê Đê">Ê Đê</option>
                                  <option value="Ba Na">Ba Na</option>
                                  <option value="Xơ Đăng">Xơ Đăng</option>
                                  <option value="Sán Chay">Sán Chay</option>
                                  <option value="Cơ Ho">Cơ Ho</option>
                                  <option value="Chăm">Chăm</option>
                                  <option value="Hrê">Hrê</option>
                                  <option value="Ra Glai">Ra Glai</option>
                                  <option value="Mnông">Mnông</option>
                                  <option value="Thổ">Thổ</option>
                                  <option value="Xtiêng">Xtiêng</option>
                                  <option value="Khơ Me">Khơ Me</option>
                                  <option value="Khmer">Khmer</option>
                                  <option value="Chứt">Chứt</option>
                                  <option value="Bru-Vân Kiều">Bru-Vân Kiều</option>
                                  <option value="Cơ Tu">Cơ Tu</option>
                                  <option value="Giáy">Giáy</option>
                                  <option value="Tà Ôi">Tà Ôi</option>
                                  <option value="Mạ">Mạ</option>
                                  <option value="Co">Co</option>
                                  <option value="Tàa Thủ">Tàa Thủ</option>
                                  <option value="Chơ Ro">Chơ Ro</option>
                                  <option value="Xinh Mun">Xinh Mun</option>
                                  <option value="Hà Nhì">Hà Nhì</option>
                                  <option value="Chu Ru">Chu Ru</option>
                                  <option value="Lào">Lào</option>
                                  <option value="La Chí">La Chí</option>
                                  <option value="Kháng">Kháng</option>
                                  <option value="Phù Lá">Phù Lá</option>
                                  <option value="La Hủ">La Hủ</option>
                                  <option value="Lự">Lự</option>
                                  <option value="La Ha">La Ha</option>
                                  <option value="Pà Thẻn">Pà Thẻn</option>
                                  <option value="Lô Lô">Lô Lô</option>
                                  <option value="Chứt">Chứt</option>
                                  <option value="Mảng">Mảng</option>
                                  <option value="Cờ Lao">Cờ Lao</option>
                                  <option value="Bố Y">Bố Y</option>
                                  <option value="Cống">Cống</option>
                                  <option value="Si La">Si La</option>
                                  <option value="Pu Péo">Pu Péo</option>
                                  <option value="Rơ Măm">Rơ Măm</option>
                                  <option value="Brâu">Brâu</option>
                                  <option value="Ơ Đu">Ơ Đu</option>
                                  <option value="Rơ Ngao">Rơ Ngao</option>
                                  <option value="Hoa">Hoa</option>
                                  <option value="Ngái">Ngái</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="addressPermanent" className="formbold-form-label"> Địa Chỉ Thường Trú/Address Permanent </label>
                          <input
                            type="text"
                            name="addressPermanent"
                            id="addressPermanent"
                            placeholder="Nhập địa chỉ thường trú..."
                            className="formbold-form-input"
                            value={formData.addressPermanent}
                            onChange={handleInputChange}
                          />
                        </div>
                        <br />
                        <div>
                          <label htmlFor="addressTemporary" className="formbold-form-label"> Địa Chỉ Tạm Trú/Address Temporary </label>
                          <input
                            type="text"
                            name="addressTemporary"
                            id="addressTemporary"
                            placeholder="Nhập địa chỉ tạm trú..."
                            className="formbold-form-input"
                            value={formData.addressTemporary}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Form Step 2 */}
                      <div className={`formbold-form-step-2 ${currentStep === 2 ? 'active' : ''}`}>
                        <div className="formbold-input-flex">
                          <div>
                            <label htmlFor="firstname" className="formbold-form-label"> SĐT/Phone Number </label>
                            <input
                              type="text"
                              name="phonenumber"
                              placeholder="(+84) "
                              id="phonenumber"
                              className="formbold-form-input"
                              value={formData.phonenumber}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <label htmlFor="lastname" className="formbold-form-label"> Quốc Tịch/Nation </label>
                            <input
                              type="text"
                              name="lastname"
                              placeholder="Nhập quốc tịch..."
                              id="lastname"
                              className="formbold-form-input"
                              value={formData.lastname}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div className="formbold-input-flex">
                          <div>
                            <label htmlFor="birthday" className="formbold-form-label"> Ngày Sinh/Date of Birth </label>
                            <input
                              type="date"
                              name="birthday"
                              id="birthday"
                              className="formbold-form-input"
                              value={formData.birthday}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="formbold-form-label"> Email Address </label>
                            <input
                              type="email"
                              name="email"
                              placeholder="example@mail.com"
                              id="email"
                              className="formbold-form-input"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div className="formbold-input-flex">
                          <div>
                            <label htmlFor="occupation" className="formbold-form-label"> Nghề Nghiệp/Occupation </label>
                            <input
                              type="text"
                              name="occupation"
                              placeholder="Nhập nghề nghiệp..."
                              id="occupation"
                              className="formbold-form-input"
                              value={formData.occupation}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <label htmlFor="income" className="formbold-form-label"> Thu Nhập/Income </label>
                            <input
                              type="text"
                              name="income"
                              placeholder="Mức thu nhập..."
                              id="income"
                              className="formbold-form-input"
                              value={formData.income}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="relationship" className="formbold-form-label"> Mối Quan Hệ/Relationship </label>
                          <select
                            type="text"
                            name="relationship"
                            id="relationship"
                            placeholder="Flat 4, 24 Castle Street, Perth, PH1 3JY"
                            className="formbold-form-input"
                            value={formData.relationship}
                            onChange={handleInputChange}
                          >
                            <option value="single">Độc thân/Single</option>
                            <option value="maried">Đã kết hôn/Maried</option>
                          </select>
                        </div>
                      </div>

                        {/* Form Step 3 */}
                      <div className={`formbold-form-step-3 ${currentStep === 3 ? 'active' : ''}`}>
                        <div>
                              <label htmlFor="citizenIdentNumber" className="formbold-form-label"> Số CCCD/Citizen IdentNumber </label>
                              <input
                                type="text"
                                name="citizenIdentNumber"
                                placeholder="Nhập CCCD..."
                                id="citizenIdentNumber"
                                className="formbold-form-input"
                                value={formData.citizenIdentNumber}
                                onChange={handleInputChange}
                              />
                        </div>
                        <br />
                        <div className="formbold-input-flex">     
                          <div>
                            <label htmlFor="issueDate" className="formbold-form-label"> Ngày cấp/Issue Date </label>
                            <input
                              type="date"
                              name="issueDate"
                              id="issueDate"
                              className="formbold-form-input"
                              value={formData.issueDate}
                              onChange={handleInputChange}
                            />
                          </div>

                          <div>
                            <label htmlFor="expireDate" className="formbold-form-label"> Ngày hạn/Expire Date </label>
                            <input
                              type="date"
                              name="expireDate"
                              id="expireDate"
                              className="formbold-form-input"
                              value={formData.expireDate}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="relationship" className="formbold-form-label"> Thành phố/Issue Place </label>
                          <input
                            type="text"
                            name="issuePlace"
                            id="issuePlace"
                            placeholder="Nhập địa chỉ cấp..."
                            className="formbold-form-input"
                            value={formData.issuePlace}
                            onChange={handleInputChange}
                          >
                          </input>
                        </div>
                      </div>

                      {/* Form Step 4 */}
                      <div className={`formbold-form-step-3 ${currentStep === 4 ? 'active' : ''}`}>
                        <div className="formbold-form-confirm">
                          <p>
                          Chính sách này bao gồm quy định về bảo mật thông tin, sử dụng cookie, điều khoản dịch vụ, và các quy tắc sử dụng trang web.
                          </p>

                          <div>
                            <button className={`formbold-confirm-btn ${currentStep === 4 ? 'active' : ''}`}>
                              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Your SVG code */}
                              </svg>
                              Yes.
                            </button>

                            <button className={`formbold-confirm-btn ${currentStep === 4 ? '' : 'active'}`}>
                              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Your SVG code */}
                              </svg>
                              No.
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="formbold-form-btn-wrapper">
                        {currentStep > 1 && (
                          <button className="formbold-back-btn" onClick={handlePrevStep}>
                            TRỞ VỀ
                          </button>
                        )}

                        {currentStep < 4 ? (
                          <button className="formbold-btn" onClick={handleNextStep}>
                            TIẾP TỤC
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              {/* Your SVG code */}
                            </svg>
                          </button>
                        ) : (
                          <button className="formbold-btn" onClick={handleSubmit}>
                            XÁC NHẬN
                          </button>
                        )}
                      </div>
                    </form>
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
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
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
                            Carefully crafted components
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
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-1-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Web Developer
                    </p>
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
                    src={require("assets/img/team-2-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-3-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-4-470x470.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
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
