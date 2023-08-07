import React, { useState } from "react";
import "../../assets/styles/modal.css";
export const ModalCitizenID = ({
  childId,
  closeModal,
  onSubmit,
  defaultValue,
}) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      citizenIdentNumber: "",
      issueDate: "",
      expireDate: "",
      issuePlace: "",
    }
  );

  const [errors, setErrors] = useState("");
  const validateForm = () => {
    if (
      formState.citizenIdentNumber &&
      formState.issueDate &&
      formState.issuePlace &&
      formState.expireDate
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    var newIsDate = new Date(formState.issueDate);
    let dateIsMDY = `${newIsDate.getDate()}-${
      newIsDate.getMonth() + 1
    }-${newIsDate.getFullYear()}`;

    formState.issueDate = dateIsMDY;

    var newExDate = new Date(formState.expireDate);
    let dateExMDY = `${newExDate.getDate()}-${
      newExDate.getMonth() + 1
    }-${newExDate.getFullYear()}`;
    formState.expireDate = dateExMDY;

    onSubmit(formState);
    // closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
      style={{ zIndex: "100", paddingTop: "15px" }}
    >
      <div className="modal w-6" style={{ height: "auto" }}>
        <h1 className="font-semibold text-xl text-center ">
          Nhập thông tin CCCD
        </h1>
        <br />
        <form>
          <div className="form-group">
            <input
              placeholder="Số căn cước công dân"
              name="citizenIdentNumber"
              value={formState.citizenIdentNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Ngày, tháng, năm cấp"
              name="issueDate"
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              value={formState.issueDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Ngày, tháng, năm hết hạn"
              type="text"
              name="expireDate"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              value={formState.expireDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Nơi cấp"
              name="issuePlace"
              type="text"
              value={formState.issuePlace}
              onChange={handleChange}
            />
          </div>
          {errors && <div className="error">{`Vui lòng điền: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
};
