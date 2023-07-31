import React, { useState } from 'react'
// import "../../assets/styles/modal1.css"
export const ChildModal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(defaultValue || {
        firstname: "",
        lastname: "",
        birthday: "",
        gender: "",
        nationality: "",
        address_temporary: "",
        address_permanent: "",
        citizen: "",
        date_in: "",
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
                <div className='form'>
                    <label htmlFor='firstname'>Họ</label>
                    <input type="text" className='firstname' name='firstname'  value={formState.firstname} onChange={handleChange} />
                    <label htmlFor="lastname">Tên</label>
                    <input type="text" className='lastname' name='lastname' value={formState.lastname} onChange={handleChange} />
                </div>
                <div className='form'>
                    <label htmlFor="birthday">Ngày sinh</label>
                    <input type="text" className='firstname' name='birthday' value={formState.birthday} onChange={handleChange} />
                    <label htmlFor="gender">Giới tính</label>
                    <input type="checkbox" name="gender" className='gender' value={formState.gender} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Quốc tịch</label>
                    <input name='password' value={formState.password} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Địa chỉ tạm trú</label>
                    <input name='password' value={formState.password} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Địa chỉ thường trú</label>
                    <input name='password' value={formState.password} onChange={handleChange} />
                </div>
                <div className='form'>
                    <label htmlFor="password">Ngày đến</label>
                    <input name='password' value={formState.password} onChange={handleChange} />
                    <label htmlFor="password">CCCD</label>
                    <input name='password' value={formState.password} onChange={handleChange} />
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