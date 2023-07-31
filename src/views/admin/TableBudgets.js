import React from "react";
// Add account
import { useState } from "react";
// components
import "../../assets/styles/tableAccountCard.css"
import CardTable from "components/Cards/CardTableBudgets";
import { ModalBudgets } from "components/Modals/ModalBudgets";

export default function TableBudgets() {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    {stt:"1", budgetID:"1", budgetName :"123123",budgetDesc  : "17-12-2001",amount : "Da Nang",startDate :"17-12-2001",endDate : "17-12-2001",status:"live"}
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
                <ModalBudgets 
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
