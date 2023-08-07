import React from "react";
import PropTypes from "prop-types";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
// components
import "../../assets/styles/tableItems.css"



export default function CardTableChild({ color, rows, deleteRow, editRow }) {
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
                DANH SÁCH TRẺ EM
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
                      <th>Họ</th>
                      <th>Tên</th>
                      <th>Ngày sinh</th>
                      <th>Giới tính</th>
                      <th>Quốc tịch</th>
                      <th>Địa chỉ tạm trú</th>
                      <th>Địa chỉ thường trú</th>
                      <th>CCCD</th>
                      <th>Ngày đến</th>
                      <th>Tình trạng</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      rows.map((row, idx)=> {
                        const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);

                        return <tr key={idx}>
                          <td>{row.stt}</td>
                          <td>{row.firstname}</td>
                          <td>{row.lastname}</td>
                          <td>{row.birthday}</td>
                          <td>{row.gender}</td>
                          <td>{row.nationality}</td>
                          <td>{row.address_temporary}</td>
                          <td>{row.address_permanent}</td>
                          <td>{row.citizen}</td>
                          <td>{row.date_in}</td>
                          <td>
                            <span className={`label label-${row.status}`}>
                              {statusText}
                            </span>
                          </td>
                          <td>
                            <span className="actions">
                              <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)}/>
                              <BsFillPencilFill onClick={() => editRow(idx)}/>
                            </span>
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bảng 2: Danh sách tài khoản Quản lý */}

    </>
  );
}

CardTableChild.defaultProps = {
  color: "light",
};

CardTableChild.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
