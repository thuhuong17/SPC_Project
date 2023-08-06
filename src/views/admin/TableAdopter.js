import React from "react";
// Add account
import { useState } from "react";
// components
import "../../assets/styles/tableAccountCard.css"
import CardTable from "components/Cards/CardTableAdopter";
import { ModalAdopters } from "components/Modals/ModalAdopter";

export default function TablesAdopters() {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    {stt:"1", citizen_id:"1", adopter_id:"1", birthday:"17-12-2001", phoneNumber :"0905272261",email:"thanh@gmail.com",nation:"VietNam",occupation:"IT",income:"9,888,888",relationship:"Not Married",status:"live"}
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
              <CardTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
              <button className="btn" onClick={()=> setModalOpen(true)}>Thêm</button>
              {modalOpen && 
                <ModalAdopters 
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
