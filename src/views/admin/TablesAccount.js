import React, { useEffect } from "react";
// Add account
import { useState } from "react";
// components
import "../../assets/styles/tableAccountCard.css";
import CardTable from "components/Cards/CardTableAccount.js";
import { Modal } from "components/Modals/Modal";
import apiMethod from "api/apiMethod";

export default function TablesAccount() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isAddUser, setIsAddUser] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await apiMethod.getAllUsers();
        setRows(response);
        // console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [isAddUser]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (status) => {
    console.log(status);
    // setIsAddUser(isAddUser + 1);
    // rowToEdit === null
    //   ? setRows([...rows, newRow])
    //   : setRows(
    //       rows.map((currRow, idx) => {
    //         if (idx !== rowToEdit) return currRow;
    //         return newRow;
    //       })
    //     );
  };
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <div className="tableStyle">
            <CardTable
              rows={rows}
              deleteRow={handleDeleteRow}
              editRow={handleEditRow}
            />
            <button className="btn" onClick={() => setModalOpen(true)}>
              Add
            </button>
            {modalOpen && (
              <Modal
                closeModal={() => {
                  setModalOpen(false);
                  setRowToEdit(null);
                }}
                onSubmit={() => {
                  setIsAddUser(isAddUser + 1);
                }}
                defaultValue={rowToEdit !== null && rows[rowToEdit]}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}