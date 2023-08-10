import React, { useEffect } from "react";
import { useState } from "react";
// components
import CardTable from "../../components/Cards/CardTableAdoptionNew.js";
import { ModalAdoptionNew } from "../../components/Modals/ModalAdoptionNew";
import usePrivateApi from "../../api/usePrivateApi";

export default function TableAdoptionNew () {
  const [modalOpen, setModalOpen] = useState(false);
  const [adoption, setAdoption] = useState([])

  const api = usePrivateApi()

  const getAdoption = async () => {
    try {
      const response = await api.getAdoption();
      setAdoption(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAdoption();
  }, [])

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = async (targetIndex) => {
    try {
      await api.deleteBudget(adoption[targetIndex].adoptionId)
      getAdoption()
    } catch (error) {
      console.log(error)
    }
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  }

  const handleSubmitAdoption = (newAdoption) => {
    rowToEdit === null
      ? setAdoption([...adoption, newAdoption])
      : setAdoption(
        adoption.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;

          return newAdoption;
        }))
    getAdoption();
  }

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <div className="tableStyle">
            <CardTable adoption={adoption}
              editRow={handleEditRow} />
            {/* <button className="btn" onClick={() => setModalOpen(true)}>Add</button> */}
            {modalOpen && <ModalAdoptionNew
              closeModal={() => {
                setModalOpen(false);
                setRowToEdit(null);
              }}
              onSubmit={handleSubmitAdoption}
              defaultValue={rowToEdit !== null && adoption[rowToEdit]} />
            }
          </div>
        </div>
      </div>
    </>
  );
}
