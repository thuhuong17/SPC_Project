import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsPlusCircleFill,
  BsFillCaretDownSquareFill,
  BsEyeFill,
  BsFillExclamationCircleFill,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
// components
import "../../assets/styles/tableItems.css";
import { ModalCitizenID } from "components/Modals/ModalCitizenID";
import usePrivateApi from "api/usePrivateApi";
import { GuardianModal } from "components/Modals/GuardianModal";
import { ChildDetailModal } from "components/Modals/ChildDetailModal";
import { Pagination } from "@mui/material";
import { ChildUpdateModal } from "components/Modals/ChildUpdateModal";

export default function CardTableChild({ color, isAddChild }) {
  const privateApi = usePrivateApi();

  const [children, setChildren] = useState([]);

  const [modalCitizenId, setModalCitizenId] = useState(false);
  const [modalGuardian, setModalGuardian] = useState(false);

  const [currentChildAddId, setCurrentChildAddId] = useState(0);
  const [currentChildChangeEmp, setCurrentChildChangeEmp] = useState(0);
  const [currentChildChangeState, setCurrentChildChangeState] = useState(0);

  const [employees, setEmployees] = useState([]);
  const [isDataChange, setIsDataChange] = useState(false);

  const [status, setStatus] = useState([]);
  const [statusFilter, setStatusFilter] = useState();
  const [statusSelectFilter, setStatusSelectFilter] = useState(false);

  const [currentChildDetal, setCurrentChildDetail] = useState();
  const [currentChildupdate, setCurrentChildUpdate] = useState();

  const limit = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalElement, setTotalElement] = useState(0);

  const [nameSearch, setNameSearch] = useState("");

  const [sort, setSort] = useState({
    sortBy: "",
    sortDirec: "",
  });

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
    const getChildrenPag = async () => {
      try {
        const response = await privateApi.getChildrenPagination(params);
        setTotalPage(response.data.totalPages);
        setTotalElement(response.data.totalElements);
        setChildren(response.data.content);
      } catch (error) {
        console.log(err);
      }
    };
    const getChildrenByStatus = async () => {
      try {
        params.status = statusFilter;
        const response = await privateApi.getAllChildren(params);
        setTotalPage(response.data.totalPages);
        setTotalElement(response.data.totalElements);
        setChildren(response.data.content);
      } catch (error) {
        console.log(err);
      }
    };
    const getChildrenByName = async () => {
      try {
        params.name = nameSearch;
        const response = await privateApi.getAllChildren(params);
        setTotalPage(response.data.totalPages);
        setTotalElement(response.data.totalElements);
        setChildren(response.data.content);
      } catch (error) {
        console.log(err);
      }
    };
    if (nameSearch) {
      getChildrenByName();
    } else {
      statusFilter ? getChildrenByStatus() : getChildrenPag();
    }
  }, [currentPage, isAddChild, isDataChange, statusFilter, sort, nameSearch]);

  useEffect(() => {
    const getEmployees = async () => {
      const response = await privateApi.getEmployeesByJob("chăm sóc trẻ");
      setEmployees(response.data);
    };
    employees.length == 0 && getEmployees();
  }, [currentChildChangeEmp]);

  useEffect(() => {
    const getStatus = async () => {
      const response = await privateApi.getChildrenStatus();
      setStatus(response.data);
    };
    status.length == 0 && getStatus();
  }, []);

  const handleAddCitizenClick = (id) => {
    setCurrentChildAddId(id);
    setModalCitizenId(true);
  };

  const handleAddGuardianClick = (id) => {
    setCurrentChildAddId(id);
    setModalGuardian(true);
  };

  const handleAddCitizenSubmit = async (citizenId) => {
    console.log(currentChildAddId + citizenId);
    const response = await privateApi.addCitizenIdForChild(
      currentChildAddId,
      JSON.stringify(citizenId)
    );
    setCurrentChildAddId(0);
    setModalCitizenId(false);
    if (response.status == 204) {
      alert("Đã thêm thành công");
      setIsDataChange(!isDataChange);
    } else {
      alert("Thất bại");
    }
  };

  const handleEmployeeChange = async (e) => {
    const response = await privateApi.addEmployeeForChild(
      currentChildChangeEmp,
      e.target.value
    );
    console.log(response);
    setCurrentChildChangeEmp(0);
    setIsDataChange(!isDataChange);
  };

  const handleStatusFilterClick = (e) => {
    if (e.target.value == 0) {
      setStatusSelectFilter(false);
      setStatusFilter(null);
      setIsDataChange(!isDataChange);
    } else {
      setStatusSelectFilter(false);
      setStatusFilter(e.target.value);
      setCurrentPage(1);
      setIsDataChange(!isDataChange);
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleChildStateChange = async (e) => {
    if (e.target.value == -1) {
    } else {
      try {
        const response = await privateApi.changeStatusForChild(
          currentChildChangeState,
          e.target.value
        );
        setCurrentChildChangeState(0);
        setIsDataChange(!isDataChange);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSearch = (e) => {
    setNameSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded mb-0 py-5 border-1">
          <div className="flex flex-wrap ">
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                marginLeft: "12px",
                marginTop: "12px",
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
              className="relative w-full px-1 margin-top: 10 max-w-full flex-grow flex-1"
              align="center"
            >
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                DANH SÁCH TRẺ EM
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Ảnh</th>
                  <th>Họ và tên</th>
                  <th>
                    {/* Ngày sinh */}
                    <div className="flex">
                      <div
                        className="mr-2"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Ngày sinh
                      </div>
                      <span style={{ fontSize: "13px" }}>
                        <button
                          style={{ display: "block" }}
                          onClick={() => {
                            setSort({
                              sortBy: "birthDay",
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
                              sortBy: "birthDay",
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
                  <th>Giới tính</th>
                  <th>Quốc tịch</th>
                  <th>Địa chỉ thường trú</th>
                  <th>Địa chỉ tạm trú</th>
                  <th colSpan="2">
                    Người giám hộ
                    <th style={{ border: "none" }}>Họ và tên</th>
                    <th style={{ border: "none" }}>Quan hệ với trẻ</th>
                  </th>
                  <th>Hoàn cảnh</th>
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
                        Ngày đến
                      </div>
                      <span style={{ fontSize: "13px" }}>
                        <button
                          style={{ display: "block" }}
                          onClick={() => {
                            setSort({
                              sortBy: "dateIn",
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
                              sortBy: "dateIn",
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
                  <th>Nhân viên phụ trách</th>
                  <th>
                    <span className="mr-2">Trạng thái</span>
                    <button
                      onClick={() => {
                        setStatusSelectFilter(true);
                      }}
                    >
                      <BsFillCaretDownSquareFill />
                    </button>
                    {statusSelectFilter && (
                      <>
                        <div className="form-group">
                          <select onChange={handleStatusFilterClick}>
                            <option value="-1" disabled selected>
                              Chọn trạng thái
                            </option>
                            {status.map((stat, index) => {
                              return (
                                <option key={index} value={stat.status}>
                                  {stat.status}
                                </option>
                              );
                            })}
                            <option value={0}>Tất cả</option>
                          </select>
                        </div>
                      </>
                    )}
                  </th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {children.map((child, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>
                        <img
                          className="min-w-140-px"
                          src={child.image.imageUrl}
                        />
                      </td>
                      <td>{child.fullName}</td>
                      <td>{child.birthDay}</td>
                      <td>{child.gender}</td>
                      <td>{child.nationality}</td>
                      <td>{child.addressPermanent}</td>
                      <td>{child.addressTemporary}</td>
                      <td
                        className="text-center"
                        style={{ borderRight: "none", width: "50%" }}
                      >
                        {child?.guardian?.fullName}
                      </td>
                      <td
                        className="text-center"
                        style={{
                          borderLeft: "none",
                          width: "50%",
                        }}
                      >
                        {child?.guardian?.relationshipType}
                      </td>

                      <td>{child.typeOfOrphan.orphanTypeName}</td>
                      <td>{child.dateIn}</td>
                      <td>
                        <span className="mr-2">
                          {child?.employee?.fullName}
                        </span>
                        {currentChildChangeEmp == child.childId ? (
                          <>
                            <div className="form-group">
                              <select
                                name="employee"
                                onChange={handleEmployeeChange}
                              >
                                {employees.map((employee, index) => {
                                  let selected = false;
                                  if (
                                    employee.employeeId ==
                                    child?.employee?.employeeId
                                  ) {
                                    selected = true;
                                  }
                                  return (
                                    <option
                                      selected={selected}
                                      key={index}
                                      value={employee.employeeId}
                                    >
                                      {employee.fullName}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() =>
                                setCurrentChildChangeEmp(child.childId)
                              }
                            >
                              <BsFillCaretDownSquareFill />
                            </button>
                          </>
                        )}
                      </td>
                      <td>
                        <div className="flex whitespace-nowrap">
                          <span className="mr-2">
                            {child.childrenStatus.status}
                          </span>
                        </div>
                        {currentChildChangeState == child.childId ? (
                          <div className="form-group">
                            <select
                              style={{ backgroundImage: "unset" }}
                              name="status"
                              onChange={handleChildStateChange}
                            >
                              {status.map((state, index) => {
                                let selected = false;
                                if (
                                  state.childStatusId ==
                                  child?.childrenStatus?.childStatusId
                                ) {
                                  selected = true;
                                }
                                return (
                                  <option
                                    selected={selected}
                                    key={index}
                                    value={state.childStatusId}
                                    onChange={handleChildStateChange}
                                  >
                                    {state.status}
                                  </option>
                                );
                              })}
                              <option value={-1}>--------Hủy--------</option>;
                            </select>
                          </div>
                        ) : (
                          <button>
                            <BsFillCaretDownSquareFill
                              onClick={() =>
                                setCurrentChildChangeState(child.childId)
                              }
                            />
                          </button>
                        )}
                      </td>
                      <td>
                        <div className="">
                          {!child.citizenId && (
                            <button
                              className="flex items-center "
                              onClick={() =>
                                handleAddCitizenClick(child.childId)
                              }
                            >
                              <BsPlusCircleFill />
                              <span className="text-center ml-1"> CCCD</span>
                            </button>
                          )}
                          {!child.guardian && (
                            <button
                              className="flex items-center "
                              onClick={() => {
                                handleAddGuardianClick(child.childId);
                              }}
                            >
                              <BsPlusCircleFill />
                              <span className="text-center ml-1 whitespace-nowrap">
                                Người thân
                              </span>
                            </button>
                          )}
                          <button
                            className="flex items-center "
                            onClick={() => {
                              setCurrentChildDetail(child);
                            }}
                          >
                            <BsFillExclamationCircleFill />
                            <span className="text-center ml-1"> Chi tiết</span>
                          </button>

                          <button
                            className="flex items-center "
                            onClick={() => setCurrentChildUpdate(child)}
                          >
                            <BsFillPencilFill />
                            <span className="text-center ml-1"> Sửa</span>
                          </button>
                          <button className="flex items-center ">
                            <BsFillTrashFill />
                            <span className="text-center ml-1"> Xóa</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
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
      {modalCitizenId && currentChildAddId && (
        <ModalCitizenID
          childId={currentChildAddId}
          closeModal={() => {
            setModalCitizenId(false);
          }}
          onSubmit={handleAddCitizenSubmit}
        />
      )}
      {modalGuardian && currentChildAddId && (
        <GuardianModal
          childId={currentChildAddId}
          closeModal={() => {
            setModalGuardian(false);
          }}
          onSubmit={() => {
            alert("Thành công!");
            setCurrentChildAddId(0);
            setIsDataChange(!isDataChange);
          }}
        />
      )}
      {currentChildDetal && (
        <ChildDetailModal
          child={currentChildDetal}
          onClose={() => setCurrentChildDetail(null)}
        />
      )}

      {currentChildupdate && (
        <ChildUpdateModal
          closeModal={() => {
            setCurrentChildUpdate(null);
          }}
          onSubmit={() => {
            alert("Đã sửa thành công");
            setIsDataChange(!isDataChange);
          }}
          children={currentChildupdate}
        />
      )}
    </>
  );
}

CardTableChild.defaultProps = {
  color: "light",
};

CardTableChild.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
