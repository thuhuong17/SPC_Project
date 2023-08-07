import React, { useEffect, useMemo, useState } from "react";
import JoditEditor from "jodit-react";
import usePrivateApi from "api/usePrivateApi";
import privateFormDataApi from "api/privateFormDataApi";
// import "../../assets/styles/modal1.css"
export const ChildModal = ({ closeModal, onSubmit, defaultValue }) => {
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

    var newDate = new Date(formState.birthDay);
    let dateMDY = `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;

    formState.birthDay = dateMDY;

    var newDateIn = new Date(formState.birthDay);
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
    onSubmit();
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
      <div className="modal w-6" style={{ height: "100%", width: "50em" }}>
        <h1 className="font-semibold text-xl text-center ">
          Nhập thông tin trẻ
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
              name="nationality"
              placeholder="Quốc tịch"
              value={formState.nationality}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div className="flex justify-between fl-inputs">
              <input
                name="dateIn"
                value={formState.dateIn}
                placeholder="Ngày tiếp nhận"
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={handleChange}
              />

              <select
                name="typeOfOrphan"
                value={formState.typeOfOrphan.orphanTypeId}
                onChange={handleTypeOChange}
              >
                {/* <option value="-1" selected>
                  Kiểu trẻ em
                </option> */}
                {orphanTypes.map((orphanType, index) => (
                  <option key={index} value={orphanType.orphanTypeId}>
                    {orphanType.orphanTypeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="image">Chọn ảnh của trẻ</label>
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
          {errors && <div className="error">{`Vui lòng điền: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
