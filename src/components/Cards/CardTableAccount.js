import React from "react";
import PropTypes from "prop-types";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
// components
<<<<<<< HEAD
import "../../assets/styles/tableItems.css";
// import "../../assets/styles/tableAccountCard.css"
// import TableDropdown from "components/Dropdowns/TableDropdown.js";
=======
import "../../assets/styles/tableItems.css"

>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd

export default function CardTableAccount({ color, rows, deleteRow, editRow }) {
  return (
    <>
      {/* Bảng 1: Danh sách tài khoản Admin */}
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded mb-0 py-3 border-1">
          <div className="flex flex-wrap">
            <div className="relative w-full px-1 margin-top: 10 max-w-full flex-grow flex-1" align="center">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                DANH SÁCH TÀI KHOẢN ADMIN
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên tài khoản</th>
                  <th>Vai trò</th>
                  <th className="Expand">Mô tả</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => {
                  // const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);

                  return (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{row.userName}</td>
                      <td>{row.role.roleName}</td>
                      <td>{row.role.description}</td>
                      <td>Đang hoạt động</td>
                      <td>
                        <span className="actions">
                          <BsFillTrashFill
                            className="delete-btn"
                            onClick={() => deleteRow(idx)}
                          />
                          <BsFillPencilFill onClick={() => editRow(idx)} />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bảng 2: Danh sách tài khoản Quản lý */}
    </>
  );
}

CardTableAccount.defaultProps = {
  color: "light",
};

CardTableAccount.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
