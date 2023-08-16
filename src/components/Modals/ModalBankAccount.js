import React, { useEffect, useState } from "react";
import usePrivateApi from "api/usePrivateApi";

import "../../assets/styles/modal.css";
import isEmpty from "validator/lib/isEmpty";
import isNumeric from "validator/lib/isNumeric";

export const ModalBankAccount = ({ closeModal, onSubmit, defaultValue }) => {

    const [formState, setFormState] = useState(defaultValue || {
        accountName: "",
        accountNumber: "",
        bankName: "",
        balance: 0,
    });

    const [listBank, setListBank] = useState([])

    useEffect(() => {
        const getBudget = async () => {
            try {
                const response = await fetch("https://api.vietqr.io/v2/banks");
                const bank = await response.json();
                setListBank(bank.data);
            } catch (err) {
                console.log(err);
            }
        };
        getBudget()
    }, [])

    const [errors, setErrors] = useState({});
    const validateForm = () => {
        const msg = {}

        if (isEmpty(formState?.accountName, { ignore_whitespace: true })) {
            msg.accountName = "Vui lòng nhập tên tài khoản!"
        }
        if (isEmpty(formState?.accountNumber, { ignore_whitespace: true })) {
            msg.accountNumber = "Vui lòng nhập số thẻ!"
        } else if (!isNumeric(formState?.accountNumber)) {
            msg.accountNumber = "Vui lòng nhập số!"
        }
        if (isEmpty(formState?.bankName, { ignore_whitespace: true })) {
            msg.bankName = "Vui lòng chọn ngân hàng!"
        }

        setErrors(msg)
        if (Object.keys(msg).length > 0) return false
        return true
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
                await api.postBankAccount(formState)
                onSubmit();
            } catch (error) {
                if (!error?.response) {
                    console.log("No Serve Response");
                }
            }
        }
        closeModal();
    }

    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container") closeModal();
            }}
        >
            <div className="modal">
                <h1 className="modal-header">{formState?.accountName ? "Sửa tài khoản" : "Thêm tài khoản"}</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="accountName">Tên chủ tài khoản</label>
                        <input
                            name="accountName"
                            value={formState?.accountName}
                            onChange={handleChange}
                            style={{
                                borderColor: errors?.accountName ? "red" : "black"
                            }}
                        />
                        <span style={{
                            color: "red",
                            paddingTop: "5px"
                        }}>
                            {errors?.accountName}
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="accountNumber">Số thẻ</label>
                        <input
                            name="accountNumber"
                            value={formState?.accountNumber}
                            onChange={handleChange}
                            style={{
                                borderColor: errors?.accountNumber ? "red" : "black"
                            }}
                        />
                        <span style={{
                            color: "red",
                            paddingTop: "5px"
                        }}>
                            {errors?.accountNumber}
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="bankName">Ngân hàng</label>
                        <select name="bankName" onChange={handleChange}
                            style={{
                                borderColor: errors?.bankName ? "red" : "black"
                            }}>
                            <option value={formState?.bankName ? formState?.bankName : ""}>{formState?.bankName ? formState?.bankName : "-- Chọn ngân hàng --"}</option>
                            {listBank.map(iAcc =>
                                <option value={iAcc.shortName} key={iAcc?.code}>{iAcc?.code} - {iAcc?.shortName}</option>
                            )}
                        </select>
                        <span style={{
                            color: "red",
                            paddingTop: "5px"
                        }}>
                            {errors?.bankName}
                        </span>
                    </div>
                    {/* {errors && <div className="error">{`Vui lòng điền: ${errors}`}</div>} */}
                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
