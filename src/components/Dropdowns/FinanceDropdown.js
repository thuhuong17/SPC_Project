import React, { useState } from "react";
import { Link } from "react-router-dom";

const FinanceDropdown = () => {

    return (
        <>
            <ul className="p-4">
                <Link
                    className={
                        (window.location.href.split("?")[1] === "budget"
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/admin/finance?budget"
                >
                    <li className="pb-4 hover:border-b">
                        Ngân sách
                    </li>
                </Link>
                <Link
                    className={
                        (window.location.href.split("?")[1] === "income"
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/admin/finance?income"
                >
                    <li className="pb-4 hover:border-b">
                        Khoản thu
                    </li>
                </Link>
                <Link
                    className={
                        (window.location.href.split("?")[1] === "expense"
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/admin/finance?expense"
                >
                    <li className="pb-4 hover:border-b">
                        Khoản chi
                    </li>
                </Link>
                <Link
                    className={
                        (window.location.href.split("?")[1] === "account"
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/admin/finance?account"
                >
                    <li className="hover:border-b">
                        Tài khoản ngân hàng
                    </li>
                </Link>
            </ul>
        </>
    );
}

export default FinanceDropdown;