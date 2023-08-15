import React, { useState } from "react";
import usePrivateApi from "api/usePrivateApi";
import DatePicker from "react-datepicker";

import "../../assets/styles/modal.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import isEmpty from "validator/lib/isEmpty"
import isNumeric from "validator/lib/isNumeric"
import isLength from "validator/lib/isLength";

export const ModalExpense = ({ budget, accBank, closeModal, onSubmit, defaultValue }) => {
    const [dateExpense, setDateExpense] = useState(new Date());
    const endDateValue = `${dateExpense.getDate()}-${dateExpense.getMonth()}-${dateExpense.getFullYear()}`

    const [formState, setFormState] = useState(defaultValue || {
        budget: "",
        bankAccount: "",
        expenseName: "",
        expenseDescription: "",
        dateTime: endDateValue,
        amount: "",
    });

    const [errors, setErrors] = useState({});
    const validateForm = () => {
        const msg = {}
        if (isEmpty(formState?.expenseName, { ignore_whitespace: true })) {
            msg.expenseName = "Vui lòng nhập tên khoản chi!"
        }
        if (isEmpty(formState?.expenseDescription, { ignore_whitespace: true })) {
            msg.expenseDescription = "Vui lòng nhập mô tả khoản chi!"
        }
        if (isEmpty(formState?.amount, { ignore_whitespace: true })) {
            msg.amout = "Vui lòng nhập khoản chi!"
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
    const changeDateExpense = (date) => {
        setFormState({
            ...formState,
            dateTime: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
        });
        setDateExpense(date)
    };

    const api = usePrivateApi()

    // submit account vừa thêm
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        if (defaultValue?.expenseId) {
            try {
                const newForm = { ...formState, budget: JSON.parse(formState?.budget), bankAccount: JSON.parse(formState?.bankAccount), amount: Number(formState.amount) }
                await api.putExpense(defaultValue?.expenseId, newForm)
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
                await api.postExpense(newForm)
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
                <h1 className="modal-header">{formState?.expenseName ? "Sửa khoản chi" : "Thêm khoản chi"}</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="expenseName">Tên khoản chi <span>(*)</span></label>
                        <input
                            name="expenseName"
                            value={formState?.expenseName}
                            onChange={handleChange}
                            style={{
                                borderColor: errors?.expenseName ? "red" : "black"
                            }}
                        />
                        <span style={{
                            color: "red",
                            paddingTop: "5px"
                        }}>
                            {errors?.expenseName}
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="expenseDescription">Mô tả <span>(*)</span></label>
                        <input
                            name="expenseDescription"
                            value={formState?.expenseDescription}
                            onChange={handleChange}
                            style={{
                                borderColor: errors?.expenseDescription ? "red" : "black"
                            }}
                        />
                        <span style={{
                            color: "red",
                            paddingTop: "5px"
                        }}>
                            {errors?.expenseDescription}
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
                                <option value={JSON.stringify(iBud)} key={iBud.budgetName}>ID: {iBud.budgetId} ({iBud.budgetName} - {iBud.budgetDescription})</option>
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
                        <label htmlFor="dateTime">Ngày chi</label>
                        <DatePicker name="startDate"
                            dateFormat="dd/MM/yyyy"
                            selected={new Date(moment(formState?.dateTime, "DD/MM/YYYY"))}
                            onChange={(date) => {
                                changeDateExpense(date)
                            }} />
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
