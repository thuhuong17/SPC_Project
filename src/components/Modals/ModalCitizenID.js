import React, { useState } from 'react'
import "../../assets/styles/modal.css"
export const ModalCitizenID = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(defaultValue || {
        citizen_id: "",
        citizenIdNumber: "",
        issueDate: "",
        issuePlace:"",
        expireDate:"",
        status: "live",
    });

    const [errors, setErrors] = useState("")
    const validateForm = () => {
        if(formState.citizen_id && formState.citizenIdNumber && formState.issueDate && formState.issuePlace && formState.expireDate ){
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
                    <label htmlFor="citizen_id">citizen_id</label>
                    <input name='citizen_id' value={formState.citizen_id} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="citizenIdNumber">citizenIdNumber</label>
                    <input name='citizenIdNumber' value={formState.citizenIdNumber} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="issueDate">issueDate</label>
                    <input name='issueDate' type='date' value={formState.issueDate} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="issuePlace">issuePlace</label>
                    <input name='issuePlace' value={formState.issuePlace} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="expireDate">expireDate</label>
                    <input name='expireDate' type='date' value={formState.expireDate} onChange={handleChange} />
                </div>
                
                <div className='form-group'>
                    <label htmlFor="status">Trạng thái</label>
                    <select name='status' value={formState.status} onChange={handleChange}>
                        <option value="live">Live</option>
                        <option value="off">Off</option>
                        <option value="error">Error</option>
                    </select>
                </div>
                {errors && <div className='error'>{`Vui lòng điền: ${errors}`}</div>}
                <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
)
}
