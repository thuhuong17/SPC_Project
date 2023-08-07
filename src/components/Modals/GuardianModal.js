import React, { useEffect, useMemo, useState } from "react";
import JoditEditor from "jodit-react";
import usePrivateApi from "api/usePrivateApi";
import privateFormDataApi from "api/privateFormDataApi";

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

  const [errors, setErrors] = useState("");
  const validateForm = () => {
    // if (
    //   formState.firstname &&
    //   formState.lastname &&
    //   formState.birthday &&
    //   formState.gender &&
    //   formState.address_temporary &&
    //   formState.address_permanent &&
    //   formState.citizen &&
    //   formState.date_in &&
    //   formState.status
    // ) {
    //   setErrors("");
    //   return true;
    // } else {
    //   let errorFields = [];
    //   for (const [key, value] of Object.entries(formState)) {
    //     if (!value) {
    //       errorFields.push(key);
    //     }
    //   }
    //   setErrors(errorFields.join(", "));
    //   return false;
    // }
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

    var newDate = new Date(formState.birthDay);
    let dateMDY = `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;

    formState.birthDay = dateMDY;
    formState.fullName = `${formState.lastName} ${formState.firstName}`;

    console.log(childId);
    console.log(formState);
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
              placeholder="Tên"
              value={formState.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Họ và tên đệm"
              value={formState.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              name="relationshipType"
              placeholder="Mối quan hệ với trẻ"
              value={formState.relationshipType}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div className="flex justify-between fl-inputs">
              <input
                name="birthDay"
                value={formState.birthDay}
                placeholder="Ngày sinh*"
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={handleChange}
              />
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

          <div className="form-group">
            <input
              name="addressPermanent"
              placeholder="Địa chỉ thường trú"
              value={formState.addressPermanent}
              onChange={handleChange}
            />
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
              name="phoneNumber"
              placeholder="Số điện thoại"
              value={formState.phoneNumber}
              onChange={handleChange}
            />
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
              placeholder="Quốc tịch"
              value={formState.nationality}
              onChange={handleChange}
            />
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
