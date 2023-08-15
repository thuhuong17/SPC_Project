import React from "react";
// Add account
import { useState } from "react";
// components
import "../../assets/styles/tableAccountCard.css"
import { Link, useNavigate  } from "react-router-dom";
import CardTablePost from "components/Cards/CardTablePosts";
// import { Modal } from "components/Modals/ModalPostsList";

export default function TablesListPost() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate  = useNavigate ();
  // const routeChange = () => {
  //   let path = `/admin/add-page`;
  //   navigate.push(path);
  // }

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
              <CardTablePost rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
              <Link to="/admin/add-page">
              <button className="btn">Thêm</button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}