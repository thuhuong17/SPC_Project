import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
// components
import "../../assets/styles/tableItems.css"
import "../../assets/styles/tableFinanceCard.css"
import usePrivateApi from "api/usePrivateApi";
import { Pagination } from "@mui/material";

export default function CardBackAccount({ color, accBank, deleteRow, editRow }) {
    const api = usePrivateApi()

    const [page, setPage] = useState(1);
    const [pageBankAccount, setPageBankAccount] = useState([]);

    const getBankAccount = async () => {
        try {
            const response = await api.getPageBankAccount(page - 1);
            setPageBankAccount(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getBankAccount()
    }, [page, accBank])

    const count = Math.ceil(accBank.length / 5);

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
                                    <th className="expand3">Tên tài khoản</th>
                                    <th className="expand3">Số tài khoản</th>
                                    <th className="expand3">Ngân hàng</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pageBankAccount.map((row, idx) => {
                                    return <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td className="expand3">{row?.accountName}</td>
                                        <td className="expand3">{row?.accountNumber}</td>
                                        <td className="expand3">{row?.bankName}</td>
                                        <td>
                                            <span className="actions">
                                                <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(row?.bankAccountId)} />
                                                <BsFillPencilFill onClick={() => editRow(row?.bankAccountId)} />
                                            </span>
                                        </td>
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

CardBackAccount.defaultProps = {
    color: "light",
};

CardBackAccount.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
