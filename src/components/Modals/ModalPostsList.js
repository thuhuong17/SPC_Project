import React, { useState } from 'react'
import "../../assets/styles/modal.css"
export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(defaultValue || {
        title: "",
        postDate: ""
    });

    const [errors, setErrors] = useState("")
    const validateForm = () => {
        if(formState.title && formState.postDate){
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
                        <input name='title' value={formState?.title} onChange={handleChange} />
                    </div>
    
                    <div className='form-group'>
                        <label htmlFor="datePost">Ngày đăng</label>
                        <textarea name='datePost' value={formState?.postDate} onChange={handleChange} />
                    </div>
                    {/* {errors && <div className='error'>{`Vui lòng điền: ${errors}`}</div>} */}
                    <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
      )
    }