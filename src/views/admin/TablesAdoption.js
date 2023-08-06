import React, { useEffect } from "react";
import { useState } from "react";
// components
import CardTable from "components/Cards/CardTableFinance.js";
import { ModalFinance } from "components/Modals/ModalFinance";
import usePrivateApi from "api/usePrivateApi";

export default function TablesAdoption() {
  const [modalOpen, setModalOpen] = useState(false);
  const [budget, setBudget] = useState([])

  const api = usePrivateApi()

  const getBudget = async () => {
    try {
      const response = await api.getBudget();
      setBudget(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBudget();
  }, [])

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = async (targetIndex) => {
    try {
      await api.deleteBudget(budget[targetIndex].budgetId)
      getBudget()
    } catch (error) {
      console.log(error)
    }
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  }

  const handleSubmitBudget = (newBudget) => {
    rowToEdit === null
      ? setBudget([...budget, newBudget])
      : setBudget(
        budget.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;

          return newBudget;
        }))
    getBudget();
  }

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <div className="tableStyle">
            <CardTable budget={budget}
              deleteRow={handleDeleteRow}
              editRow={handleEditRow} />
            <button className="btn" onClick={() => setModalOpen(true)}>Add</button>
            {modalOpen && <ModalFinance
              closeModal={() => {
                setModalOpen(false);
                setRowToEdit(null);
              }}
              onSubmit={handleSubmitBudget}
              defaultValue={rowToEdit !== null && budget[rowToEdit]} />
            }
          </div>
        </div>
      </div>
    </>
  );
}
