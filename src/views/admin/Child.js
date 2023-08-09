import React, { useEffect } from "react";

import { useState } from "react";
// components
// import CardViewChild from "components/Cards/CardViewChild";
import { ChildModal } from "components/Modals/ChildModals";
import "../../assets/styles/tableAccountCard.css";
import CardTableChild from "components/Cards/CardTableChild";
import usePrivateApi from "api/usePrivateApi";
import { ModalCitizenID } from "components/Modals/ModalCitizenID";
export default function Child() {
  const privateApi = usePrivateApi();
  const [modalOpen, setModalOpen] = useState(false);
  const [isAddChild, setIsAddChild] = useState(false);
  const [modalCitizenId, setModalCitizenId] = useState(false);

  const [children, setChildren] = useState([]);

  const [isDataChange, setIsDataChange] = useState(false);

  // useEffect(() => {
  //   const getChildren = async () => {
  //     const response = await privateApi.getAllChildren();
  //     setChildren(response.data);
  //   };
  //   getChildren();
  // }, [isAddChild, isDataChange]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <div className="tableStyle">
            <CardTableChild
              // children={children}
              // setDataChange={() => setIsDataChange(!isDataChange)}
              isAddChild={isAddChild}
              // editRow={handleEditRow}
            />
            <button className="btn" onClick={() => setModalOpen(true)}>
              Thêm
            </button>
            {modalOpen && (
              <ChildModal
                closeModal={() => {
                  setModalOpen(false);
                  setRowToEdit(null);
                }}
                onSubmit={() => {
                  setIsAddChild(!isAddChild);
                  // setIsDataChange(!isDataChange);
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
