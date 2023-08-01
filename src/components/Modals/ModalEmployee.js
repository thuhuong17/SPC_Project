import React, { useState } from 'react'
import "../../assets/styles/modal.css"
export const ModalEmployee = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(defaultValue || {
        employee_id:"",
        address_permanent:"",
        address_temporary:"",
        first_name:"",
        last_name : "",
        gender:"",
        nationality:"",
        email : "",
        from_date:"",
        phone_number:"",
        to_date:"",
        image_id:"",
    });

    const [errors, setErrors] = useState("")
    const validateForm = () => {
        if(formState.employee_id && formState.address_permanent && formState.address_temporary && 
            formState.first_name && formState.last_name && 
            formState.gender && formState.nationality && 
            formState.email && formState.from_date && formState.phone_number &&
            formState.to_date && formState.image_id){
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
                    <label htmlFor="employee_id">ID nhân viên</label>
                    <input name='employee_id' value={formState.employee_id} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="first_name">Họ</label>
                    <input name='first_name' value={formState.first_name} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="last_name">Tên</label>
                    <input name='last_name' value={formState.last_name} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="address_temporary">Địa chỉ tạm trú</label>
                    <input name='address_temporary' value={formState.address_temporary} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="address_permanent">Địa chỉ thường trú</label>
                    <input name='address_permanent'  value={formState.address_permanent} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="gender">Giới tính</label>
                    <select>
                        <option name="gender" value={formState.gender} onChange={handleChange}>Nam</option>
                        <option name="gender" value={formState.gender} onChange={handleChange}>Nữ</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="nationality">Quốc tịch</label>
                    <input name='nationality'  value={formState.nationality} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email'  value={formState.email} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="from_date">Ngày bắt đầu</label>
                    <input type ='date' name='from_date'  value={formState.from_date} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="phone_number">Số điện thoại</label>
                    <input type='number' name='phone_number' value={formState.phone_number} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="to_date">Ngày kết thúc</label>
                    <input name='to_date'  type ='date' value={formState.to_date} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="image_id">Ảnh</label>
                    <input name='image_id'  type ='file' value={formState.image_id} onChange={handleChange} />
                </div>
                
                {errors && <div className='error'>{`Vui lòng điền: ${errors}`}</div>}
                <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
)
}
