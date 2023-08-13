import React, { useEffect, useState } from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import "../assets/styles/donation.css";
import apiMethod from "api/apiMethod";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Pagination } from "@mui/material";

export default function DonationList() {
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(8);
  const [years, setYears] = useState([2018, 2019, 2020, 2021, 2022, 2023]);
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [donations, setDonations] = useState([]);

  const limit = 18;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalElement, setTotalElement] = useState(0);

  const [sort, setSort] = useState({
    sortBy: "",
    sortDirec: "",
  });

  useEffect(() => {
    const getDonationsPagin = async () => {
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
      const response = await apiMethod.getDonationByMonthInYear(
        year,
        month,
        params
      );
      setTotalPage(response.totalPages);
      setTotalElement(response.totalElements);
      setDonations(response.content);
    };
    getDonationsPagin();
  }, [year, month, currentPage, sort]);

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setCurrentPage(1);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://uploads.nguoidothi.net.vn/content/5f777939-cd4c-4543-9197-44bfa2d74a4a.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center pt-8">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Danh sách các nhà tài trợ
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Khoản tiền tài trợ của bạn, dù lớn hay nhỏ, đều quan trọng
                    với chúng tôi trên hành trình mang lại nụ cười và tương lai
                    cho trẻ em mồ côi, bị bỏ rơi và có hoàn cảnh đặc biệt khó
                    khăn.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap"></div>
            <div className="flex flex-wrap mt-32">
              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
                <div>
                  <h3 className="text-2xl mb-2 font-semibold leading-normal">
                    Danh sách các nhà tài trợ tháng{" "}
                    {
                      <select
                        className="dn-list-y-select"
                        value={month}
                        onChange={handleMonthChange}
                      >
                        {months.map((m, index) => {
                          return (
                            <option key={index} value={m}>
                              {m}
                            </option>
                          );
                        })}
                      </select>
                    }{" "}
                    năm{" "}
                    {
                      <select
                        className="dn-list-y-select"
                        value={year}
                        onChange={handleYearChange}
                      >
                        {years.map((y, index) => {
                          return (
                            <option key={index} value={y}>
                              {y}
                            </option>
                          );
                        })}
                      </select>
                    }
                  </h3>
                </div>
                <div className="table-wrapper">
                  <table className="table" style={{ display: "table" }}>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Họ và tên</th>
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
                      </tr>
                    </thead>
                    <tbody>
                      {donations.map((donation, index) => {
                        const date = new Date(donation.donateTime);
                        const dateMDY = `${date.getDate()}-${
                          date.getMonth() + 1
                        }-${date.getFullYear()}`;
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{donation.donor.fullName}</td>
                            <td>{dateMDY}</td>
                            <td>
                              {donation.amount.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                              })}
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
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://sosvietnam.org/getmedia/105ffb55-e428-4bf1-90a3-4249e49ed403/1-2.jpg?width=600&height=600&ext=.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      TUỔI THƠ VÔ GIÁ KHI CÓ ANH CHỊ EM BÊN CẠNH
                    </h4>
                  </blockquote>
                  <img
                    alt="..."
                    src="https://sosvietnam.org/getmedia/819fc9d0-cf45-4c09-a556-16ebea9a641a/1-3.jpg?width=600&height=600&ext=.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Bớt đi một đứa trẻ đau khổ là thêm một người lớn hạnh phúc
                    </h4>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
