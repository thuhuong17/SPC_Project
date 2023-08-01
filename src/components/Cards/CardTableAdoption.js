import React from "react";
import PropTypes from "prop-types";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
// components
import "../../assets/styles/tableItems.css"
// import "../../assets/styles/tableAccountCard.css"
// import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTableAdoption({ color, rows, deleteRow, editRow }) {
  return (
    <>
    {/* Bảng 1: Danh sách tài khoản Admin */}
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1" align="center">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                DANH SÁCH NHẬN NUÔI
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
                      <th>ID nhận nuôi</th>
                      <th>ID trẻ em</th>
                      <th className="Expand">Ngày đăng ký</th>
                      <th>Trạng thái</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      rows.map((row, idx)=> {
                        const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);

                        return <tr key={idx}>
                          <td>{row.stt}</td>
                          <td>{row.adoptionID}</td>
                          <td>{row.childId}</td>
                          <td>{row.registerDate}</td>
                          
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

CardTableAdoption.defaultProps = {
  color: "light",
};

CardTableAdoption.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
