import React from "react";
import PropTypes from "prop-types";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "../../assets/styles/tableItems.css";

export default function CardTable({ color, rows, deleteRow, editRow }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Danh sách trang web
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
                  <th>Tên trang web</th>
                  <th className="Expand">Mô tả</th>
                  <th>Trạng thái</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {
                      rows.map((row, idx)=> {
                        const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);

                        return <tr key={idx}>
                          <td>{row.stt}</td>
                          <td>{row.page}</td>
                          <td className="expand">{row.description}</td>
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
                    } */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
