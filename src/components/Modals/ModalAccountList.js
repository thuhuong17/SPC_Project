import React, { useState } from 'react'
import "../../assets/styles/modal.css"
export const ModalAccount= ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(defaultValue || {
        username: "",
        password: "",
        description: "",
        status: "live",
    });

    const [errors, setErrors] = useState("")
    const validateForm = () => {
        if(formState.username && formState.password && formState.description && formState.status){
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
                    <label htmlFor="username">Tên tài khoản</label>
                    <input name='username' value={formState.username} onChange={handleChange} />
                </div>

                <div className='form-group'>
                    <label htmlFor="password">Mật khẩu</label>
                    <input name='password' value={formState.password} onChange={handleChange} />
                </div>

                <div className='form-group'>
                    <label htmlFor="description">Mô tả</label>
                    <textarea name='description' value={formState.description} onChange={handleChange} />
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
