import React, { useEffect } from "react";
import { useState } from "react";
// components
import CardTable from "components/Cards/CardTableFinance.js";
import { Modal } from "components/Modals/Modal";
import axios from "api/axios";
// import "../../assets/styles/tableFinanceCard.css"

export default function TablesFinance() {
  const [modalOpen, setModalOpen] = useState(false);
  const [budget, setBudget] = useState([])
  const [income, setIncome] = useState([])
  const [expense, setExpense] = useState([])
  const [accBank, setAccBank] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8080/social-protection-api/budgets")
      .then((res) => {
        setBudget(res.data)
      });
    axios
      .get("http://localhost:8080/social-protection-api/incomes")
      .then((res) => {
        setIncome(res.data)
      });
    axios
      .get("http://localhost:8080/social-protection-api/expenses")
      .then((res) => {
        setExpense(res.data)
      });
    axios
      .get("http://localhost:8080/social-protection-api/bank-account")
      .then((res) => {
        setAccBank(res.data)
      });
  }, [])

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setBudget(budget.filter((_, idx) => idx !== targetIndex))
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  }

  const handleSubmit = (newBudget) => {
    rowToEdit === null
      ? setBudget([...budget, newBudget])
      : setBudget(
        budget.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;

          return newBudget;
        }))
  }
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <div className="tableStyle">
            <CardTable budget={budget} income={income} expense={expense} accBank={accBank}
              deleteRow={handleDeleteRow}
              editRow={handleEditRow} />
            {/* <button className="btn" onClick={()=> setModalOpen(true)}>Add</button> */}
            {modalOpen &&
              <Modal
                closeModal={() => {
                  setModalOpen(false);
                  setRowToEdit(null);
                }
                }
                onSubmit={handleSubmit}
                defaultValue={rowToEdit !== null && budget[rowToEdit]}
              />}
          </div>
        </div>
      </div>
    </>
  );
}
