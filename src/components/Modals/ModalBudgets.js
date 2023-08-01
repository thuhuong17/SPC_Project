import React, { useState } from 'react'
import "../../assets/styles/modal.css"
export const ModalBudgets = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(defaultValue || {
        budgetID:"",
        budgetName:"",
        budgetDesc:"",
        amount:"",
        startDate : "",
        endDate:"",
    });

    const [errors, setErrors] = useState("")
    const validateForm = () => {
        if(formState.budgetID && formState.budgetName && formState.budgetDesc
            && formState.amount && formState.startDate && formState.endDate){
            setErrors("")
            return true;
        } else {
            let errorFields = [];
            for(const [key, value] of Object.entries(formState)){
                if(!value){
                    errorFields.push(key)
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    }
    // update danh sách 
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    // submit account vừa thêm
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        onSubmit(formState);
        closeModal();
    }

    
return (
    <div className='modal-container' 
    onClick={(e) => {
        if(e.target.className === "modal-container")
            closeModal();
    }}>
        <div className="modal">
            <form>
                <div className='form-group'>
                    <label htmlFor="budgetID">ID ngân sách</label>
                    <input name='budgetID' value={formState.budgetID} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="budgetName">Tên ngân sách</label>
                    <input name='budgetName' value={formState.budgetName} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="budgetDesc">Thông tin ngân sách</label>
                    <input name='budgetDesc'  value={formState.budgetDesc} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="amount">Số tiền</label>
                    <input type='number' name='amount'  value={formState.amount} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="startDate">Ngày được cấp</label>
                    <input name='startDate'  type ='date' value={formState.startDate} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="endDate">Ngày hết hạn</label>
                    <input name='endDate'  type ='date' value={formState.endDate} onChange={handleChange} />
                </div>
                
                {errors && <div className='error'>{`Vui lòng điền: ${errors}`}</div>}
                <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
)
}
