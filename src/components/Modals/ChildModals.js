import React, { useEffect, useMemo, useState } from "react";
import JoditEditor from "jodit-react";
import usePrivateApi from "api/usePrivateApi";
import privateFormDataApi from "api/privateFormDataApi";
import { reunicode, birthDateValid } from "constant/Regrex";
import moment from "moment";

export const ChildModal = ({ closeModal, onSubmit, defaultValue }) => {
  function isValid(str) {
    return reunicode.test(str);
  }
  const privateApi = usePrivateApi();
  const privateFDataApi = privateFormDataApi();
  const [orphanTypes, setOrphanTypes] = useState([]);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    gender: "nam",
    nationality: "",
    addressTemporary: "",
    addressPermanent: "",
    dateIn: "",
    typeOfOrphan: {
      orphanTypeId: null,
    },
    circumstance: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    gender: "nam",
    nationality: "",
    addressPermanent: "",
    dateIn: "",
    typeOfOrphan: "",
    circumstance: "",
    image: "",
  });

  const [image, setImage] = useState();

  useEffect(() => {
    const getChildrenTypes = async () => {
      const response = await privateApi.getChildrenTypes();
      setOrphanTypes(response.data);
    };
    getChildrenTypes();
  }, []);

  const config = {
    readonly: false,
    placeholder: "Nhập hoàn cảnh của trẻ",
  };

  const [errors, setErrors] = useState("");

  const validateBDay = (dob1) => {
    if (!dob1) {
      return false;
    }
    var today = new Date();
    var birthDate = new Date(dob1);
    if (birthDate > today) return false;

    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    // console.log(age_now);
    if (age_now > birthDateValid) {
      return false;
    }
    return true;
  };

  const validateInDay = (dob1) => {
    if (!dob1) {
      return false;
    }
    var today = new Date();
    var birthDate = new Date(dob1);
    if (birthDate > today) return false;
    return true;
  };

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

    if (formState.addressPermanent.trim() === "") {
      var lAddressErr = "Vui lòng điền trường này";
      result = false;
    } else {
      var lAddressErr = "";
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

    if (!validateInDay(formState.dateIn)) {
      var dInErr = "Vui lòng chọn ngày hợp lệ";
      result = false;
    } else {
      var dInErr = "";
    }

    if (!formState.typeOfOrphan.orphanTypeId) {
      var orpTypeErr = "Vui lòng chọn loại trẻ";
      result = false;
    } else {
      var orpTypeErr = "";
    }

    setFormErrors({
      firstName: fNameErr,
      lastName: lNameErr,
      addressPermanent: lAddressErr,
      nationality: lNationErr,
      birthDay: bDayErr,
      dateIn: dInErr,
      typeOfOrphan: orpTypeErr,
    });
    return result;
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleTypeOChange = (e) => {
    const orpType = formState.typeOfOrphan;
    orpType.orphanTypeId = e.target.value;
    setFormState({
      ...formState,
      typeOfOrphan: orpType,
    });
  };

  const handleEditorChange = (content) => {
    formState.circumstance = content;
  };

  const handleImageChoose = async (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      var newDate = new Date(formState.birthDay);
      let dateMDY = `${newDate.getDate()}-${
        newDate.getMonth() + 1
      }-${newDate.getFullYear()}`;

       formState.birthDay = dateMDY;
      // var newDateIn = new Date(formState.birthDay);
      // let dateInMDY = `${newDateIn.getDate()}-${
      //   newDateIn.getMonth() + 1
      // }-${newDateIn.getFullYear()}`;
      var newDateIn = new Date(formState.dateIn);
      let dateInMDY = `${newDateIn.getDate()}-${
        newDateIn.getMonth() + 1
      }-${newDateIn.getFullYear()}`;
      formState.dateIn = dateInMDY;

      const data = new FormData();
      data.append(
        "children",
        new Blob(
          [
            JSON.stringify({
              firstName: formState.firstName,
              lastName: formState.lastName,
              gender: formState.gender,
              nationality: formState.nationality,
              addressPermanent: formState.addressPermanent,
              addressTemporary: formState.addressTemporary,
              birthDay: formState.birthDay,
              dateIn: formState.dateIn,
              circumstance: formState.circumstance,
              typeOfOrphan: formState.typeOfOrphan,
            }),
          ],
          {
            type: "application/json",
          }
        )
      );
      data.append("image", image);

      const response = await privateFDataApi.addChild(data);
      console.log(response);

      closeModal();
      if (response.status == 200) {
        alert("Đã thêm thành công");
      } else {
        alert("Thất bại");
      }
      onSubmit();
    }
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
      style={{ zIndex: "100", paddingTop: "15px" }}
    >
      <div className="modal w-6" style={{ height: "100%", width: "50em" }}>
        <h1 className="font-semibold text-xl text-center ">
          Nhập thông tin trẻ
        </h1>
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
            <div className="flex justify-between fl-inputs">
              <div>
                <input
                  name="birthDay"
                  value={formState.birthDay}
                  placeholder="Ngày sinh*"
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  maxDate={moment()}
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
              name="nationality"
              placeholder="Quốc tịch*"
              value={formState.nationality}
              onChange={handleChange}
            />
            <span className="text-sm text-red-500 text-bold">
              {formErrors.nationality && <i>* {formErrors.nationality}</i>}
            </span>
          </div>
          <div className="form-group">
            <div className="flex justify-between fl-inputs">
              <div>
                <input
                  name="dateIn"
                  value={formState.dateIn}
                  placeholder="Ngày tiếp nhận*"
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  onChange={handleChange}
                />
                <span className="text-sm text-red-500 text-bold">
                  {formErrors.dateIn && <i>* {formErrors.dateIn}</i>}
                </span>
              </div>
              <div>
                <select
                  name="typeOfOrphan"
                  value={formState.typeOfOrphan.orphanTypeId}
                  onChange={handleTypeOChange}
                >
                  <option value={0} selected disabled>
                    Chọn loại trẻ
                  </option>
                  {orphanTypes.map((orphanType, index) => (
                    <option key={index} value={orphanType.orphanTypeId}>
                      {index + 1}. {orphanType.orphanTypeName}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-red-500 text-bold">
                  {formErrors.typeOfOrphan && (
                    <i>* {formErrors.typeOfOrphan}</i>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="image">Chọn ảnh của trẻ*</label>
            <input type="file" id="image" onChange={handleImageChoose} />
          </div>
          <div className="form-group">
            <JoditEditor
              config={config}
              value={formState.circumstance}
              onChange={(newContent) => {
                handleEditorChange(newContent);
              }}
            />
          </div>
          {errors && <div className="error">{errors}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
