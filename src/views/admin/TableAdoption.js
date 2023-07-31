import React from "react";
// Add account
import { useState } from "react";
// components
import "../../assets/styles/tableAccountCard.css"
import CardTable from "components/Cards/CardTableAdoption";
import { ModalAdoption } from "components/Modals/ModalAdoption";

export default function TablesAdoption() {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    {stt:"1", adoptionID:"1", childId :"123123",registerDate : "17-12-2001",status:"live"}
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
              <button className="btn" onClick={()=> setModalOpen(true)}>Add</button>
              {modalOpen && 
                <ModalAdoption   
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
