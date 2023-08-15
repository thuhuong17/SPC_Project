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

  const [formErrors, setFormErrors] = useState({
    citizenIdentNumber: "",
    issueDate: "",
    expireDate: "",
    issuePlace: "",
  });

  const [errors, setErrors] = useState("");
  const validateForm = () => {
    let result = true;

    const today = new Date();

    if (!(formState.citizenIdentNumber.length == 12)) {
      var IdentNumErr = "Vui lòng điền đúng định dạng";
      result = false;
    } else {
      var IdentNumErr = "";
    }

    var isDate = new Date(formState.issueDate);
    var exDate = new Date(formState.expireDate);
    if (!formState.issueDate || isDate > today) {
      var isDateErr = "Vui lòng chọn ngày hợp lệ";
      result = false;
    } else {
      var isDateErr = "";
    }
    if (!formState.expireDate || exDate < today) {
      var exDateErr = "Vui lòng chọn ngày hợp lệ";
      result = false;
    } else {
      var exDateErr = "";
    }

    if (formState.issuePlace.trim() === "") {
      var issuePlaceErr = "Vui lòng điền trường này";
      result = false;
    } else {
      var issuePlaceErr = "";
    }

    setFormErrors({
      citizenIdentNumber: IdentNumErr,
      issueDate: isDateErr,
      expireDate: exDateErr,
      issuePlace: issuePlaceErr,
    });
    return result;
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
    closeModal();
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
              type="number"
              inputmode="numeric"
              maxLength={12}
              minLength={12}
              name="citizenIdentNumber"
              value={formState.citizenIdentNumber}
              onChange={handleChange}
            />
            <span className="text-sm text-red-500 text-bold">
              {formErrors.citizenIdentNumber && (
                <i>* {formErrors.citizenIdentNumber}</i>
              )}
            </span>
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
            <span className="text-sm text-red-500 text-bold">
              {formErrors.issueDate && <i>* {formErrors.issueDate}</i>}
            </span>
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
            <span className="text-sm text-red-500 text-bold">
              {formErrors.expireDate && <i>* {formErrors.expireDate}</i>}
            </span>
          </div>
          <div className="form-group">
            <input
              placeholder="Nơi cấp"
              name="issuePlace"
              type="text"
              value={formState.issuePlace}
              onChange={handleChange}
            />
            <span className="text-sm text-red-500 text-bold">
              {formErrors.issuePlace && <i>* {formErrors.issuePlace}</i>}
            </span>
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
