import useAxiosPrivate from "./useAxiosPrivate";

const usePrivateApi = () => {
  const axiosPrivate = useAxiosPrivate();
  const privateApi = {
    checktoken: (params) => {
      const url = "auth/checktoken";
      return axiosPrivate.post(url, params);
    },
    logout: (params) => {
      const url = "logout";
      return axiosPrivate.post(url, params);
    },
    getBudget: (params) => {
      const url = "budgets";
      return axiosPrivate.get(url, params);
    },
    postBudget: (params) => {
      const url = "budgets";
      return axiosPrivate.post(url, params);
    },
    putBudget: (id, params) => {
      const url = `budgets/${id}`;
      return axiosPrivate.put(url, params);
    },
    deleteBudget: (id) => {
      const url = `budgets/${id}`;
      return axiosPrivate.delete(url);
    },
    getIncome: (params) => {
      const url = "incomes";
      return axiosPrivate.get(url, params);
    },
    postIncome: (params) => {
      const url = "incomes";
      return axiosPrivate.post(url, params);
    },
    putIncome: (id, params) => {
      const url = `incomes/${id}`;
      return axiosPrivate.put(url, params);
    },
    deleteIncome: (id) => {
      const url = `incomes/${id}`;
      return axiosPrivate.delete(url);
    },
    getExpense: (params) => {
      const url = "expenses";
      return axiosPrivate.get(url, params);
    },
    getBankAccount: (params) => {
      const url = "bank-account";
      return axiosPrivate.get(url, params);
    },
    postBankAccount: (params) => {
      const url = "bank-account";
      return axiosPrivate.post(url, params);
    },
    putBankAccount: (id, params) => {
      const url = `bank-account/${id}`;
      return axiosPrivate.put(url, params);
    },
    deleteBankAccount: (id) => {
      const url = `bank-account/${id}`;
      return axiosPrivate.delete(url);
    },
  };

  return privateApi;
};

export default usePrivateApi;
