import React from "react";
import PropTypes from "prop-types";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
import { Link } from "react-router-dom";
// components
import "../../assets/styles/tableItems.css"
import "../../assets/styles/tableFinanceCard.css"

export default function CardTable({ color, budget, income, expense, accBank, deleteRow, editRow }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0 card-header">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {(window.location.href.split("?")[1] === "budget") ? "Ngân sách"
                  : (window.location.href.split("?")[1] === "account") ? "Tài khoản ngân hàng"
                    : (window.location.href.split("?")[1] === "income") ? "Khoản thu"
                      : (window.location.href.split("?")[1] === "expense") ? "Khoản chi"
                        : ""}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Finance table */}
          {(window.location.href.split("?")[1] === "budget")
            // Budget
            ? <div className="table-main">
              <table className="max-w-full table table-finance">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th className="expand5">Tên ngân sách</th>
                    <th className="expand5">Mô tả</th>
                    <th className="expand5">Ngân sách</th>
                    <th className="expand5">Ngày bắt đầu</th>
                    <th className="expand5">Ngày kết thúc</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    budget.map((row, idx) => {
                      return <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td className="expand5">{row?.budgetName}</td>
                        <td className="expand5">{row?.budgetDescription}</td>
                        <td className="expand5">{row?.amout}</td>
                        <td className="expand5">{row?.startDate}</td>
                        <td className="expand5">{row?.endDate}</td>
                        <td>
                          <span className="actions">
                            <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)} />
                            <BsFillPencilFill onClick={() => editRow(idx)} />
                          </span>
                        </td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
            // Expense
            : (window.location.href.split("?")[1] === "expense") ?
              <div className="table-main flex-1">
                <table className="max-w-full table table-finance">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th className="expand6">Tên khoản chi</th>
                      <th className="expand6">Mô tả</th>
                      <th className="expand6">Số tiền</th>
                      <th className="expand6">Ngân sách</th>
                      <th className="expand6">Tài khoản ngân hàng</th>
                      <th className="expand6">Ngày chi</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      expense.map((row, idx) => {
                        return <tr key={idx}>
                          <td>{idx + 1}</td>
                          <td className="expand6">{row?.expenseName}</td>
                          <td className="expand6">{row?.expenseDescription}</td>
                          <td className="expand6">{row?.amount}</td>
                          <td className="expand6">{row?.budget?.budgetName}</td>
                          <td className="expand6">{row?.bankAccount?.accountNumber} ({row?.bankAccount?.accountName})</td>
                          <td className="expand6">{row?.dateTime}</td>
                          <td>
                            <span className="actions">
                              <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)} />
                              <BsFillPencilFill onClick={() => editRow(idx)} />
                            </span>
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
              : <h2 className="p-3">Chọn mục muốn quản lý</h2>
          }
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
