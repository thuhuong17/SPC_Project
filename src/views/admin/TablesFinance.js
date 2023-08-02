import React, { useEffect } from "react";
import { useState } from "react";
// components
import CardTable from "components/Cards/CardTableFinance.js";
import { ModalFinance } from "components/Modals/ModalFinance";
import usePrivateApi from "api/usePrivateApi";
import CardBackAccount from "components/Cards/CardBankAccount";
import { ModalBankAccount } from "components/Modals/ModalBankAccount";
import CardTableIncome from "components/Cards/CardTableIncome";
import { ModalIncome } from "components/Modals/ModalIncome";

export default function TablesFinance() {
  const [modalOpen, setModalOpen] = useState(false);
  const [budget, setBudget] = useState([])
  const [income, setIncome] = useState([])
  const [expense, setExpense] = useState([])
  const [accBank, setAccBank] = useState([])

  const api = usePrivateApi()

  const getBudget = async () => {
    try {
      const response = await api.getBudget();
      setBudget(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getIncome = async () => {
    try {
      const response = await api.getIncome();
      setIncome(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getExpense = async () => {
    try {
      const response = await api.getExpense();
      setExpense(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getBankAccount = async () => {
    try {
      const response = await api.getBankAccount();
      setAccBank(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBudget();
    getIncome();
    getExpense();
    getBankAccount();
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

  const handleDeleteAccBank = async (targetIndex) => {
    try {
      await api.deleteBankAccount(accBank[targetIndex].bankAccountId)
      getBankAccount()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteIncome = async (targetIndex) => {
    try {
      await api.deleteIncome(income[targetIndex].incomeId)
      getIncome()
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

  const handleSubmitAccBank = (newAccBank) => {
    rowToEdit === null
      ? setAccBank([...accBank, newAccBank])
      : setAccBank(
        accBank.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;

          return newAccBank;
        }))
    getBankAccount();
  }

  const handleSubmitIncome = (newIncome) => {
    rowToEdit === null
      ? setIncome([...income, newIncome])
      : setIncome(
        income.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;

          return newIncome;
        }))
    getIncome();
  }

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <div className="tableStyle">
            {(window.location.href.split("?")[1] === "budget" || window.location.href.split("?")[1] === "expense")
              ? <CardTable budget={budget} income={income} expense={expense}
                deleteRow={handleDeleteRow}
                editRow={handleEditRow} />

              // Table Income
              : window.location.href.split("?")[1] === "income"
                ? <CardTableIncome income={income}
                  deleteRow={handleDeleteIncome}
                  editRow={handleEditRow} />

                // Table Bank Account
                : window.location.href.split("?")[1] === "account"
                  ? <CardBackAccount accBank={accBank}
                    deleteRow={handleDeleteAccBank}
                    editRow={handleEditRow} />
                  : <></>
            }
            <button className="btn" onClick={() => setModalOpen(true)}>Add</button>
            {modalOpen &&
              ((window.location.href.split("?")[1] === "budget" ||
                window.location.href.split("?")[1] === "expense")
                ? <ModalFinance
                  closeModal={() => {
                    setModalOpen(false);
                    setRowToEdit(null);
                  }}
                  onSubmit={handleSubmitBudget}
                  defaultValue={rowToEdit !== null && budget[rowToEdit]} />

                // Modal Income
                : (window.location.href.split("?")[1] === "income")
                  ? <ModalIncome
                    closeModal={() => {
                      setModalOpen(false);
                      setRowToEdit(null);
                    }}
                    onSubmit={handleSubmitIncome}
                    defaultValue={rowToEdit !== null && income[rowToEdit]} />

                  // Modal Bank Account
                  : (window.location.href.split("?")[1] === "account")
                    ? <ModalBankAccount
                      closeModal={() => {
                        setModalOpen(false);
                        setRowToEdit(null);
                      }}
                      onSubmit={handleSubmitAccBank}
                      defaultValue={rowToEdit !== null && accBank[rowToEdit]} />
                    : <></>)
            }
          </div>
        </div>
      </div>
    </>
  );
}
