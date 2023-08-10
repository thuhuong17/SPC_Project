import React, { useEffect, useMemo, useState } from "react";
import usePrivateApi from "../../api/usePrivateApi";
import privateFormDataApi from "../../api/privateFormDataApi";

export const ModalEmployee = ({ closeModal, onSubmit, defaultValue }) => {
  const privateApi = usePrivateApi();
  const privateFDataApi = privateFormDataApi();
  const [jobs, setJobs] = useState([]);
  const [shifts, setShifts] = useState([]);

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    gender: "nam",
    nationality: "",
    addressTemporary: "",
    addressPermanent: "",
    email: "",
    phoneNumber: "",
    fromDate: "",
    salary: "",
    job: {
      jobId: null,
    },
    shift: {
      shiftId: null,
    },
  });

  const [image, setImage] = useState();

  useEffect(() => {
    const getJobs = async () => {
      const response = await privateApi.getAllJobs();
      setJobs(response.data);
    };
    getJobs();
  }, []);

  useEffect(() => {
    const getShifts = async () => {
      const response = await privateApi.getAllShifts();
      setShifts(response.data);
    };
    getShifts();
  }, []);

  const [errors, setErrors] = useState("");
  const validateForm = () => {
    if (
      formState.firstName &&
      formState.lastName &&
      formState.birthDay &&
      formState.gender &&
      formState.addressPermanent &&
      formState.addressTemporary &&
      formState.salary &&
      formState.phoneNumber &&
      formState.nationality
    ) {
      setErrors("");
      return true;
    } else {
      setErrors("Vui lòng điền đầy đủ thông tin");
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleJobChange = (e) => {
    const job = formState.job;
    job.jobId = e.target.value;
    setFormState({
      ...formState,
      job: job,
    });
  };

  const handleShiftChange = (e) => {
    const shift = formState.shift;
    shift.shiftId = e.target.value;
    setFormState({
      ...formState,
      shift: shift,
    });
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

      var newFromDate = new Date(formState.fromDate);
      let dateFrMDY = `${newFromDate.getDate()}-${
        newFromDate.getMonth() + 1
      }-${newFromDate.getFullYear()}`;
      formState.fromDate = dateFrMDY;
      console.log(formState);

      const data = new FormData();
      data.append(
        "employee",
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
              fromDate: formState.fromDate,
              email: formState.email,
              phoneNumber: formState.phoneNumber,
              job: formState.job,
              shift: formState.shift,
              salary: formState.salary,
            }),
          ],
          {
            type: "application/json",
          }
        )
      );
      data.append("image", image);

      const response = await privateFDataApi.addEmployee(data);
      onSubmit();
      closeModal();
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
          Nhập thông tin nhân viên
        </h1>
        {/* <br /> */}
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
          <div className="form-group">
            <input
              name="fromDate"
              value={formState.fromDate}
              placeholder="Ngày bắt đầu làm việc"
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div className="flex justify-between fl-inputs">
              <select
                name="job"
                value={formState.job.jobId}
                onChange={handleJobChange}
              >
                <option value={-1}>Chọn công việc</option>
                {jobs.map((job, index) => (
                  <option key={index} value={job.jobId}>
                    {job.jobTitle}
                  </option>
                ))}
              </select>
              <select
                name="shift"
                value={formState.shift.shiftId}
                onChange={handleShiftChange}
              >
                <option value={-1}>Chọn ca làm việc</option>
                {shifts.map((shift, index) => (
                  <option key={index} value={shift.shiftId}>
                    {shift.shiftTitle}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <input
              name="salary"
              type="number"
              placeholder="Lương"
              value={formState.salary}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input type="file" id="image" onChange={handleImageChoose} />
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
