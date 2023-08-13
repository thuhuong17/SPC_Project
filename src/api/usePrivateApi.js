import useAxiosPrivate from "./useAxiosPrivate";
import axiosPrivate from "./axiosPrivate";

const usePrivateApi = () => {
  const axPrivate = useAxiosPrivate(axiosPrivate);
  const privateApi = {
    checktoken: (params) => {
      const url = "auth/checktoken";
      return axPrivate.post(url, params);
    },
    logout: (params) => {
      const url = "logout";
      return axPrivate.post(url, params);
    },
    getAllUsers: (params) => {
      const url = "users";
      return axPrivate.get(url, params);
    },
    getAllRoles: (params) => {
      const url = "roles";
      return axPrivate.get(url, params);
    },
    saveUser: (params) => {
      const url = "users";
      return axPrivate.post(url, params);
    },
    getBudget: (params) => {
      const url = "budgets";
      return axPrivate.get(url, params);
    },
    getAllChildren: (params) => {
      let url = "children?";
      if (params) {
        for (const [key, value] of Object.entries(params)) {
          url = url + `${key}=${value}&`;
        }
      }
      return axPrivate.get(url);
    },
    getAllEmployees: (params) => {
      const url = "employees";
      return axPrivate.get(url, params);
    },
    getEmployeesByJob: (job, params) => {
      const url = "job/" + job + "/employees";
      return axPrivate.get(url, params);
    },
    getChildrenByEmployee: (employeeId, params) => {
      const url = "employee/" + employeeId + "/children";
      return axPrivate.get(url, params);
    },
    getAllDonations: (params) => {
      const url = "donations";
      return axPrivate.get(url, params);
    },
    getDonationsPagin: (params) => {
      let url = "donations/pagination?";
      if (params) {
        for (const [key, value] of Object.entries(params)) {
          url = url + `${key}=${value}&`;
        }
      }
      return axPrivate.get(url);
    },
    getDonationsByNamePagin: (name, params) => {
      let url = "/name/" + name + "/donations/pagination?";
      if (params) {
        for (const [key, value] of Object.entries(params)) {
          url = url + `${key}=${value}&`;
        }
      }
      return axPrivate.get(url);
    },
    getDonationsByTime: (startDate, endDate, params) => {
      let url =
        "start/" + startDate + "/end/" + endDate + "/donations/pagination?";
      if (params) {
        for (const [key, value] of Object.entries(params)) {
          url = url + `${key}=${value}&`;
        }
      }
      return axPrivate.get(url);
    },
    getMonthDonationAmountsByYear: (year, params) => {
      let url = "year/" + year + "/donations/months/amounts";
      return axPrivate.get(url);
    },
    getYearsDonationAmounts: (params) => {
      let url = "donations/years/amounts";
      return axPrivate.get(url);
    },

    addCitizenIdForChild: (childId, params) => {
      const url = "children/" + childId + "/citizenid";
      return axPrivate.post(url, params);
    },
    addCitizenIdForEmployee: (id, params) => {
      const url = "employees/" + id + "/citizenid";
      return axPrivate.post(url, params);
    },
    addGuardianForChild: (childId, params) => {
      const url = "children/" + childId + "/guardian";
      return axPrivate.post(url, params);
    },
    addEmployeeForChild: (childId, employeeId, params) => {
      const url = "children/" + childId + "/employee/" + employeeId;
      return axPrivate.post(url, params);
    },
    changeStatusForChild: (childId, statusId, params) => {
      const url = "children/" + childId + "/status/" + statusId;
      return axPrivate.post(url, params);
    },
    getChildrenTypes: (params) => {
      const url = "children/types";
      return axPrivate.get(url, params);
    },
    getChildrenStatus: (params) => {
      const url = "children/status";
      return axPrivate.get(url, params);
    },
    getAllJobs: (params) => {
      const url = "jobs";
      return axPrivate.get(url, params);
    },
    getAllShifts: (params) => {
      const url = "shifts";
      return axPrivate.get(url, params);
    },
    getAdoption: (params) => {
      const url = "getadoption";
      return axPrivate.get(url, params);
    },
    getBudget: (params) => {
      const url = "budgets";
      return axPrivate.get(url, params);
    },
    postBudget: (params) => {
      const url = "budgets";
      return axPrivate.post(url, params);
    },
    putBudget: (id, params) => {
      const url = `budgets/${id}`;
      return axPrivate.put(url, params);
    },
    deleteBudget: (id) => {
      const url = `budgets/${id}`;
      return axPrivate.delete(url);
    },
    getIncome: (params) => {
      const url = "incomes";
      return axPrivate.get(url, params);
    },
    postIncome: (params) => {
      const url = "incomes";
      return axPrivate.post(url, params);
    },
    putIncome: (id, params) => {
      const url = `incomes/${id}`;
      return axPrivate.put(url, params);
    },
    deleteIncome: (id) => {
      const url = `incomes/${id}`;
      return axPrivate.delete(url);
    },
    getExpense: (params) => {
      const url = "expenses";
      return axPrivate.get(url, params);
    },

    postExpense: (params) => {
      const url = "expenses";
      return axPrivate.post(url, params);
    },
    putExpense: (id, params) => {
      const url = `expenses/${id}`;
      return axPrivate.put(url, params);
    },
    deleteExpense: (id) => {
      const url = `expenses/${id}`;
      return axPrivate.delete(url);
    },
    getBankAccount: (params) => {
      const url = "bank-account";
      return axPrivate.get(url, params);
    },
    postBankAccount: (params) => {
      const url = "bank-account";
      return axPrivate.post(url, params);
    },
    putBankAccount: (id, params) => {
      const url = `bank-account/${id}`;
      return axPrivate.put(url, params);
    },
    deleteBankAccount: (id) => {
      const url = `bank-account/${id}`;
      return axPrivate.delete(url);
    },

    getChildrenPagination: (params) => {
      let url = "children/pagination?";
      if (params) {
        for (const [key, value] of Object.entries(params)) {
          url = url + `${key}=${value}&`;
        }
      }
      return axPrivate.get(url);
    },
  };

  return privateApi;
};

export default usePrivateApi;
