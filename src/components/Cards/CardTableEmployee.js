import React from 'react'
import PropTypes from 'prop-types'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
// components
import '../../assets/styles/tableItems.css'
// import "../../assets/styles/tableAccountCard.css"
// import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTableEmployee ({ color, rows, deleteRow, editRow }) {
  return (
    <>
      {/* Bảng 1: Danh sách tài khoản Admin */}
      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (color === 'light' ? 'bg-white' : 'bg-lightBlue-900 text-white')
        }
      >
        <div className='rounded-t mb-0 px-4 py-3 border-0'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full px-4 max-w-full flex-grow flex-1' align="center">
              <h3
                className={
                  'font-semibold text-lg ' +
                  (color === 'light' ? 'text-blueGray-700' : 'text-white')
                }
              >
                DANH SÁCH NHÂN VIÊN
              </h3>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <div className='table-wrapper'>
            <table className='table'>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>ID nhân viên</th>
                  <th>Họ</th>
                  <th>Tên</th>
                  <th>Giới tính</th>
                  <th>Địa chỉ tạm trú</th>
                  <th>Địa chỉ thường trú</th>
                  <th>Quốc tịch</th>
                  <th>Email</th>
                  <th>Ngày bắt đầu</th>
                  <th>Số điện thoại</th>
                  <th>Ngày kết thúc</th>
                  <th>Ảnh</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => {
                  const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1)

                  return (
                    <tr key={idx}>
                      <td>{row.stt}</td>
                      <td>{row.employee_id}</td>
                      <td>{row.first_name}</td>
                      <td>{row.last_name}</td>
                      <td>{row.gender}</td>
                      <td>{row.address_temporary}</td>
                      <td>{row.address_permanent}</td>
                      <td>{row.nationality}</td>
                      <td>{row.email}</td>
                      <td>{row.from_date}</td>
                      <td>{row.phone_number}</td>
                      <td>{row.to_date}</td>
                      <td>{row.image_id}</td>
                      
                      <td>
                            <span className="actions">
                              <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)}/>
                              <BsFillPencilFill onClick={() => editRow(idx)}/>
                            </span>
                          </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bảng 2: Danh sách tài khoản Quản lý */}
    </>
  )
}

CardTableEmployee.defaultProps = {
  color: 'light'
}

CardTableEmployee.propTypes = {
  color: PropTypes.oneOf(['light', 'dark'])
}
