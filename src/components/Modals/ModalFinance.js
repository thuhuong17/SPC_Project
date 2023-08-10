import React, { useEffect, useState } from "react";
import usePrivateApi from "../../api/usePrivateApi";
import DatePicker from "react-datepicker";

import "../../assets/styles/modal.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export const ModalFinance = ({ closeModal, onSubmit, defaultValue }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const startDateValue = `${startDate.getDate()}-${startDate.getMonth()}-${startDate.getFullYear()}`
    const endDateValue = `${endDate.getDate()}-${endDate.getMonth()}-${endDate.getFullYear()}`

    const [formState, setFormState] = useState(defaultValue || {
        budgetName: "",
        budgetDescription: "",
        amout: 0,
        startDate: startDateValue,
        endDate: endDateValue
    });

    const [errors, setErrors] = useState("");
    const validateForm = () => {
        if (formState.budgetName && formState.budgetDescription && formState.amout && formState.startDate && formState.endDate) {
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
    const changeStartDate = (date) => {
        setFormState({
            ...formState,
            startDate: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
        });
        setStartDate(date)
    };
    const changeEndDate = (date) => {
        setFormState({
            ...formState,
            endDate: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
        });
        setEndDate(date)
    };

    const api = usePrivateApi()

    // submit account vừa thêm
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        if (defaultValue?.budgetId) {
            try {
                delete formState.budgetId;
                const newForm = { ...formState, amout: Number(formState.amout) }
                await api.putBudget(defaultValue?.budgetId, newForm)
                alert("Update Success!")
                onSubmit();
            } catch (error) {
                if (!error?.response) {
                    console.log("No Serve Response");
                }
            }
        } else {
            try {
                const newForm = { ...formState, amout: Number(formState.amout) }
                await api.postBudget(newForm)
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
                        <label htmlFor="budgetName">Tên ngân sách</label>
                        <input
                            name="budgetName"
                            value={formState?.budgetName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="budgetDescription">Mô tả</label>
                        <input
                            name="budgetDescription"
                            value={formState?.budgetDescription}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="amout">Ngân sách</label>
                        <input
                            name="amout"
                            value={formState?.amout}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="startDate">Ngày bắt đầu</label>
                        <DatePicker name="startDate" dateFormat="dd/MM/yyyy"
                            selected={new Date(moment(formState?.startDate, "DD/MM/YYYY"))}
                            onChange={(date) => changeStartDate(date)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="endDate">Ngày kết thúc</label>
                        <DatePicker name="endDate" dateFormat="dd/MM/yyyy"
                            selected={new Date(moment(formState?.endDate, "DD/MM/YYYY"))}
                            onChange={(date) => changeEndDate(date)} />
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
