import React, { useState } from "react";
import usePrivateApi from "api/usePrivateApi";

import "../../assets/styles/modal.css";

export const ModalBankAccount = ({ closeModal, onSubmit, defaultValue }) => {

    const [formState, setFormState] = useState(defaultValue || {
        accountName: "",
        accountNumber: "",
        bankName: "",
        balance: 0,
    });

    const [errors, setErrors] = useState("");
    const validateForm = () => {
        if (formState.accountName && formState.accountNumber && formState.bankName && formState.balance) {
            setErrors("");
            return true;
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    };
    // update danh sách
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const api = usePrivateApi()

    // submit account vừa thêm
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        if (defaultValue?.bankAccountId) {
            try {
                await api.putBankAccount(defaultValue?.bankAccountId, formState)
                alert("Update Success!")
                onSubmit();
            } catch (error) {
                if (!error?.response) {
                    console.log("No Serve Response");
                }
            }
        } else {
            try {
                const newForm = { ...formState, balance: Number(formState.balance) }
                await api.postBankAccount(newForm)
                onSubmit();
            } catch (error) {
                if (!error?.response) {
                    console.log("No Serve Response");
                }
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
            <div className="modal">
                <form>
                    <div className="form-group">
                        <label htmlFor="accountName">Tên chủ tài khoản</label>
                        <input
                            name="accountName"
                            value={formState.accountName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="accountNumber">Số thẻ</label>
                        <input
                            name="accountNumber"
                            value={formState.accountNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bankName">Ngân hàng</label>
                        <input
                            name="bankName"
                            value={formState.bankName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="balance">Số dư</label>
                        <input
                            name="balance"
                            value={formState.balance}
                            onChange={handleChange}
                        />
                    </div>
                    {errors && <div className="error">{`Vui lòng điền: ${errors}`}</div>}
                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
