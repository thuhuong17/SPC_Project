import React, { useState } from "react";

import "../../assets/styles/modal.css";

export const ModalAdoptionNew = ({ closeModal, defaultValue }) => {

    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container") closeModal();
            }}
        >
            <div className="modal">
                <div className="adoption">
                    {defaultValue?.adopters.map(it => (
                        <div>
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


                    <div>
                        <div className="block-inf">
                            <h3 className="inf-title">Ngày đăng ký: </h3>
                            <p className="inf-desc">{defaultValue?.registerDate}</p>
                        </div>

                        <div className="block-inf">
                            <h3 className="inf-title">Trạng thái: </h3>
                            <p className="inf-desc">{defaultValue?.status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
