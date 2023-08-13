import usePrivateApi from "api/usePrivateApi";
import { useEffect, useRef, useState } from "react";
import apiMethod from "api/apiMethod";
import { Pagination } from "@mui/material";
import {
  BsChevronDown,
  BsChevronUp,
  BsFillFileExcelFill,
  BsGraphDown,
  BsSearch,
} from "react-icons/bs";

export default function CardTableDonation({ onChangeLayoutClick }) {
  const privateApi = usePrivateApi();
  const [donations, setDonations] = useState([]);
  let totalAmount = 0;
  const [amount, setAmount] = useState(0);

  const limit = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalElement, setTotalElement] = useState(0);

  const [nameSearch, setNameSearch] = useState("");

  const dateStartRef = useRef();
  const dateEndRef = useRef();

  const [dateSelect, setDateSelect] = useState({
    dateStart: "",
    dateEnd: "",
  });

  const [sort, setSort] = useState({
    sortBy: "",
    sortDirec: "",
  });

  useEffect(() => {
    const getAmount = async () => {
      const response = await apiMethod.gelTotalDonationAmount();
      setAmount(response);
    };
    getAmount();
  }, []);

  const changeDate = (date) => {
    var newD = new Date(date);
    let dateMDY = `${
      newD.getMonth() + 1
    }/${newD.getDate()}/${newD.getFullYear()}`;
    let reDate = new Date(dateMDY);
    return reDate;
  };

  function addOneDay(date) {
    var newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);

    let dateMDY = `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;
    return dateMDY;
  }

  const formatDateToSend = (date) => {
    var newDate = new Date(date);
    let dateMDY = `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;
    return dateMDY;
  };

  useEffect(() => {
    const params = {
      limit: limit,
      page: currentPage - 1,
    };
    if (sort.sortBy) {
      params.sortBy = sort.sortBy;
    }
    if (sort.sortDirec) {
      params.sortDirec = sort.sortDirec;
    }
    const getDonationsPaginByName = async () => {
      const response = await privateApi.getDonationsByNamePagin(
        nameSearch,
        params
      );
      setTotalPage(response.data.totalPages);
      setTotalElement(response.data.totalElements);
      setDonations(response.data.content);
    };

    const getDonationsPagin = async () => {
      const response = await privateApi.getDonationsPagin(params);
      setTotalPage(response.data.totalPages);
      setTotalElement(response.data.totalElements);
      setDonations(response.data.content);
    };

    const getDonationsByTime = async () => {
      const startD = formatDateToSend(dateSelect.dateStart);
      const endD = addOneDay(dateSelect.dateEnd);
      const response = await privateApi.getDonationsByTime(
        startD,
        endD,
        params
      );
      setTotalPage(response.data.totalPages);
      setTotalElement(response.data.totalElements);
      setDonations(response.data.content);
    };

    if (dateSelect.dateStart && dateSelect.dateEnd) {
      if (changeDate(dateSelect.dateStart) <= changeDate(dateSelect.dateEnd)) {
        getDonationsByTime();
      }
    } else {
      if (nameSearch) {
        getDonationsPaginByName();
      } else {
        getDonationsPagin();
      }
    }
  }, [nameSearch, currentPage, sort, dateSelect]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearch = (e) => {
    setNameSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleStartDateChange = (e) => {
    setDateSelect({
      ...dateSelect,
      dateStart: e.target.value,
    });
  };

  const handleEndDateChange = (e) => {
    setDateSelect({
      ...dateSelect,
      dateEnd: e.target.value,
    });
  };

  const handleCancelClick = () => {
    setDateSelect({
      dateStart: "",
      dateEnd: "",
    });
    dateStartRef.current.value = "";
    dateEndRef.current.value = "";
  };
  return (
    <>
      <div
        className="flex"
        style={{
          position: "relative",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            width: "fit-content",
          }}
        >
          <button
            className="bg-black text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              onChangeLayoutClick();
            }}
          >
            Biểu đồ thống kê {`>>`}
          </button>
        </div>
      </div>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div
              style={{
                position: "absolute",
                left: "0",
                marginLeft: "25px",
                zIndex: "100",
              }}
            >
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-black absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  onChange={handleSearch}
                  type="text"
                  placeholder="Tìm theo tên..."
                  className="px-3 py-3 bg-teal-200 text-black relative rounded text-sm outline-none focus:outline-none w-full pl-10"
                />
              </div>
            </div>
            <div
              className="relative w-full px-4 max-w-full flex-grow flex-1"
              align="center"
            >
              <h3 className="font-semibold text-lg text-blueGray-700">
                DANH SÁCH NHÀ TÀi TRỢ
              </h3>
              <h3>
                {`Tổng số tiền tài trợ: 
                ${amount.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}`}
              </h3>
            </div>
            <div
              style={{ position: "absolute", right: "0", marginRight: "25px" }}
            >
              <div>
                <input
                  className="dn-table-y-ip"
                  placeholder="Ngày bắt đầu"
                  type="text"
                  ref={dateStartRef}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  onChange={handleStartDateChange}
                />
                {"   -   "}
                <input
                  className="dn-table-y-ip"
                  placeholder="Ngày kết thúc"
                  type="text"
                  ref={dateEndRef}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  onChange={handleEndDateChange}
                />
                <button
                  style={{ paddingTop: "0.32rem", paddingBottom: "0.29rem" }}
                  className="bg-black text-white active:bg-indigo-600 text-xs font-bold uppercase px-2 py-1 rounded outline-none focus:outline-none ml-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleCancelClick}
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full overflow-x-auto">
          <div className="table-wrapper">
            <table style={{ display: "table" }} className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>Ngày sinh</th>
                  <th>Giới tính</th>
                  <th>Địa chỉ</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>
                    <div className="flex">
                      <div
                        className="mr-2"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Số tiền
                      </div>
                      <span style={{ fontSize: "13px" }}>
                        <button
                          style={{ display: "block" }}
                          onClick={() => {
                            setSort({
                              sortBy: "amount",
                              sortDirec: "ASC",
                            });
                            setCurrentPage(1);
                          }}
                        >
                          <BsChevronUp />
                        </button>
                        <button
                          onClick={() => {
                            setSort({
                              sortBy: "amount",
                              sortDirec: "DESC",
                            });
                            setCurrentPage(1);
                          }}
                        >
                          <BsChevronDown />
                        </button>
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="flex">
                      <div
                        className="mr-2"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Ngày tài trợ
                      </div>
                      <span style={{ fontSize: "13px" }}>
                        <button
                          style={{ display: "block" }}
                          onClick={() => {
                            setSort({
                              sortBy: "donateTime",
                              sortDirec: "ASC",
                            });
                            setCurrentPage(1);
                          }}
                        >
                          <BsChevronUp />
                        </button>
                        <button
                          onClick={() => {
                            setSort({
                              sortBy: "donateTime",
                              sortDirec: "DESC",
                            });
                            setCurrentPage(1);
                          }}
                        >
                          <BsChevronDown />
                        </button>
                      </span>
                    </div>
                  </th>
                  <th>Lời nhắn</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation, index) => {
                  const date = new Date(donation.donateTime);
                  const dateMDY = `${date.getDate()}-${
                    date.getMonth() + 1
                  }-${date.getFullYear()}`;
                  totalAmount = totalAmount + donation.amount;
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{donation.donor?.fullName}</td>
                      <td>{donation.donor?.birthDay}</td>
                      <td>{donation.donor?.gender}</td>
                      <td>{donation.donor?.addressPermanent}</td>
                      <td>{donation.donor?.phoneNumber}</td>
                      <td>{donation.donor?.email}</td>
                      <td>
                        {donation.amount.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </td>
                      <td>{dateMDY}</td>
                      <td>{donation.reason}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan="2">Tổng số nhà tài trợ</td>
                  <td colSpan="2">{donations.length}</td>
                  <td colSpan="2">Tổng số tiền</td>
                  <td colSpan="4">
                    {totalAmount.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="mb-3 mt-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Pagination
              count={totalPage}
              page={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
