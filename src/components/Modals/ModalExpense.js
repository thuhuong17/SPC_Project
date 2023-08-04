import React, { useState } from "react";
import usePrivateApi from "api/usePrivateApi";
import DatePicker from "react-datepicker";

import "../../assets/styles/modal.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export const ModalExpense = ({ budget, accBank, closeModal, onSubmit, defaultValue }) => {
    const [dateExpense, setDateExpense] = useState(new Date());
    const endDateValue = `${dateExpense.getDate()}-${dateExpense.getMonth()}-${dateExpense.getFullYear()}`

    const [formState, setFormState] = useState(defaultValue || {
        budget: "",
        bankAccount: "",
        expenseName: "",
        expenseDescription: "",
        dateTime: endDateValue,
        amount: 0,
    });

    const [errors, setErrors] = useState("");
    const validateForm = () => {
        if (formState.expenseName && formState.expenseDescription && formState.dateTime && formState.amount && formState.budget && formState.bankAccount) {
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

    console.log(defaultValue);

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
                        <label htmlFor="expenseName">Tên khoản chi</label>
                        <input
                            name="expenseName"
                            value={formState?.expenseName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="expenseDescription">Mô tả</label>
                        <input
                            name="expenseDescription"
                            value={formState?.expenseDescription}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="amount">Số tiền</label>
                        <input
                            name="amount"
                            value={formState?.amount}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="budget">Ngân sách</label>
                        <select name="budget" onChange={handleChange}>
                            <option value="">-- Chọn ngân sách --</option>
                            {budget.map(iBud =>
                                <option value={JSON.stringify(iBud)} key={iBud.budgetName}>ID: {iBud.budgetId} ({iBud.budgetName} - {iBud.budgetDescription})</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bankAccount">Tài khoản ngân hàng</label>
                        <select name="bankAccount" onChange={handleChange}>
                            <option value="">-- Chọn tài khoản ngân hàng --</option>
                            {accBank.map(iAcc =>
                                <option value={JSON.stringify(iAcc)} key={iAcc.accountName} > ID: {iAcc.bankAccountId} ({iAcc.accountName} - {iAcc.accountNumber})</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateTime">Ngày chi</label>
                        <DatePicker name="startDate"
                            dateFormat = "dd/MM/yyyy"
                            selected={new Date(moment(formState?.dateTime, "DD/MM/YYYY"))}
                            onChange={(date) => {
                                changeDateExpense(date)
                            }} />
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
