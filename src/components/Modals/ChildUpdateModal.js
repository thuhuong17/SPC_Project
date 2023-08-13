import React, { useEffect, useMemo, useState } from "react";
import JoditEditor from "jodit-react";
import usePrivateApi from "api/usePrivateApi";
import privateFormDataApi from "api/privateFormDataApi";
import { reunicode, birthDateValid } from "constant/Regrex";
import moment from "moment";
import { BsPlusCircle } from "react-icons/bs";
import { regexPhoneNumber } from "constant/Regrex";

export const ChildUpdateModal = ({ closeModal, onSubmit, children }) => {
  const privateApi = usePrivateApi();
  const privateFDataApi = privateFormDataApi();
  const [orphanTypes, setOrphanTypes] = useState([]);
  const [image, setImage] = useState();
  const [employees, setEmployees] = useState([]);
  const [cccdInp, setCccdInp] = useState(false);
  const [guardianInp, setGuardianInp] = useState(false);
  const [status, setStatus] = useState([]);

  const [child, setChild] = useState(children);
  const [citizenId, setCitizenId] = useState(
    children?.citizenId || {
      citizenIdentNumber: "",
      issueDate: "",
      expireDate: "",
      issuePlace: "",
    }
  );

  const [guardian, setGuardian] = useState(children?.guardian);

  useEffect(() => {
    setChild(children);
  }, [children]);

  useEffect(() => {
    const getStatus = async () => {
      const response = await privateApi.getChildrenStatus();
      setStatus(response.data);
    };
    getStatus();
  }, []);

  useEffect(() => {
    const getChildrenTypes = async () => {
      const response = await privateApi.getChildrenTypes();
      setOrphanTypes(response.data);
    };
    getChildrenTypes();
  }, []);

  useEffect(() => {
    const getEmployeess = async () => {
      const response = await privateApi.getEmployeesByJob("Chăm sóc trẻ");
      setEmployees(response.data);
    };
    getEmployeess();
  }, []);

  function isValid(str) {
    return reunicode.test(str);
  }
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

  const [formCitizErrors, setFormCitizErrors] = useState({
    citizenIdentNumber: "",
    issueDate: "",
    expireDate: "",
    issuePlace: "",
  });

  const [formGuarErrors, setFormGuarErrors] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    nationality: "",
    addressPermanent: "",
    phoneNumber: "",
    relationshipType: "",
  });

  const changeDate = (date) => {
    var newD = new Date(date);
    let dateMDY = `${
      newD.getMonth() + 1
    }/${newD.getDate()}/${newD.getFullYear()}`;
    let reDate = new Date(dateMDY);
    return reDate;
  };

  const validateBDay = (dob1) => {
    if (!dob1) {
      return false;
    }
    var today = new Date();
    var birthDate = new Date(dob1);
    if (changeDate(birthDate) > today) return false;

    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
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
    console.log(changeDate(dob1));
    if (changeDate(dob1) > today) return false;
    return true;
  };

  const validateForm = () => {
    let result = true;

    if (!isValid(child.firstName)) {
      var fNameErr = "Vui lòng điền đúng định dạng";
      result = false;
    } else {
      var fNameErr = "";
    }

    if (child.lastName.trim() === "") {
      var lNameErr = "Vui lòng điền đúng định dạng";
      result = false;
    } else {
      var lNameErr = "";
    }

    if (child.addressPermanent.trim() === "") {
      var lAddressErr = "Vui lòng điền trường này";
      result = false;
    } else {
      var lAddressErr = "";
    }

    if (child.nationality.trim() === "") {
      var lNationErr = "Vui lòng điền trường này";
      result = false;
    } else {
      var lNationErr = "";
    }

    if (!validateBDay(child.birthDay)) {
      var bDayErr = "Vui lòng chọn ngày sinh hợp lệ";
      result = false;
    } else {
      var bDayErr = "";
    }

    if (!validateInDay(child.dateIn)) {
      var dInErr = "Vui lòng chọn ngày hợp lệ";
      result = false;
    } else {
      var dInErr = "";
    }

    if (!child.typeOfOrphan.orphanTypeId) {
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

  const validateCitizenForm = () => {
    let result = true;

    const today = new Date();

    if (!(citizenId.citizenIdentNumber.length == 12)) {
      var IdentNumErr = "Vui lòng điền đúng định dạng";
      result = false;
    } else {
      var IdentNumErr = "";
    }

    var isDate = new Date(citizenId.issueDate);
    var exDate = new Date(citizenId.expireDate);
    if (!citizenId.issueDate) {
      var isDateErr = "Vui lòng chọn ngày hợp lệ";
      result = false;
    } else {
      var isDateErr = "";
    }
    if (!citizenId.expireDate) {
      var exDateErr = "Vui lòng chọn ngày hợp lệ";
      result = false;
    } else {
      var exDateErr = "";
    }

    if (citizenId.issuePlace.trim() === "") {
      var issuePlaceErr = "Vui lòng điền trường này";
      result = false;
    } else {
      var issuePlaceErr = "";
    }

    setFormCitizErrors({
      citizenIdentNumber: IdentNumErr,
      issueDate: isDateErr,
      expireDate: exDateErr,
      issuePlace: issuePlaceErr,
    });
    return result;
  };

  console.log(child);

  const validateGuardianForm = () => {
    let result = true;
    if (!isValid(guardian.firstName)) {
      var fNameErr = "Vui lòng điền đúng định dạng";
      result = false;
    } else {
      var fNameErr = "";
    }

    if (guardian.lastName.trim() === "") {
      var lNameErr = "Vui lòng điền đúng định dạng";
      result = false;
    } else {
      var lNameErr = "";
    }

    if (guardian.nationality.trim() === "") {
      var lNationErr = "Vui lòng điền trường này";
      result = false;
    } else {
      var lNationErr = "";
    }
    const today = new Date();
    if (changeDate(guardian.birthDay) > today) {
      var bDayErr = "Vui lòng chọn ngày sinh hợp lệ";
      result = false;
    } else {
      var bDayErr = "";
    }

    if (guardian.addressPermanent.trim() === "") {
      var lAddressErr = "Vui lòng điền trường này";
      result = false;
    } else {
      var lAddressErr = "";
    }

    if (!guardian.phoneNumber.match(regexPhoneNumber)) {
      var phonesErr = "Vui lòng điền số điện thoại hợp lệ";
      result = false;
    } else {
      var phonesErr = "";
    }

    setFormGuarErrors({
      firstName: fNameErr,
      lastName: lNameErr,
      addressPermanent: lAddressErr,
      nationality: lNationErr,
      birthDay: bDayErr,
      phoneNumber: phonesErr,
    });

    return result;
  };

  const config = {
    readonly: false,
    placeholder: "Nhập hoàn cảnh của trẻ",
  };

  const handleChange = (e) => {
    setChild({
      ...child,
      [e.target.name]: e.target.value,
    });
  };
  const handleTypeOChange = (e) => {
    const orpType = child.typeOfOrphan;
    orpType.orphanTypeId = e.target.value;
    setChild({
      ...child,
      typeOfOrphan: orpType,
    });
  };
  const handleEmployeeChange = (e) => {
    const emp = child.employee;
    emp.employeeId = e.target.value;
    setChild({
      ...child,
      employee: emp,
    });
  };
  const handleStatusChange = (e) => {
    const stat = child.childrenStatus;
    stat.childStatusId = e.target.value;
    setChild({
      ...child,
      status: stat,
    });
  };

  const handleImageChoose = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCitizenChange = (e) => {
    setCitizenId({
      ...citizenId,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuardianChange = (e) => {
    setGuardian({
      ...guardian,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    if (!validateForm()) {
      return;
    }
    if (child.citizenId) {
      if (!validateCitizenForm()) {
        return;
      }
      let newIsDate = new Date(citizenId.issueDate);
      let dateIsMDY = `${newIsDate.getDate()}-${
        newIsDate.getMonth() + 1
      }-${newIsDate.getFullYear()}`;

      citizenId.issueDate = dateIsMDY;

      let newExDate = new Date(citizenId.expireDate);
      let dateExMDY = `${newExDate.getDate()}-${
        newExDate.getMonth() + 1
      }-${newExDate.getFullYear()}`;
      citizenId.expireDate = dateExMDY;

      child.citizenId = citizenId;
    }
    if (child.guardian) {
      if (!validateGuardianForm()) {
        return;
      }

      let newDate = new Date(guardian.birthDay);
      let dateMDY = `${newDate.getDate()}-${
        newDate.getMonth() + 1
      }-${newDate.getFullYear()}`;

      guardian.birthDay = dateMDY;
      guardian.fullName = `${guardian.lastName} ${guardian.firstName}`;

      child.guardian = guardian;
    }
    let newDate = new Date(child.birthDay);
    let dateMDY = `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;

    child.birthDay = dateMDY;

    let newDateIn = new Date(child.dateIn);
    let dateInMDY = `${newDateIn.getDate()}-${
      newDateIn.getMonth() + 1
    }-${newDateIn.getFullYear()}`;
    child.dateIn = dateInMDY;

    data.append(
      "children",
      new Blob(
        [
          JSON.stringify({
            childId: child.childId,
            firstName: child.firstName,
            lastName: child.lastName,
            gender: child.gender,
            nationality: child.nationality,
            addressPermanent: child.addressPermanent,
            addressTemporary: child.addressTemporary,
            birthDay: child.birthDay,
            dateIn: child.dateIn,
            circumstance: child.circumstance,
            typeOfOrphan: child.typeOfOrphan,
            childrenStatus: child.childrenStatus,
            citizenId: child.citizenId,
            guardian: child.guardian,
            image: child.image,
            employee: child.employee,
          }),
        ],
        {
          type: "application/json",
        }
      )
    );
    if (image) data.append("image", image);
    console.log(child);
    const response = await privateFDataApi.update(data);
    console.log(response);
    if (response.status == 200) {
      onSubmit();
      closeModal();
    } else {
      closeModal();
    }
  };
  const handleEditorChange = (content) => {
    child.circumstance = content;
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
              value={child.firstName}
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
              value={child.lastName}
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
                  value={child.birthDay}
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
                  value={child.gender}
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
              value={child.addressPermanent}
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
              value={child.addressTemporary}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              name="nationality"
              placeholder="Quốc tịch*"
              value={child.nationality}
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
                  value={child.dateIn}
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
                  value={child.typeOfOrphan.orphanTypeId}
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
            <select
              name="typeOfOrphan"
              value={child?.employee?.employeeId}
              onChange={handleEmployeeChange}
            >
              <option value={0} selected disabled>
                Chọn nhân viên quản lý
              </option>
              {employees.map((employee, index) => (
                <option key={index} value={employee.fullName}>
                  {index + 1}. {employee.fullName} - {employee.job.jobTitle}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <select
              name="status"
              value={child?.childrenStatus?.childStatusId}
              onChange={handleStatusChange}
            >
              <option value={0} selected disabled>
                Chọn trạng thái
              </option>
              {status.map((state, index) => (
                <option key={index} value={state.childStatusId}>
                  {index + 1}. {state.status}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">Chọn ảnh của trẻ*</label>
            <input type="file" id="image" onChange={handleImageChoose} />
          </div>
          <div className="mb-2">
            {children.citizenId && (
              <button
                className="flex items-center text-red-500 "
                onClick={(e) => {
                  e.preventDefault();
                  setCccdInp(!cccdInp);
                }}
              >
                <BsPlusCircle />
                <span className="text-center ml-1"> Sửa thông tin CCCD</span>
              </button>
            )}
            {cccdInp && (
              <div className="mt-3">
                <div className="form-group">
                  <input
                    placeholder="Số căn cước công dân"
                    type="number"
                    inputMode="numeric"
                    maxLength={12}
                    minLength={12}
                    name="citizenIdentNumber"
                    value={citizenId.citizenIdentNumber}
                    onChange={handleCitizenChange}
                  />
                  <span className="text-sm text-red-500 text-bold">
                    {formCitizErrors.citizenIdentNumber && (
                      <i>* {formCitizErrors.citizenIdentNumber}</i>
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
                    value={citizenId.issueDate}
                    onChange={handleCitizenChange}
                  />
                  <span className="text-sm text-red-500 text-bold">
                    {formCitizErrors.issueDate && (
                      <i>* {formCitizErrors.issueDate}</i>
                    )}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    placeholder="Ngày, tháng, năm hết hạn"
                    type="text"
                    name="expireDate"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    value={citizenId.expireDate}
                    onChange={handleCitizenChange}
                  />
                  <span className="text-sm text-red-500 text-bold">
                    {formCitizErrors.expireDate && (
                      <i>* {formCitizErrors.expireDate}</i>
                    )}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    placeholder="Nơi cấp"
                    name="issuePlace"
                    type="text"
                    value={citizenId.issuePlace}
                    onChange={handleCitizenChange}
                  />
                  <span className="text-sm text-red-500 text-bold">
                    {formCitizErrors.issuePlace && (
                      <i>* {formCitizErrors.issuePlace}</i>
                    )}
                  </span>
                </div>
              </div>
            )}
          </div>
          {children.guardian && (
            <div className="mb-2">
              <button
                className="flex items-center text-red-500 "
                onClick={(e) => {
                  e.preventDefault();
                  setGuardianInp(!guardianInp);
                }}
              >
                <BsPlusCircle />
                <span className="text-center ml-1">
                  Sửa thông tin người thân
                </span>
              </button>
              {guardianInp && (
                <div className="mt-3">
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Tên*"
                      value={guardian.firstName}
                      onChange={handleGuardianChange}
                    />
                    <span className="text-sm text-red-500 text-bold">
                      {formGuarErrors.firstName && (
                        <i>* {formGuarErrors.firstName}</i>
                      )}
                    </span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Họ và tên đệm*"
                      value={guardian.lastName}
                      onChange={handleGuardianChange}
                    />
                    <span className="text-sm text-red-500 text-bold">
                      {formGuarErrors.lastName && (
                        <i>* {formGuarErrors.lastName}</i>
                      )}
                    </span>
                  </div>
                  <div className="form-group">
                    <input
                      name="relationshipType"
                      placeholder="Mối quan hệ với trẻ*"
                      value={guardian.relationshipType}
                      onChange={handleGuardianChange}
                    />
                    <span className="text-sm text-red-500 text-bold">
                      {formGuarErrors.relationshipType && (
                        <i>* {formGuarErrors.relationshipType}</i>
                      )}
                    </span>
                  </div>
                  <div className="form-group">
                    <div className="flex justify-between fl-inputs">
                      <div>
                        <input
                          name="birthDay"
                          value={guardian.birthDay}
                          placeholder="Ngày sinh*"
                          type="text"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => (e.target.type = "text")}
                          onChange={handleGuardianChange}
                        />
                        <span className="text-sm text-red-500 text-bold">
                          {formGuarErrors.birthDay && (
                            <i>* {formGuarErrors.birthDay}</i>
                          )}
                        </span>
                      </div>

                      <div>
                        <select
                          id="gender"
                          name="gender"
                          value={guardian.gender}
                          onChange={handleGuardianChange}
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
                      value={guardian.addressPermanent}
                      onChange={handleGuardianChange}
                    />
                    <span className="text-sm text-red-500 text-bold">
                      {formGuarErrors.addressPermanent && (
                        <i>* {formGuarErrors.addressPermanent}</i>
                      )}
                    </span>
                  </div>
                  <div className="form-group">
                    <input
                      name="addressTemporary"
                      placeholder="Địa chỉ tạm trú"
                      value={guardian.addressTemporary}
                      onChange={handleGuardianChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="phoneNumber"
                      placeholder="Số điện thoại*"
                      value={guardian.phoneNumber}
                      onChange={handleGuardianChange}
                    />
                    <span className="text-sm text-red-500 text-bold">
                      {formGuarErrors.phoneNumber && (
                        <i>* {formGuarErrors.phoneNumber}</i>
                      )}
                    </span>
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      placeholder="Địa chỉ email"
                      value={guardian.email}
                      onChange={handleGuardianChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="nationality"
                      placeholder="Quốc tịch*"
                      value={guardian.nationality}
                      onChange={handleGuardianChange}
                    />
                    <span className="text-sm text-red-500 text-bold">
                      {formGuarErrors.nationality && (
                        <i>* {formGuarErrors.nationality}</i>
                      )}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="form-group">
            <JoditEditor
              config={config}
              value={child.circumstance}
              onChange={(newContent) => {
                handleEditorChange(newContent);
              }}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
