import React, { useEffect, useState } from "react";
import usePrivateApi from "api/usePrivateApi";
import DatePicker from "react-datepicker";

import "../../assets/styles/modal.css";
import "../../assets/styles/modalFinance.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import isEmpty from "validator/lib/isEmpty"
import isNumeric from "validator/lib/isNumeric"
import isLength from "validator/lib/isLength";

export const ModalFinance = ({ closeModal, onSubmit, defaultValue }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const startDateValue = `${startDate.getDate()}-${startDate.getMonth()}-${startDate.getFullYear()}`
    const endDateValue = `${endDate.getDate()}-${endDate.getMonth()}-${endDate.getFullYear()}`

    const [formState, setFormState] = useState(defaultValue || {
        budgetName: "",
        budgetDescription: "",
        amout: "",
        startDate: startDateValue,
        endDate: endDateValue
    });

    const [errors, setErrors] = useState({});
    const validateForm = () => {
        const msg = {}
        if (isEmpty(formState?.budgetName, { ignore_whitespace: true })) {
            msg.budgetName = "Vui lòng nhập tên ngân sách!"
        }
        if (isEmpty(formState?.budgetDescription, { ignore_whitespace: true })) {
            msg.budgetDescription = "Vui lòng nhập mô tả ngân sách!"
        }
        if (isEmpty(formState?.amout, { ignore_whitespace: true })) {
            msg.amout = "Vui lòng nhập ngân sách!"
        } else if (!isNumeric(formState?.amout)) {
            msg.amout = "Vui lòng nhập số!"
        } else if (!isLength(formState?.amout, { min: 8, max: undefined })) {
            msg.amout = "Số tiền tối thiểu là 10.000.000đ!"
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
                <h1 className="modal-header">{formState?.budgetName ? "Sửa ngân sách" : "Thêm ngân sách"}</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="budgetName">Tên ngân sách <span>(*)</span></label>
                        <input
                            name="budgetName"
                            value={formState?.budgetName}
                            onChange={handleChange}
                            style={{
                                borderColor: errors?.budgetName ? "red" : "black"
                            }}
                        />
                        <span style={{
                            color: "red",
                            paddingTop: "5px"
                        }}>
                            {/* {errors ? "Vui lòng nhập thông tin" : ""} */}
                            {errors?.budgetName}
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="budgetDescription">Mô tả <span>(*)</span></label>
                        <input
                            name="budgetDescription"
                            value={formState?.budgetDescription}
                            onChange={handleChange}
                            style={{
                                borderColor: errors?.budgetDescription ? "red" : "black"
                            }}
                        />
                        <span style={{
                            color: "red",
                            paddingTop: "5px"
                        }}>
                            {errors?.budgetDescription}
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="amout">Ngân sách (vnđ) <span>(*)</span></label>
                        <input
                            name="amout"
                            value={formState?.amout}
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
                        <label htmlFor="startDate">Ngày bắt đầu <span>(*)</span></label>
                        <DatePicker name="startDate" dateFormat="dd/MM/yyyy"
                            selected={new Date(moment(formState?.startDate, "DD/MM/YYYY"))}
                            onChange={(date) => changeStartDate(date)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="endDate">Ngày kết thúc <span>(*)</span></label>
                        <DatePicker name="endDate" dateFormat="dd/MM/yyyy"
                            selected={new Date(moment(formState?.endDate, "DD/MM/YYYY"))}
                            onChange={(date) => changeEndDate(date)} />
                    </div>
                    {/* {errors && <div className="error">{`Vui lòng điền: ${errors}`}</div>} */}
                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Xác nhận
                    </button>
                </form>
            </div>
        </div>
    );
};
