import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsPlusCircleFill,
  BsFillCaretDownSquareFill,
} from "react-icons/bs";
// components
import "../../assets/styles/tableItems.css";
import { ModalCitizenID } from "components/Modals/ModalCitizenID";
import usePrivateApi from "api/usePrivateApi";
import { GuardianModal } from "components/Modals/GuardianModal";
import { Button } from "reactstrap";

export default function CardTableChild({ color, isAddChild }) {
  const privateApi = usePrivateApi();

  const [children, setChildren] = useState([]);

  const [modalCitizenId, setModalCitizenId] = useState(false);
  const [modalGuardian, setModalGuardian] = useState(false);

  const [currentChildAddId, setCurrentChildAddId] = useState(0);
  const [currentChildChangeEmp, setCurrentChildChangeEmp] = useState(0);

  const [employees, setEmployees] = useState([]);
  const [isDataChange, setIsDataChange] = useState(false);

  const [status, setStatus] = useState([]);
  const [statusFilter, setStatusFilter] = useState();
  const [statusSelectFilter, setStatusSelectFilter] = useState(false);

  useEffect(() => {
    const getChildren = async () => {
      let params = null;
      if (statusFilter != undefined) {
        params = {
          status: statusFilter,
        };
      }

      const response = await privateApi.getAllChildren(params);
      // console.log(response);
      setChildren(response.data);
    };
    getChildren();
  }, [isAddChild, isDataChange, statusFilter]);

  useEffect(() => {
    const getEmployees = async () => {
      const response = await privateApi.getAllEmployees();
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

  // console.log(status);

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
  };

  const handleEmployeeChange = async (e) => {
    const response = await privateApi.addEmployeeForChild(
      currentChildChangeEmp,
      e.target.value
    );
    setCurrentChildChangeEmp(0);
    setIsDataChange(!isDataChange);
  };

  const handleStatusFilterClick = (e) => {
    setStatusSelectFilter(false);
    setIsDataChange(!isDataChange);
    setStatusFilter(e.target.value);
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded mb-0 py-3 border-1">
          <div className="flex flex-wrap">
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
                  <th>Ngày sinh</th>
                  <th>Giới tính</th>
                  <th>Quốc tịch</th>
                  <th>Địa chỉ tạm trú</th>
                  <th>Địa chỉ thường trú</th>
                  <th colspan="2">
                    Người giám hộ
                    <th style={{ border: "none" }}>Họ và tên</th>
                    <th style={{ border: "none" }}>Quan hệ với trẻ</th>
                  </th>
                  <th>Hoàn cảnh</th>
                  <th>Ngày đến</th>
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
                          <select
                            // onChange={handleEmployeeChange}
                            onChange={handleStatusFilterClick}
                          >
                            <option value="1" disabled selected>
                              Chọn trạng thái
                            </option>
                            {status.map((stat, index) => {
                              return (
                                <option key={index} value={stat.status}>
                                  {stat.status}
                                </option>
                              );
                            })}
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
                        <span className="mr-2">
                          {child.childrenStatus.status}
                        </span>
                        <button>
                          <BsFillCaretDownSquareFill />
                        </button>
                      </td>
                      <td>
                        <div className="">
                          {!child.citizenId && (
                            <button
                              className="flex items-center "
                              // value={child.childId}
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

                          <button className="flex items-center ">
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
            setCurrentChildAddId(0);
          }}
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
