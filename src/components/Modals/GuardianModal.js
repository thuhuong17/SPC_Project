import React, { useEffect, useMemo, useState } from "react";
import usePrivateApi from "api/usePrivateApi";
import privateFormDataApi from "api/privateFormDataApi";
import { reunicode, regexPhoneNumber } from "constant/Regrex";

export const GuardianModal = ({
  childId,
  closeModal,
  onSubmit,
  defaultValue,
}) => {
  const privateApi = usePrivateApi();

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    birthDay: "",
    gender: "nam",
    nationality: "",
    addressTemporary: "",
    addressPermanent: "",
    email: "",
    phoneNumber: "",
    relationshipType: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    nationality: "",
    addressPermanent: "",
    phoneNumber: "",
    relationshipType: "",
  });
  function isValid(str) {
    return reunicode.test(str);
  }

  const validateBDay = (dob1) => {
    if (!dob1) {
      return false;
    }
    var today = new Date();
    var birthDate = new Date(dob1);
    if (birthDate > today) return false;
    return true;
  };

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    let result = true;
    if (!isValid(formState.firstName)) {
      var fNameErr = "Vui lòng điền đúng định dạng";
      result = false;
    } else {
      var fNameErr = "";
    }

    if (formState.lastName.trim() === "") {
      var lNameErr = "Vui lòng điền đúng định dạng";
      result = false;
    } else {
      var lNameErr = "";
    }

    if (formState.nationality.trim() === "") {
      var lNationErr = "Vui lòng điền trường này";
      result = false;
    } else {
      var lNationErr = "";
    }

    if (!validateBDay(formState.birthDay)) {
      var bDayErr = "Vui lòng chọn ngày sinh hợp lệ";
      result = false;
    } else {
      var bDayErr = "";
    }

    if (formState.addressPermanent.trim() === "") {
      var lAddressErr = "Vui lòng điền trường này";
      result = false;
    } else {
      var lAddressErr = "";
    }

    if (!formState.phoneNumber.match(regexPhoneNumber)) {
      var phonesErr = "Vui lòng điền số điện thoại hợp lệ";
      result = false;
    } else {
      var phonesErr = "";
    }

    setFormErrors({
      firstName: fNameErr,
      lastName: lNameErr,
      addressPermanent: lAddressErr,
      nationality: lNationErr,
      birthDay: bDayErr,
      phoneNumber: phonesErr,
    });

    return result;
  };
  // update danh sách
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    var newDate = new Date(formState.birthDay);
    let dateMDY = `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;

    formState.birthDay = dateMDY;
    formState.fullName = `${formState.lastName} ${formState.firstName}`;

    const response = await privateApi.addGuardianForChild(childId, formState);
    console.log(response);
    closeModal();
    onSubmit();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
      style={{ zIndex: "100", paddingTop: "15px" }}
    >
      <div
        className="modal w-6"
        style={{ height: "fit-content", width: "50em" }}
      >
        <h1 className="font-semibold text-xl text-center ">
          Nhập thông tin người giám hộ
        </h1>
        <br />
        <form>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="Tên*"
              value={formState.firstName}
              onChange={handleChange}
            />
            <span className="text-sm text-red-500 text-bold">
              {formErrors.firstName && <i>* {formErrors.firstName}</i>}
            </span>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Họ và tên đệm*"
              value={formState.lastName}
              onChange={handleChange}
            />
            <span className="text-sm text-red-500 text-bold">
              {formErrors.lastName && <i>* {formErrors.lastName}</i>}
            </span>
          </div>
          <div className="form-group">
            <input
              name="relationshipType"
              placeholder="Mối quan hệ với trẻ*"
              value={formState.relationshipType}
              onChange={handleChange}
            />
            <span className="text-sm text-red-500 text-bold">
              {formErrors.relationshipType && (
                <i>* {formErrors.relationshipType}</i>
              )}
            </span>
          </div>
          <div className="form-group">
            <div className="flex justify-between fl-inputs">
              <div>
                <input
                  name="birthDay"
                  value={formState.birthDay}
                  placeholder="Ngày sinh*"
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  onChange={handleChange}
                />
                <span className="text-sm text-red-500 text-bold">
                  {formErrors.birthDay && <i>* {formErrors.birthDay}</i>}
                </span>
              </div>

              <div>
                <select
                  id="gender"
                  name="gender"
                  value={formState.gender}
                  onChange={handleChange}
                >
                  <option value="nam" selected>
                    Nam/Male
                  </option>
                  <option value="nữ">Nữ/Female</option>
                  <option value="khác">Khác/Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <input
              name="addressPermanent"
              placeholder="Địa chỉ thường trú*"
              value={formState.addressPermanent}
              onChange={handleChange}
            />
            <span className="text-sm text-red-500 text-bold">
              {formErrors.addressPermanent && (
                <i>* {formErrors.addressPermanent}</i>
              )}
            </span>
          </div>
          <div className="form-group">
            <input
              name="addressTemporary"
              placeholder="Địa chỉ tạm trú"
              value={formState.addressTemporary}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="phoneNumber"
              placeholder="Số điện thoại*"
              value={formState.phoneNumber}
              onChange={handleChange}
            />
            <span className="text-sm text-red-500 text-bold">
              {formErrors.phoneNumber && <i>* {formErrors.phoneNumber}</i>}
            </span>
          </div>
          <div className="form-group">
            <input
              name="email"
              placeholder="Địa chỉ email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              name="nationality"
              placeholder="Quốc tịch*"
              value={formState.nationality}
              onChange={handleChange}
            />
            <span className="text-sm text-red-500 text-bold">
              {formErrors.nationality && <i>* {formErrors.nationality}</i>}
            </span>
          </div>

          {errors && <div className="error">{`Vui lòng điền: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
