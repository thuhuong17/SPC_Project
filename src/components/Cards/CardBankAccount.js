import React from "react";
import PropTypes from "prop-types";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
// components
import "../../assets/styles/tableItems.css"
import "../../assets/styles/tableFinanceCard.css"

export default function CardBackAccount ({ color, accBank, deleteRow, editRow }) {
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
                            >Tài khoản ngân hàng
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
                                    <th className="expand4">Tên tài khoản</th>
                                    <th className="expand4">Số tài khoản</th>
                                    <th className="expand4">Ngân hàng</th>
                                    <th className="expand4">Số dư</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {accBank.map((row, idx) => {
                                    return <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td className="expand4">{row?.accountName}</td>
                                        <td className="expand4">{row?.accountNumber}</td>
                                        <td className="expand4">{row?.bankName}</td>
                                        <td className="expand4">{row?.balance}</td>
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

CardBackAccount.defaultProps = {
    color: "light",
};

CardBackAccount.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
