import React, { useState } from "react";
// import "../../assets/styles/modal1.css"
export const ChildModal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      firstname: "",
      lastname: "",
      birthday: "",
      gender: "",
      // nationality: "",
      address_temporary: "",
      address_permanent: "",
      citizen: "",
      date_in: "",
      status: "live",
    }
  );

  const [errors, setErrors] = useState("");
  const validateForm = () => {
    if (
      formState.firstname &&
      formState.lastname &&
      formState.birthday &&
      formState.gender &&
      formState.address_temporary &&
      formState.address_permanent &&
      formState.citizen &&
      formState.date_in &&
      formState.status
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
  // update danh sách
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  // submit account vừa thêm
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formState);
    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form">
            <label htmlFor="firstname">Họ</label>
            <input
              type="text"
              className="firstname"
              name="firstname"
              value={formState.firstname}
              onChange={handleChange}
            />
            <label htmlFor="lastname">Tên</label>
            <input
              type="text"
              className="lastname"
              name="lastname"
              value={formState.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="form">
            <label htmlFor="birthday">Ngày sinh</label>
            <input
              type="date"
              className="birthday"
              name="birthday"
              value={formState.birthday}
              onChange={handleChange}
            />
            {/* gioi tinh */}
            <label htmlFor="gender" className="gender">
              Giới tính
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value={formState.gender}
              onChange={handleChange}
              className="female"
            />
            <label for="female"> Nữ</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value={formState.gender}
              onChange={handleChange}
              className="male"
            />
            <label for="male">Nam</label>
          </div>
          {/* quoc tich */}
          {/* <div className='form-group'>
                    <label htmlFor="nationality">Quốc tịch</label>
                    <select name='nationality' className='nationality' value={formState.nationality} onChange={handleChange}>
                        <option value="0">Chon quoc tich</option>
                        <option value="1">Audi</option>
                        <option value="2">BMW</option>
                        <option value="3">Citroen</option>
                        <option value="4">Ford</option>
                        <option value="5">Honda</option>
                    </select>
                    </div> */}
          <div className="form-group">
            <label htmlFor="address_temporary">Địa chỉ tạm trú</label>
            <input
              name="address_temporary"
              value={formState.address_temporary}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address_permanent">Địa chỉ thường trú</label>
            <input
              name="address_permanent"
              value={formState.address_permanent}
              onChange={handleChange}
            />
          </div>
          <div className="form">
            <label htmlFor="date_in">Ngày đến</label>
            <input
              type="date"
              name="date_in"
              className="date_in"
              value={formState.date_in}
              onChange={handleChange}
            />
            <label htmlFor="citizen">CCCD</label>
            <input
              type="text"
              name="citizen"
              className="citizen"
              value={formState.citizen}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Trạng thái</label>
            <select
              name="status"
              value={formState.status}
              onChange={handleChange}
            >
              <option value="live">Chưa được nhận nuôi</option>
              <option value="off">Đã được nhận nuôi</option>
              <option value="error">Đang xử lý</option>
            </select>
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
