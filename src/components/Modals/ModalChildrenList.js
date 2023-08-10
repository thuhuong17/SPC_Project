import React, { useEffect, useState } from "react";
import "../../assets/styles/modal.css";
import usePrivateApi from "api/usePrivateApi";
export const ModalChildrenList = ({ employeeId, closeModal }) => {
  const privateApi = usePrivateApi();
  const [children, setChildren] = useState([]);
  useEffect(() => {
    const getChildren = async () => {
      const response = await privateApi.getChildrenByEmployee(employeeId);
      setChildren(response.data);
    };
    getChildren();
  }, [employeeId]);
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
      style={{ zIndex: "100", paddingTop: "15px" }}
    >
      <div className="modal" style={{ height: "auto", width: "auto" }}>
        <h1 className="font-semibold text-xl text-center ">
          Danh sách trẻ quản lý ({children.length})
        </h1>
        <br />
        <div className="block w-full overflow-x-auto">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>Giới tính</th>
                  <th>Ngày sinh</th>
                  <th>Ngày tiếp nhận</th>
                  <th>Hoàn cảnh</th>
                </tr>
              </thead>
              <tbody>
                {children.map((child, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{child.fullName}</td>
                      <td>{child.gender}</td>
                      <td>{child.birthDay}</td>
                      <td>{child.dateIn}</td>
                      <td>{child.typeOfOrphan.orphanTypeName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
