import React from "react";
// Add account
import { useState } from "react";
// components
import "../../assets/styles/tableAccountCard.css"
import CardTable from "components/Cards/CardTablePosts";
import { useHistory } from "react-router-dom";
// import { Modal } from "components/Modals/ModalPostsList";

export default function TablesListPost() {
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();
  const routeChange = () => {
    let path = `/admin/add-page`;
    history.push(path);
  }

  const [rows, setRows] = useState([
    {stt:"1", title:"Hỗ trợ trẻ em miền núi", description:"Trẻ em thuộc dân tộc thiểu số, sinh sống ở vùng sâu vùng xa", status:"live"}
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
              <button className="btn" onClick={routeChange}>Thêm</button>
          </div>
        </div>
      </div>

    </>
  );
}
