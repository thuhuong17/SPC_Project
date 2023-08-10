import React, { useState, useEffect } from "react";
import "../assets/styles/FormAdoption.css"
// components
import Navbar from "../components/Footers/Footer.js";
import Footer from "../components/Footers/Footer.js";
import PDF from './PDF';
import apiMethod from '../api/apiMethod'

export default function Adoption() {
  // cài đặt điều kiện multi-step form
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // khai báo trường dữ liệu
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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

  // cài đặt submit form
  const [postSubmitted, setPostSubmitted] = useState(false);

  const handleInputChange = (event, i) => {
    const { name, value } = event.target;
    formData[name][i] = value
  };

  const handleAdopterChange = (event) => {
    setAdopter(Number(event.target.value))
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      const currentDate = new Date();
      const currentDateValue = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`

      const Birth1 = new Date(formData.birthday[0])
      const newBirth1 = `${Birth1.getDate()}-${Birth1.getMonth() + 1}-${Birth1.getFullYear()}`
      const issueDate1 = new Date(formData.issueDate[0])
      const newIssueDate1 = `${issueDate1.getDate()}-${issueDate1.getMonth() + 1}-${issueDate1.getFullYear()}`
      const expireDate1 = new Date(formData.expireDate[0])
      const newExpireDate1 = `${expireDate1.getDate()}-${expireDate1.getMonth() + 1}-${expireDate1.getFullYear()}`

      const newForm = {
        registerDate: currentDateValue,
        reason: reason,
        status: 0,
        adopters: [
          {
            fullName: `${formData.lastname[0]} ${formData.firstname[0]}`,
            firstName: formData.firstname[0],
            lastName: formData.lastname[0],
            gender: formData.gender[0],
            nationality: formData.nationality[0],
            addressPermanent: formData.addressPermanent[0],
            addressTemporary: formData.addressTemporary[0],
            birthday: newBirth1,
            phoneNumber: formData.phoneNumber[0],
            email: formData.email[0],
            nation: formData.nation[0],
            occupation: formData.occupation[0],
            relationship: formData.relationship[0],
            income: Number(formData.income[0]),
            citizenIdentification: {
              citizenIdentNumber: formData.citizenIdentNumber[0],
              issueDate: newIssueDate1,
              issuePlace: formData.issuePlace[0],
              expireDate: newExpireDate1,
            }
          }
        ]
      }

      if (adopter === 2) {
        const Birth2 = new Date(formData.birthday[1])
        const newBirth2 = `${Birth2.getDate()}-${Birth2.getMonth() + 1}-${Birth2.getFullYear()}`
        const issueDate2 = new Date(formData.issueDate[1])
        const newIssueDate2 = `${issueDate2.getDate()}-${issueDate2.getMonth() + 1}-${issueDate2.getFullYear()}`
        const expireDate2 = new Date(formData.expireDate[1])
        const newExpireDate2 = `${expireDate2.getDate()}-${expireDate2.getMonth() + 1}-${expireDate2.getFullYear()}`

        const adopter2 = {
          fullName: `${formData.lastname[1]} ${formData.firstname[1]}`,
          firstName: formData.firstname[1],
          lastName: formData.lastname[1],
          gender: formData.gender[1],
          nationality: formData.nationality[1],
          addressPermanent: formData.addressPermanent[1],
          addressTemporary: formData.addressTemporary[1],
          birthday: newBirth2,
          phoneNumber: formData.phoneNumber[1],
          email: formData.email[1],
          nation: formData.nation[1],
          occupation: formData.occupation[1],
          relationship: formData.relationship[1],
          income: Number(formData.income[1]),
          citizenIdentification: {
            citizenIdentNumber: formData.citizenIdentNumber[1],
            issueDate: newIssueDate2,
            issuePlace: formData.issuePlace[1],
            expireDate: newExpireDate2,
          }
        }
        newForm.adopters.push(adopter2)
      }

      await apiMethod.postAdoption(newForm)
      setStatus(1)
    } catch (error) {
      if (!error?.response) {
        console.log("No Serve Response");
      }
    }
  };

  const renderedItems = [];

  for (let i = 0; i < adopter; i++) {
    renderedItems.push(
      <div key={i}>
        {i !== 0 ? <h1 style={{ fontWeight: "bold" }}>+ Nhập thông tin người {i + 1}:</h1> : <></>}
        <br />
        <div className={'active'}>
          <div className="formbold-input-flex">
            <div>
              <input
                type="text"
                name="lastname"
                placeholder="Nhập họ..."
                id="lastname"
                className="formbold-form-input"
                value={formData?.lastname[i]}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
            <div>
              <input
                type="text"
                name="firstname"
                placeholder="Nhập tên..."
                id="firstname"
                className="formbold-form-input"
                value={formData?.firstname[i]}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
          </div>

          <div className="formbold-input-flex">
            <div>
              <select
                type="text"
                name="gender"
                id="gender"
                placeholder="Flat 4, 24 Castle Street, Perth, PH1 3JY"
                className="formbold-form-input"
                value={formData?.gender[i]}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option value="">-- Chọn giới tính --</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
            </div>

            <div>
              <select
                id="nationality"
                name="nationality"
                className="formbold-form-input"
                value={formData?.nationality[i]}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option value="">-- Chọn dân tộc --</option>
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
            <input
              type="text"
              name="addressPermanent"
              id="addressPermanent"
              placeholder="Nhập địa chỉ thường trú..."
              className="formbold-form-input"
              value={formData?.addressPermanent[i]}
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              name="addressTemporary"
              id="addressTemporary"
              placeholder="Nhập địa chỉ tạm trú..."
              className="formbold-form-input"
              value={formData?.addressTemporary[i]}
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
        </div>
        <br />
        <div className="formbold-input-flex">
          <div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Nhập số điện thoại..."
              id="phonenumber"
              className="formbold-form-input"
              value={formData?.phoneNumber[i]}
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
          <div>
            <input
              type="text"
              name="nation"
              placeholder="Nhập quốc tịch..."
              id="nation"
              className="formbold-form-input"
              value={formData?.nation[i]}
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
        </div>
        <div className="formbold-input-flex">
          <div>
            <input
              type="text"
              placeholder="Chọn ngày sinh..."
              onFocus={e => e.target.type = "date"}
              onBlur={e => e.target.type = "text"}
              name="birthday"
              id="birthday"
              className="formbold-form-input"
              value={formData?.birthday[i]}
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Nhập email..."
              id="email"
              className="formbold-form-input"
              value={formData?.email[i]}
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
        </div>
        <div className="formbold-input-flex">
          <div>
            <input
              type="text"
              name="occupation"
              placeholder="Nhập nghề nghiệp..."
              id="occupation"
              className="formbold-form-input"
              value={formData?.occupation[i]}
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
          <div>
            <input
              type="text"
              name="income"
              placeholder="Mức thu nhập..."
              id="income"
              className="formbold-form-input"
              value={formData?.income[i]}
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
        </div>
        <div>
          <select
            type="text"
            name="relationship"
            id="relationship"
            placeholder="Flat 4, 24 Castle Street, Perth, PH1 3JY"
            className="formbold-form-input"
            value={formData?.relationship[i]}
            onChange={(e) => handleInputChange(e, i)}
          >
            <option value="">-- Chọn tình trạng hôn nhân --</option>
            <option value="Độc thân">Độc thân</option>
            <option value="Đã kết hôn">Đã kết hôn</option>
          </select>
        </div>
        <br />
        <div>
          <input
            type="text"
            name="citizenIdentNumber"
            placeholder="Nhập Số CCCD..."
            id="citizenIdentNumber"
            className="formbold-form-input"
            value={formData?.citizenIdentNumber[i]}
            onChange={(e) => handleInputChange(e, i)}
          />
        </div>
        <br />
        <div className="formbold-input-flex">
          <div>
            <input
              type="text"
              placeholder="Chọn ngày cấp..."
              onFocus={e => e.target.type = "date"}
              onBlur={e => e.target.type = "text"}
              name="issueDate"
              id="issueDate"
              className="formbold-form-input"
              value={formData?.issueDate[i]}
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Chọn ngày hạn..."
              onFocus={e => e.target.type = "date"}
              onBlur={e => e.target.type = "text"}
              name="expireDate"
              id="expireDate"
              className="formbold-form-input"
              value={formData?.expireDate[i]}
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            name="issuePlace"
            id="issuePlace"
            placeholder="Nhập địa chỉ cấp..."
            className="formbold-form-input"
            value={formData?.issuePlace[i]}
            onChange={(e) => handleInputChange(e, i)}
          >
          </input>
        </div>
        {/* Form */}
        < br />
      </div>
    );
  }

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
                    "Với một đứa trẻ, thế giới không giới hạn trong một bữa ăn, mà thế giới cần có hào quang của tình thương"
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
              {status === 0
                ? <div className="formbold-form-wrapper">
                  <form action="#">
                    <div className="formbold-steps">
                      <h1>Nhập thông tin để đăng ký nhận nuôi</h1>
                    </div>
                    <div>
                      <select
                        value={adopter}
                        onChange={handleAdopterChange}
                        className="formbold-form-input"
                        style={{ textAlign: "center" }}
                      >
                        <option value="0">-- Chọn số người nhận nuôi --</option>
                        <option value="1">1 người đăng ký nhận nuôi</option>
                        <option value="2">2 người đăng ký nhận nuôi</option>
                      </select>
                    </div>
                    <br />
                    {/* Form */}
                    {adopter !== 0 ?
                      <>
                        {renderedItems}
                        <div>
                          <textarea
                            rows="4"
                            type="text"
                            name="reason"
                            placeholder="Nhập lý do đăng ký nhận nuôi..."
                            id="reason"
                            className="formbold-form-input"
                            value={formData?.reason}
                            onChange={(e) => setReason(e.target.value)}
                          />
                        </div>
                        <button className="formbold-btn" onClick={handleSubmit}>
                          XÁC NHẬN
                        </button>
                      </> : <></>}
                  </form>
                </div>
                : <>
                  <div className="formbold-steps noti">
                    <h1>Đăng ký thành công!</h1>
                    <h1>Đơn đăng ký của bạn sẽ được chúng tôi kiểm tra và xác nhận trong thời gian sớm nhất.</h1>
                  </div>
                </>}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
