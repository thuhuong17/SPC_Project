import React, { useState } from "react";
import apiMethod from "api/apiMethod";

import "../../assets/styles/modal.css";

export const ModalAdoptionNew = ({ closeModal, defaultValue, onSubmit }) => {

    const handleSubmit = async (e, num) => {
        e.preventDefault();

        try {
            const newForm = { ...defaultValue, status: num }

            await apiMethod.putAdoption(defaultValue?.adoptionId, newForm)

            onSubmit();
        } catch (error) {
            if (!error?.response) {
                console.log("No Serve Response");
            }
        }
        closeModal();
    };

    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container") closeModal();
            }}
        >
            <div className="modal-adoption">
                <h1 className="modal-title">Chi tiết đơn đăng ký</h1>
                <div className="adoption">
                    {defaultValue?.adopters.map((it, i) => (
                        <div className="adop-block" key={it.fullName}>
                            <h1>Người nhận nuôi {i + 1}</h1>
                            <div className="block-inf">
                                <h3 className="inf-title">Họ tên: </h3>
                                <p className="inf-desc">{it?.fullName}</p>
                            </div>
                            <div className="block-inf">
                                <h3 className="inf-title">Giới tính: </h3>
                                <p className="inf-desc">{it?.gender}</p>
                            </div>
                            <div className="block-inf">
                                <h3 className="inf-title">Ngày sinh: </h3>
                                <p className="inf-desc">{it?.birthday}</p>
                            </div>
                            <div className="block-inf">
                                <h3 className="inf-title">Email: </h3>
                                <p className="inf-desc">{it?.email}</p>
                            </div>
                            <div className="block-inf">
                                <h3 className="inf-title">Số điện thoại: </h3>
                                <p className="inf-desc">{it?.phoneNumber}</p>
                            </div>
                            <div className="block-inf">
                                <h3 className="inf-title">Tình trạng hôn nhân: </h3>
                                <p className="inf-desc">{it?.relationship}</p>
                            </div>
                            <div className="block-inf">
                                <h3 className="inf-title">Thu nhập: </h3>
                                <p className="inf-desc">{it?.income}</p>
                            </div>
                            <div className="block-inf">
                                <h3 className="inf-title">Địa chỉ: </h3>
                                <p className="inf-desc">{it?.addressTemporary}</p>
                            </div>
                            <div className="block-inf">
                                <h3 className="inf-title">Căn cước: </h3>
                                <p className="inf-desc">{it?.citizenIdentification?.citizenIdentNumber}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="access">
                    <div className="block-inf">
                        <h3 className="inf-title">Ngày đăng ký: </h3>
                        <p className="inf-desc">{defaultValue?.registerDate}</p>
                    </div>

                    <div className="block-inf">
                        <h3 className="inf-title">Trạng thái: </h3>
                        <p className="inf-desc">
                        {/* {defaultValue?.status} */}
                        {
                            defaultValue?.status == 1 ?
                                <p className="inf-desc" style={{
                                    display: "inline",
                                    backgroundColor: "rgba(0, 128, 0, 0.75)",
                                    color: "white"
                                }}>
                                    Đã xác nhận
                                </p>
                                : defaultValue?.status == 2 ?
                                    <p className="inf-desc" style={{
                                        display: "inline",
                                        backgroundColor: "rgba(255, 0, 0, 0.75)",
                                        color: "white"
                                    }}>
                                        Từ chối
                                    </p>
                                    : defaultValue?.status == 3 ?
                                        <p className="inf-desc" style={{
                                            display: "inline",
                                            backgroundColor: "rgba(0, 0, 255, 0.75)",
                                            color: "white"
                                        }}>
                                            Hoàn thành nhận nuôi
                                        </p>
                                        : <p className="inf-desc" style={{
                                            display: "inline",
                                            backgroundColor: "rgba(0, 0, 0, 0.75)",
                                            color: "white"
                                        }}>
                                            Chờ xác nhận
                                        </p>}
                        </p>
                    </div>
                </div>
                <div className="adoption-btn my-4">
                    {defaultValue?.status == 0
                        ? <>
                            <button className="access-btn" onClick={(e) => handleSubmit(e, "1")}>Xác nhận</button>
                            <button className="reject-btn" onClick={(e) => handleSubmit(e, "2")}>Từ chối</button>
                        </>
                        : defaultValue?.status == 1
                            ? <button className="done-btn" onClick={(e) => handleSubmit(e, "3")}>Hoàn thành nhận nuôi</button>
                            : <></>
                    }
                </div>
            </div>
        </div>
    );
};
