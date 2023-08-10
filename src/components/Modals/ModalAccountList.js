import React, { useEffect, useState } from "react";
import "../../assets/styles/modal.css";
import usePrivateApi from "../../api/usePrivateApi";
// import apiMethod from "api/apiMethod";
export const ModalAccount = ({ closeModal, onSubmit, defaultValue }) => {
  const privateApi = usePrivateApi();
  const [formState, setFormState] = useState(
    defaultValue || {
      userName: "",
      passWord: "",
      role: { roleId: "" },
    }
  );

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const getRole = async () => {
      try {
        const response = await privateApi.getAllRoles();
        setRoles(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRole();
  }, []);

  useEffect(() => {
    if (roles.length > 0) {
      var newRole = { roleId: roles[0].roleId };
      setFormState({
        ...formState,
        role: newRole,
      });
    }
  }, [roles]);
  const [errors, setErrors] = useState("");
  const validateForm = () => {
    if (formState.userName && formState.passWord && formState.role) {
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

  const handleRoleChange = (e) => {
    const newRole = formState.role;
    newRole.roleId = e.target.value;
    setFormState({
      ...formState,
      role: newRole,
    });
  };
  // submit account vừa thêm
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await privateApi.saveUser(formState);
      console.log(response.status);
      onSubmit();
    } catch (error) {
      if (!error?.response) {
        console.log("No Serve Response");
      }
    }
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
          <div className="form-group">
            <label htmlFor="userName">Tên tài khoản</label>
            <input
              name="userName"
              value={formState.userName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passWord">Mật khẩu</label>
            <input
              name="passWord"
              value={formState.passWord}
              onChange={handleChange}
            />
          </div>{" "}
          <div className="form-group">
            <label htmlFor="role">Quyền</label>
            <select
              name="role"
              value={formState.role.roleId}
              onChange={handleRoleChange}
            >
              {roles.map((role, index) => {
                return (
                  <option key={index} value={role.roleId}>
                    {role.roleName}
                  </option>
                );
              })}
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
