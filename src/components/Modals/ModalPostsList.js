import React, { useState } from 'react'
import "../../assets/styles/modal.css"
export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(defaultValue || {
        title: "",
        description: "",
        status: "live",
    });

    const [errors, setErrors] = useState("")
    const validateForm = () => {
        if(formState.title && formState.description && formState.status){
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
                        <label htmlFor="title">Tiêu đề</label>
                        <input name='title' value={formState.title} onChange={handleChange} />
                    </div>
    
                    <div className='form-group'>
                        <label htmlFor="description">Mô tả</label>
                        <textarea name='description' value={formState.description} onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="status">Trạng thái</label>
                        <select name='status' value={formState.status} onChange={handleChange}>
                            <option value="live">Live</option>
                            <option value="draft">Draft</option>
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