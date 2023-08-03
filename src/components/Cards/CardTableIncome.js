import React from "react";
import PropTypes from "prop-types";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
// components
import "../../assets/styles/tableItems.css"
import "../../assets/styles/tableFinanceCard.css"

export default function CardTableIncome({ color, income, deleteRow, editRow }) {
    return (
        <>
            <div className={
                "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
            }>
                <div className="rounded-t mb-0 px-4 py-3 border-0 card-header">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >Khoản thu
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <div className="table-main flex-1">
                        <table className="max-w-full table table-finance">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th className="expand6">Tên khoản thu</th>
                                    <th className="expand6">Mô tả</th>
                                    <th className="expand6">Số tiền</th>
                                    <th className="expand6">Ngân sách</th>
                                    <th className="expand6">Tài khoản ngân hàng</th>
                                    <th className="expand6">Ngày thu</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {income.map((row, idx) => {
                                    return <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td className="expand6">{row?.incomeName}</td>
                                        <td className="expand6">{row?.incomeDescription}</td>
                                        <td className="expand6">{row?.amount}</td>
                                        <td className="expand6">{row?.budget?.budgetName}</td>
                                        <td className="expand6">{row?.bankAccount?.accountNumber}</td>
                                        <td className="expand6">{row?.dateTime}</td>
                                        <td>
                                            <span className="actions">
                                                <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)} />
                                                <BsFillPencilFill onClick={() => editRow(idx)} />
                                            </span>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

CardTableIncome.defaultProps = {
    color: "light",
};

CardTableIncome.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
