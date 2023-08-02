import React from "react";

import {useState} from "react";
// components
// import CardViewChild from "components/Cards/CardViewChild";
import { ChildModal } from "components/Modals/ChildModals";
import "../../assets/styles/tableAccountCard.css";
import CardTableChild from "components/Cards/CardTableChild";
export default function Child() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {stt:"1", firstname:"Nguyễn Kiểu", lastname:"Anh", birthday:"14/05/2001", 
    gender:"Nữ", address_temporary: "NT", address_permanent: "NT", 
    citizen: "123456789", date_in: "14/06/2020", status:"live"}
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
              <CardTableChild rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
              <button className="btn" onClick={()=> setModalOpen(true)}>Thêm</button>
              {modalOpen && 
                <ChildModal
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