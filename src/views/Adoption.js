import React, { useState } from "react";
import "../assets/styles/FormAdoption.css"
// components
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import apiMethod from "api/apiMethod";
import isEmpty from "validator/lib/isEmpty"
import isNumeric from "validator/lib/isNumeric"
import isEmail from 'validator/lib/isEmail';

import "assets/styles/FormAdoption.css"

export default function Adoption() {

  const [adopter, setAdopter] = useState(0)
  const [status, setStatus] = useState(0)
  const [reason, setReason] = useState("")
  const [formData, setFormData] = useState({
    firstname: [],
    lastname: [],
    gender: [],
    nationality: [],
    addressPermanent: [],
    addressTemporary: [],
    birthday: [],
    phoneNumber: [],
    email: [],
    nation: [],
    occupation: [],
    income: [],
    relationship: [],
    citizenIdentNumber: [],
    issueDate: [],
    issuePlace: [],
    expireDate: [],
  });

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const msg = {}
    if (isEmpty(formData.lastname[0] ?? "" , { ignore_whitespace: true })) {
      msg.lastname1 = "Vui lòng nhập họ!"
    }
    if (isEmpty(formData.firstname[0] ?? "")) {
      msg.firstname1 = "Vui lòng nhập tên!"
    }
    if (isEmpty(formData.gender[0] ?? "")) {
      msg.gender1 = "Vui lòng chọn giới tính!"
    }
    if (isEmpty(formData.nationality[0] ?? "")) {
      msg.nationality1 = "Vui lòng chọn dân tộc!"
    }
    if (isEmpty(formData.addressPermanent[0] ?? "")) {
      msg.addressPermanent1 = "Vui lòng nhập địa chỉ!"
    }
    if (isEmpty(formData.addressTemporary[0] ?? "")) {
      msg.addressTemporary1 = "Vui lòng nhập địa chỉ!"
    }
    if (isEmpty(formData.birthday[0] ?? "")) {
      msg.birthday1 = "Vui lòng nhập địa chỉ!"
    }
    if (isEmpty(formData.phoneNumber[0] ?? "")) {
      msg.phoneNumber1 = "Vui lòng nhập số điện thoại!"
    } else if (!isNumeric(formData.phoneNumber[0])) {
      msg.phoneNumber1 = "Vui lòng nhập số!"
    }
    if (isEmpty(formData.email[0] ?? "")) {
      msg.email1 = "Vui lòng nhập email!"
    } else if (!isEmail(formData.email[0])) {
      msg.email1 = "Email không đúng đinh dạng!"
    }
    if (isEmpty(formData.nation[0] ?? "")) {
      msg.nation1 = "Vui lòng nhập quốc tịch!"
    }
    if (isEmpty(formData.occupation[0] ?? "")) {
      msg.occupation1 = "Vui lòng nhập nghề nghiệp!"
    }
    if (isEmpty(formData.income[0] ?? "")) {
      msg.income1 = "Vui lòng nhập thu nhập!"
    } else if (!isNumeric(formData.income[0])) {
      msg.income1 = "Vui lòng nhập số!"
    }
    if (isEmpty(formData.relationship[0] ?? "")) {
      msg.relationship1 = "Vui lòng chọn tình trạng!"
    }
    if (isEmpty(formData.citizenIdentNumber[0] ?? "")) {
      msg.citizenIdentNumber1 = "Vui lòng nhập căn cước!"
    } else if (!isNumeric(formData.citizenIdentNumber[0])) {
      msg.citizenIdentNumber1 = "Vui lòng nhập số!"
    }
    if (isEmpty(formData.issuePlace[0] ?? "")) {
      msg.issuePlace1 = "Vui lòng nhập nơi cấp!"
    }

    if (adopter === 2) {
      if (isEmpty(formData.lastname[1] ?? "")) {
        msg.lastname2 = "Vui lòng nhập họ!"
      }
      if (isEmpty(formData.firstname[1] ?? "")) {
        msg.firstname2 = "Vui lòng nhập tên!"
      }
      if (isEmpty(formData.gender[1] ?? "")) {
        msg.gender2 = "Vui lòng chọn giới tính!"
      }
      if (isEmpty(formData.nationality[1] ?? "")) {
        msg.nationality2 = "Vui lòng chọn dân tộc!"
      }
      if (isEmpty(formData.addressPermanent[1] ?? "")) {
        msg.addressPermanent2 = "Vui lòng nhập địa chỉ!"
      }
      if (isEmpty(formData.addressTemporary[1] ?? "")) {
        msg.addressTemporary2 = "Vui lòng nhập địa chỉ!"
      }
      if (isEmpty(formData.birthday[1] ?? "")) {
        msg.birthday2 = "Vui lòng nhập địa chỉ!"
      }
      if (isEmpty(formData.phoneNumber[1] ?? "")) {
        msg.phoneNumber2 = "Vui lòng nhập số điện thoại!"
      } else if (!isNumeric(formData.phoneNumber[1])) {
        msg.phoneNumber2 = "Vui lòng nhập số!"
      }
      if (isEmpty(formData.email[1] ?? "")) {
        msg.email2 = "Vui lòng nhập email!"
      } else if (!isEmail(formData.email[1])) {
        msg.email2 = "Email không đúng đinh dạng!"
      }
      if (isEmpty(formData.nation[1] ?? "")) {
        msg.nation2 = "Vui lòng nhập quốc tịch!"
      }
      if (isEmpty(formData.occupation[1] ?? "")) {
        msg.occupation2 = "Vui lòng nhập nghề nghiệp!"
      }
      if (isEmpty(formData.income[1] ?? "")) {
        msg.income2 = "Vui lòng nhập thu nhập!"
      } else if (!isNumeric(formData.income[1])) {
        msg.income2 = "Vui lòng nhập số!"
      }
      if (isEmpty(formData.relationship[1] ?? "")) {
        msg.relationship2 = "Vui lòng chọn tình trạng!"
      }
      if (isEmpty(formData.citizenIdentNumber[1] ?? "")) {
        msg.citizenIdentNumber2 = "Vui lòng nhập căn cước!"
      } else if (!isNumeric(formData.citizenIdentNumber[1])) {
        msg.citizenIdentNumber2 = "Vui lòng nhập số!"
      }
      if (isEmpty(formData.issuePlace[1] ?? "")) {
        msg.issuePlace2 = "Vui lòng nhập nơi cấp!"
      }
    }

    setErrors(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  };

  const handleInputChange = (event, i) => {
    const { name, value } = event.target;
    formData[name][i] = value
    setFormData({
      ...formData,
    })
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
                placeholder="Nhập họ (*)"
                id="lastname"
                className="formbold-form-input"
                value={formData?.lastname[i]}
                onChange={(e) => handleInputChange(e, i)}
                style={{
                  borderColor: i === 0 ? errors?.lastname1 ? "red" : "black"
                    : errors?.lastname2 ? "red" : "black"
                }}
              />
              <span style={{
                color: "red",
                paddingTop: "5px"
              }}>
                {i === 0 ? errors?.lastname1 : errors?.lastname2}
              </span>
            </div>
            <div>
              <input
                type="text"
                name="firstname"
                placeholder="Nhập tên (*)"
                id="firstname"
                className="formbold-form-input"
                value={formData?.firstname[i]}
                onChange={(e) => handleInputChange(e, i)}
                style={{
                  borderColor: i === 0 ? errors?.firstname1 ? "red" : "black"
                    : errors?.firstname2 ? "red" : "black"
                }}
              />
              <span style={{
                color: "red",
                paddingTop: "5px"
              }}>
                {i === 0 ? errors?.firstname1 : errors?.firstname2}
              </span>
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
                style={{
                  borderColor: i === 0 ? errors?.gender1 ? "red" : "black"
                    : errors?.gender2 ? "red" : "black"
                }}>
                <option value="">Chọn giới tính (*)</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
              <span style={{
                color: "red",
                paddingTop: "5px"
              }}>
                {i === 0 ? errors?.gender1 : errors?.gender2}
              </span>
            </div>

            <div>
              <select
                id="nationality"
                name="nationality"
                className="formbold-form-input"
                value={formData?.nationality[i]}
                onChange={(e) => handleInputChange(e, i)}
                style={{
                  borderColor: i === 0 ? errors?.nationality1 ? "red" : "black"
                    : errors?.nationality2 ? "red" : "black"
                }}>
                <option value="">Chọn dân tộc (*)</option>
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
              <span style={{
                color: "red",
                paddingTop: "5px"
              }}>
                {i === 0 ? errors?.nationality1 : errors?.nationality2}
              </span>
            </div>
          </div>

          <div>
            <input
              type="text"
              name="addressPermanent"
              id="addressPermanent"
              placeholder="Nhập địa chỉ thường trú (*)"
              className="formbold-form-input"
              value={formData?.addressPermanent[i]}
              onChange={(e) => handleInputChange(e, i)}
              style={{
                borderColor: i === 0 ? errors?.addressPermanent1 ? "red" : "black"
                  : errors?.addressPermanent2 ? "red" : "black"
              }}
            />
            <span style={{
              color: "red",
              paddingTop: "5px"
            }}>
              {i === 0 ? errors?.addressPermanent1 : errors?.addressPermanent2}
            </span>
          </div>
          <br />
          <div>
            <input
              type="text"
              name="addressTemporary"
              id="addressTemporary"
              placeholder="Nhập địa chỉ tạm trú (*)"
              className="formbold-form-input"
              value={formData?.addressTemporary[i]}
              onChange={(e) => handleInputChange(e, i)}
              style={{
                borderColor: i === 0 ? errors?.addressTemporary1 ? "red" : "black"
                  : errors?.addressTemporary2 ? "red" : "black"
              }}
            />
            <span style={{
              color: "red",
              paddingTop: "5px"
            }}>
              {i === 0 ? errors?.addressTemporary1 : errors?.addressTemporary2}
            </span>
          </div>
        </div>
        <br />
        <div className="formbold-input-flex">
          <div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Nhập số điện thoại (*)"
              id="phonenumber"
              className="formbold-form-input"
              value={formData?.phoneNumber[i]}
              onChange={(e) => handleInputChange(e, i)}
              style={{
                borderColor: i === 0 ? errors?.phoneNumber1 ? "red" : "black"
                  : errors?.phoneNumber2 ? "red" : "black"
              }}
            />
            <span style={{
              color: "red",
              paddingTop: "5px"
            }}>
              {i === 0 ? errors?.phoneNumber1 : errors?.phoneNumber2}
            </span>
          </div>
          <div>
            <input
              type="text"
              name="nation"
              placeholder="Nhập quốc tịch (*)"
              id="nation"
              className="formbold-form-input"
              value={formData?.nation[i]}
              onChange={(e) => handleInputChange(e, i)}
              style={{
                borderColor: i === 0 ? errors?.nation1 ? "red" : "black"
                  : errors?.nation2 ? "red" : "black"
              }}
            />
            <span style={{
              color: "red",
              paddingTop: "5px"
            }}>
              {i === 0 ? errors?.nation1 : errors?.nation2}
            </span>
          </div>
        </div>
        <div className="formbold-input-flex">
          <div>
            <input
              type="text"
              placeholder="Chọn ngày sinh (*)"
              onFocus={e => e.target.type = "date"}
              onBlur={e => e.target.type = "text"}
              name="birthday"
              id="birthday"
              className="formbold-form-input"
              value={formData?.birthday[i]}
              onChange={(e) => handleInputChange(e, i)}
              style={{
                borderColor: i === 0 ? errors?.birthday1 ? "red" : "black"
                  : errors?.birthday2 ? "red" : "black"
              }}
            />
            <span style={{
              color: "red",
              paddingTop: "5px"
            }}>
              {i === 0 ? errors?.birthday1 : errors?.birthday2}
            </span>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Nhập email (*)"
              id="email"
              className="formbold-form-input"
              value={formData?.email[i]}
              onChange={(e) => handleInputChange(e, i)}
              style={{
                borderColor: i === 0 ? errors?.email1 ? "red" : "black"
                  : errors?.email2 ? "red" : "black"
              }}
            />
            <span style={{
              color: "red",
              paddingTop: "5px"
            }}>
              {i === 0 ? errors?.email1 : errors?.email2}
            </span>
          </div>
        </div>
        <div className="formbold-input-flex">
          <div>
            <input
              type="text"
              name="occupation"
              placeholder="Nhập nghề nghiệp (*)"
              id="occupation"
              className="formbold-form-input"
              value={formData?.occupation[i]}
              onChange={(e) => handleInputChange(e, i)}
              style={{
                borderColor: i === 0 ? errors?.occupation1 ? "red" : "black"
                  : errors?.occupation2 ? "red" : "black"
              }}
            />
            <span style={{
              color: "red",
              paddingTop: "5px"
            }}>
              {i === 0 ? errors?.occupation1 : errors?.occupation2}
            </span>
          </div>
          <div>
            <input
              type="text"
              name="income"
              placeholder="Mức thu nhập (*)"
              id="income"
              className="formbold-form-input"
              value={formData?.income[i]}
              onChange={(e) => handleInputChange(e, i)}
              style={{
                borderColor: i === 0 ? errors?.income1 ? "red" : "black"
                  : errors?.income2 ? "red" : "black"
              }}
            />
            <span style={{
              color: "red",
              paddingTop: "5px"
            }}>
              {i === 0 ? errors?.income1 : errors?.income2}
            </span>
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
            style={{
              borderColor: i === 0 ? errors?.relationship1 ? "red" : "black"
                : errors?.relationship2 ? "red" : "black"
            }}>
            <option value="">Chọn tình trạng hôn nhân (*)</option>
            <option value="Độc thân">Độc thân</option>
            <option value="Đã kết hôn">Đã kết hôn</option>
          </select>
          <span style={{
            color: "red",
            paddingTop: "5px"
          }}>
            {i === 0 ? errors?.relationship1 : errors?.relationship2}
          </span>
        </div>
        <br />
        <div>
          <input
            type="text"
            name="citizenIdentNumber"
            placeholder="Nhập Số CCCD (*)"
            id="citizenIdentNumber"
            className="formbold-form-input"
            value={formData?.citizenIdentNumber[i]}
            onChange={(e) => handleInputChange(e, i)}
            style={{
              borderColor: i === 0 ? errors?.citizenIdentNumber1 ? "red" : "black"
                : errors?.citizenIdentNumber2 ? "red" : "black"
            }}
          />
          <span style={{
            color: "red",
            paddingTop: "5px"
          }}>
            {i === 0 ? errors?.citizenIdentNumber1 : errors?.citizenIdentNumber2}
          </span>
        </div>
        <br />
        <div className="formbold-input-flex">
          <div>
            <input
              type="text"
              placeholder="Chọn ngày cấp (*)"
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
              placeholder="Chọn ngày hạn (*)"
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
            placeholder="Nhập địa chỉ cấp (*)"
            className="formbold-form-input"
            value={formData?.issuePlace[i]}
            onChange={(e) => handleInputChange(e, i)}
            style={{
              borderColor: i === 0 ? errors?.issuePlace1 ? "red" : "black"
                : errors?.issuePlace2 ? "red" : "black"
            }}
          />
          <span style={{
            color: "red",
            paddingTop: "5px"
          }}>
            {i === 0 ? errors?.issuePlace1 : errors?.issuePlace2}
          </span>
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