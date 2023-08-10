import React from "react";
// Add account
import { useState } from "react";
// components
import "../../assets/styles/tableAccountCard.css"
import CardTableEmployee from "../../components/Cards/CardTableEmployee";
import { ModalEmployee } from "../../components/Modals/ModalEmployee";

export default function TableEmployee() {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    // {stt:"1", employee_id:"1", first_name :"Nguyen",last_name  : "Kim",gender : "Nam", address_temporary: "abc", 
    // address_permanent:"abc", nationality: "VN", email: "huong@gmail.com", from_date :"",
    // phone_number : "039854540", to_date : ""}
  ])

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex))
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  }

  const handleSubmit = (newRow) => {
    rowToEdit === null
    ? setRows([...rows, newRow])
    : setRows(
      rows.map((currRow, idx) => {
        if(idx !== rowToEdit) return currRow;

        return newRow;
      }))
  }
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <div className="tableStyle">
              <CardTableEmployee rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
              <button className="btn" onClick={()=> setModalOpen(true)}>Thêm nhân viên</button>
              {modalOpen && 
                <ModalEmployee
                closeModal ={()=> {
                  setModalOpen(false);
                  setRowToEdit(null);
                }
              } 
              onSubmit = {handleSubmit}
              defaultValue={rowToEdit !== null && rows[rowToEdit]}
              />}
          </div>
        </div>
      </div>
      
    </>
  );
}
