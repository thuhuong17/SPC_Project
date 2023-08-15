import React, { useState } from "react";
import usePrivateApi from "api/usePrivateApi";
import DatePicker from "react-datepicker";

import "../../assets/styles/modal.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import isEmpty from "validator/lib/isEmpty"
import isNumeric from "validator/lib/isNumeric"
import isLength from "validator/lib/isLength";

export const ModalIncome = ({ budget, accBank, income, closeModal, onSubmit, defaultValue }) => {
    const [dateIncome, setDateIncome] = useState(new Date());
    const endDateValue = `${dateIncome.getDate()}-${dateIncome.getMonth()}-${dateIncome.getFullYear()}`

    const [formState, setFormState] = useState(defaultValue || {
        budget: "",
        bankAccount: "",
        incomeName: "",
        incomeDescription: "",
        dateTime: endDateValue,
        amount: "",
    });

    const [errors, setErrors] = useState({});
    const validateForm = () => {
        const msg = {}
        if (isEmpty(formState?.incomeName, { ignore_whitespace: true })) {
            msg.incomeName = "Vui lòng nhập tên khoản thu!"
        }
        if (isEmpty(formState?.incomeDescription, { ignore_whitespace: true })) {
            msg.incomeDescription = "Vui lòng nhập mô tả khoản thu!"
        }
        if (isEmpty(formState?.amount, { ignore_whitespace: true })) {
            msg.amout = "Vui lòng nhập khoản thu!"
        } else if (!isNumeric(formState?.amount)) {
            msg.amout = "Vui lòng nhập số!"
        } else if (!isLength(formState?.amount, { min: 4, max: undefined })) {
            msg.amout = "Số tiền tối thiểu là 1.000đ!"
        }
        if (isEmpty(formState?.budget)) {
            msg.budget = "Vui lòng chọn ngân sách!"
        }
        if (isEmpty(formState?.bankAccount)) {
            msg.bankAccount = "Vui lòng chọn tài khoản!"
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
    const changeDateIncome = (date) => {
        setFormState({
            ...formState,
            dateTime: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
        });
        setDateIncome(date)
    };

    const checkAmount = () => {
        if (formState?.budget) {
            const amountBud = JSON.parse(formState?.budget)
            if (amountBud.amout <= formState?.amount) {
                console.log("qua");
                return true
            }
            console.log("khong qua");
            return false
        }
    }

    // if (formState?.budget) {
    //     const amountBud = JSON.parse(formState?.budget)
    //     console.log(amountBud);
        
    //     const same = income.filter((ic) => ic.budget.budgetId == amountBud.budgetId);

    //     console.log(same);
    // }

    const api = usePrivateApi()

    // submit account vừa thêm
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        if (checkAmount()) {
            alert("Số tiền vượt quá ngân sách!")
            return
        }
        // if ()
        if (defaultValue?.incomeId) {
            try {
                const newForm = { ...formState, budget: JSON.parse(formState?.budget), bankAccount: JSON.parse(formState?.bankAccount), amount: Number(formState.amount) }
                await api.putIncome(defaultValue?.incomeId, newForm)
                alert("Update Success!")
                onSubmit();
            } catch (error) {
                if (!error?.response) {
                    console.log("No Serve Response");
                }
            }
        } else {
            try {
                const newForm = { ...formState, budget: JSON.parse(formState?.budget), bankAccount: JSON.parse(formState?.bankAccount), amount: Number(formState.amount) }
                await api.postIncome(newForm)
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
                <h1 className="modal-header">{formState?.incomeName ? "Sửa khoản thu" : "Thêm khoản thu"}</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="incomeName">Tên khoản thu <span>(*)</span></label>
                        <input
                            name="incomeName"
                            value={formState?.incomeName}
                            onChange={handleChange}
                            style={{
                                borderColor: errors?.incomeName ? "red" : "black"
                            }}
                        />
                        <span style={{
                            color: "red",
                            paddingTop: "5px"
                        }}>
                            {errors?.incomeName}
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="incomeDescription">Mô tả <span>(*)</span></label>
                        <input
                            name="incomeDescription"
                            value={formState?.incomeDescription}
                            onChange={handleChange}
                            style={{
                                borderColor: errors?.incomeDescription ? "red" : "black"
                            }}
                        />
                        <span style={{
                            color: "red",
                            paddingTop: "5px"
                        }}>
                            {errors?.incomeDescription}
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="amount">Số tiền (vnđ) <span>(*)</span></label>
                        <input
                            name="amount"
                            value={formState?.amount}
                            onChange={handleChange}
                            style={{
                                borderColor: errors?.amout ? "red" : "black"
                            }}
                        />
                        <span style={{
                            color: "red",
                            paddingTop: "5px"
                        }}>
                            {errors?.amout}
                        </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="budget">Ngân sách <span>(*)</span></label>
                        <select name="budget" onChange={handleChange}
                            style={{
                                borderColor: errors?.budget ? "red" : "black"
                            }}>
                            <option value="">-- Chọn ngân sách --</option>
                            {budget.map(iBud =>
                                <option value={JSON.stringify(iBud)} key={iBud.budgetName}>ID: {iBud.budgetId} ({iBud.budgetName}: {iBud?.amout.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })})</option>
                            )}
                        </select>
                        <span style={{
                            color: "red",
                            paddingTop: "5px"
                        }}>
                            {errors?.budget}
                        </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bankAccount">Tài khoản ngân hàng <span>(*)</span></label>
                        <select name="bankAccount" onChange={handleChange}
                            style={{
                                borderColor: errors?.bankAccount ? "red" : "black"
                            }}>
                            <option value="">-- Chọn tài khoản ngân hàng --</option>
                            {accBank.map(iAcc =>
                                <option value={JSON.stringify(iAcc)} key={iAcc.accountName} > ID: {iAcc.bankAccountId} ({iAcc.accountName} - {iAcc.accountNumber})</option>
                            )}
                        </select>
                        <span style={{
                            color: "red",
                            paddingTop: "5px"
                        }}>
                            {errors?.bankAccount}
                        </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateTime">Ngày thu</label>
                        <DatePicker name="startDate"
                            dateFormat="dd/MM/yyyy"
                            selected={new Date(moment(formState?.dateTime, "DD/MM/YYYY"))}
                            onChange={(date) => {
                                changeDateIncome(date)
                            }} />
                    </div>
                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
