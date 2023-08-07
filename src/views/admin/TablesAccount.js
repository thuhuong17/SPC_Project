import React, { useEffect } from "react";
// Add account
import { useState } from "react";
// components
import "../../assets/styles/tableAccountCard.css";
// import apiMethod from "api/apiMethod";
import usePrivateApi from "api/usePrivateApi";
import CardTableAccount from "components/Cards/CardTableAccount";
import { ModalAccount } from "components/Modals/ModalAccountList";

export default function TablesAccount() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isAddUser, setIsAddUser] = useState(0);
  const [rows, setRows] = useState([]);

  const privateApi = usePrivateApi();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await privateApi.getAllUsers();
        setRows(response.data);
        console.log(response);
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
            <CardTableAccount
              rows={rows}
              deleteRow={handleDeleteRow}
              editRow={handleEditRow}
            />
            <button className="btn" onClick={() => setModalOpen(true)}>
              Thêm
            </button>
            {modalOpen && (
              <ModalAccount
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
