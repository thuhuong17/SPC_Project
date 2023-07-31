import React from "react";

import {useState} from "react";
// components
import CardViewChild from "components/Cards/CardViewChild";
import { ChildModal } from "components/Modals/ChildModals";
import "../../assets/styles/tableAccountCard.css"
import CardTable from "components/Cards/CardTableAccount.js";
export default function Child() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {stt:"4", username:"Admin@04", password:"1234", description:"Super Manager", status:"live"}
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
    
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">

          {/* <CardSettings /> */}
          {/* <CardViewChild /> */}
        </div>
      </div>
    </>
  );
}