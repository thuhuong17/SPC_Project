import React from "react";
import PropTypes from "prop-types";
// components
import "../../assets/styles/tableItems.css"
import "../../assets/styles/tableFinanceCard.css"

export default function CardTableAdoptionNew({ color, adoption, deleteRow, editRow }) {
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
                            >Đơn đăng ký nhận nuôi
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
                                    <th className="expand4">Người nhận nuôi 1</th>
                                    <th className="expand4">Người nhận nuôi 2</th>
                                    <th className="expand4">Ngày đăng ký</th>
                                    <th className="expand4">Trạng thái</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adoption.map((row, idx) => {
                                    return <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td className="expand4">{row?.adopters[0]?.fullName}</td>
                                        <td className="expand4">{row?.adopters[1]?.fullName}</td>
                                        <td className="expand4">{row?.registerDate}</td>
                                        <td className="expand4">
                                            {
                                                row?.status == 1 ? "Đã xác nhận"
                                                    : row?.status == 2 ? "Từ chối"
                                                        : row?.status == 3 ? "Hoàn thành nhận nuôi"
                                                            : "Chờ xác nhận"}
                                        </td>
                                        <td>
                                            <span className="actions">
                                                <p
                                                    style={{ textDecoration: "underline", cursor: "pointer" }}
                                                    onClick={() => editRow(idx)}>
                                                    Xem chi tiết
                                                </p>
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

CardTableAdoptionNew.defaultProps = {
    color: "light",
};

CardTableAdoptionNew.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
