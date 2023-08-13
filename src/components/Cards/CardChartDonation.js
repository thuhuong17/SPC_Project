import React from "react";
import Chart from "chart.js";
import { useState } from "react";
import { useEffect } from "react";
import usePrivateApi from "api/usePrivateApi";

export default function CardChartDonation({ onChangeLayoutClick }) {
  const privateApi = usePrivateApi();
  const [years, setYears] = useState([2023, 2022, 2021, 2020, 2019]);
  const [currentYear, setCurrentYear] = useState(2023);
  const [monthAmountsByYear, setMonthAmountByYear] = useState([]);
  const [yearsDonationAmounts, setYearsDonationAmounts] = useState([]);
  const [donationYears, setDonationYears] = useState([]);
  const [donationYearAmounts, setDonationYearAmounts] = useState([]);

  useEffect(() => {
    const getYearsDonationAmounts = async () => {
      const response = await privateApi.getYearsDonationAmounts();
      setYearsDonationAmounts(response.data);
    };
    getYearsDonationAmounts();
  }, []);

  useEffect(() => {
    const ys = [];
    const ams = [];
    for (const [key, value] of Object.entries(yearsDonationAmounts)) {
      ys.push(key);
      ams.push(value);
    }
    setDonationYears(ys);
    setDonationYearAmounts(ams);
  }, [yearsDonationAmounts]);
  useEffect(() => {
    const getMonthAmountsByYear = async () => {
      const response = await privateApi.getMonthDonationAmountsByYear(
        currentYear
      );
      setMonthAmountByYear(response.data);
    };
    getMonthAmountsByYear();
  }, [currentYear]);

  const handleYearChange = (e) => {
    setCurrentYear(e.target.value);
  };

  useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            // label: currentYear,
            label: "VND",
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: monthAmountsByYear,
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          display: false,
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");

    window.myLine = new Chart(ctx, config);
  }, [monthAmountsByYear]);

  // Config donatione amount by years bar chart
  useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: donationYears,
        datasets: [
          {
            label: "VND",
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: donationYearAmounts,
            fill: false,
            barThickness: 15,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          display: false,
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "year",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, [donationYears, donationYearAmounts]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-white text-xl font-semibold mb-2">
                Thống kê tài trợ tất cả các năm
              </h2>
              <div className="flex"></div>
            </div>
            <div
              style={{ position: "absolute", right: "0", marginRight: "25px" }}
            >
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  onChangeLayoutClick();
                }}
              >
                Bảng thống kê
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <h6 className=" text-blueGray-100 mr-3 text-xs mb-2">
            Số tiền (VND)
          </h6>
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-white text-xl font-semibold mb-2">
                Thống kê tài trợ theo từng năm
              </h2>
              <div className="flex">
                <h6 className=" text-blueGray-100 mr-3 text-base ">Năm</h6>
                <select
                  className="dn-chart-y-select"
                  onChange={handleYearChange}
                  value={currentYear}
                >
                  {/* <option selected>2023</option> */}
                  {years.map((year, index) => (
                    <option
                      key={index}
                      value={year}
                      selected={year == currentYear}
                    >
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <h6 className=" text-blueGray-100 mr-3 text-xs mb-2">
            Số tiền (VND)
          </h6>
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
