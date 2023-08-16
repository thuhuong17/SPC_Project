import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
// components
import "../../assets/styles/tableItems.css"
import "../../assets/styles/tableFinanceCard.css"
import { Pagination } from "@mui/material";
import usePrivateApi from "api/usePrivateApi";

export default function CardTableExpense({ color, expense, deleteRow, editRow }) {
    const api = usePrivateApi()

    const [page, setPage] = useState(1);
    const [pageExpense, setPageExpense] = useState([]);

    const getExpense = async () => {
        try {
            const response = await api.getPageExpense(page - 1);
            setPageExpense(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getExpense()
    }, [page, expense])

    const count = Math.ceil(expense.length / 5);

    const handleChange = (e, p) => {
        setPage(p);
    };

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
                            >Khoản chi
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
                                    <th className="expand6">Tên khoản chi</th>
                                    <th className="expand6">Mô tả</th>
                                    <th className="expand6">Số tiền</th>
                                    <th className="expand6">Ngân sách</th>
                                    <th className="expand6">Tài khoản ngân hàng</th>
                                    <th className="expand6">Ngày chi</th>
                                    {/* <th>Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {pageExpense.map((row, idx) => {
                                    return <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td className="expand6">{row?.expenseName}</td>
                                        <td className="expand6">{row?.expenseDescription}</td>
                                        <td className="expand6">{(row?.amount)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                        <td className="expand6">{row?.budget?.budgetName}</td>
                                        <td className="expand6">
                                            Tên: {row?.bankAccount?.accountName}
                                            <br />
                                            STK: {row?.bankAccount?.accountNumber}
                                        </td>
                                        <td className="expand6">{row?.dateTime}</td>
                                        {/* <td>
                                            <span className="actions">
                                                <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(row?.expenseId)} />
                                                <BsFillPencilFill onClick={() => editRow(row?.expenseId)} />
                                            </span>
                                        </td> */}
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Pagination
                count={count}
                color="primary"
                page={page}
                shape="rounded"
                onChange={handleChange}
            />
        </>
    );
}

CardTableExpense.defaultProps = {
    color: "light",
};

CardTableExpense.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
