import React, { useEffect, usePrivateApi } from "react";
import { useState } from "react";
// components
import "../../assets/styles/tableAccountCard.css"
import CardTableEmployee from "../../components/Cards/CardTableEmployee";
import { ModalEmployee } from "../../components/Modals/ModalEmployee";

export default function TableEmployee() {
  const privateApi = usePrivateApi();
  const [modalOpen, setModalOpen] = useState(false);

  const [employees, setEmployees] = useState([]);
  const [isDataChange, setIsDataChange] = useState(false);

  useEffect(() => {
    const getEmployees = async () => {
      const response = await privateApi.getAllEmployees();
      setEmployees(response.data);
    };
    getEmployees();
  }, [isDataChange]);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <div className="tableStyle">
            <CardTableEmployee rows={employees} />
            <button className="btn" onClick={() => setModalOpen(true)}>
              Thêm nhân viên
            </button>
            {modalOpen && (
              <ModalEmployee
                closeModal={() => {
                  setModalOpen(false);
                  // setRowToEdit(null);
                }}
                onSubmit={() => {
                  setIsDataChange(!isDataChange);
                }}
                // defaultValue={rowToEdit !== null && rows[rowToEdit]}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
