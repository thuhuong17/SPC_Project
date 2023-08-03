import React, { useState } from "react";
import usePrivateApi from "api/usePrivateApi";

import "../../assets/styles/modal.css";

export const ModalIncome = ({ closeModal, onSubmit, defaultValue }) => {

    const [formState, setFormState] = useState(defaultValue || {
        budgetId: "",
        bankAccountId: "",
        incomeName: "",
        incomeDescription: "",
        dateTime: "",
        amount: 0,
    });

    const [errors, setErrors] = useState("");
    const validateForm = () => {
        if (formState.incomeName && formState.incomeDescription && formState.dateTime && formState.amount && formState.budgetId && formState.bankAccountId) {
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
        if (defaultValue?.incomeId) {
            try {
                await api.putIncome(defaultValue?.incomeId, formState)
                alert("Update Success!")
                onSubmit();
            } catch (error) {
                if (!error?.response) {
                    console.log("No Serve Response");
                }
            }
        } else {
            try {
                const newForm = { ...formState, amount: Number(formState.amount) }
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
                <form>
                    <div className="form-group">
                        <label htmlFor="accountName">Income</label>
                        <input
                            name="accountName"
                            value={formState.accountName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="accountNumber">Income</label>
                        <input
                            name="accountNumber"
                            value={formState.accountNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bankName">Income</label>
                        <input
                            name="bankName"
                            value={formState.bankName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="balance">Income</label>
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
