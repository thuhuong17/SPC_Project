import usePrivateApi from "../../api/usePrivateApi";
import { useEffect, useState } from "react";

export default function CardTableDonation() {
  const privateApi = usePrivateApi();
  const [donations, setDonations] = useState([]);
  let totalAmount = 0;

  useEffect(() => {
    const getAllDonations = async () => {
      const response = await privateApi.getAllDonations();
      setDonations(response.data);
    };
    getAllDonations();
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div
              className="relative w-full px-4 max-w-full flex-grow flex-1"
              align="center"
            >
              <h3 className="font-semibold text-lg text-blueGray-700">
                DANH SÁCH NHÀ TÀi TRỢ
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
                  <th>Họ và tên</th>
                  <th>Ngày sinh</th>
                  <th>Giới tính</th>
                  <th>Địa chỉ</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Số tiền</th>
                  <th>Lời nhắn</th>
                  <th>Ngày tài trợ</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation, index) => {
                  const date = new Date(donation.donateTime);
                  const dateMDY = `${date.getDate()}-${
                    date.getMonth() + 1
                  }-${date.getFullYear()}`;
                  console.log(dateMDY);
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
                      <td>{donation.reason}</td>
                      <td>{dateMDY}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan="2">Tổng số nhà tài trợ</td>
                  <td colSpan="2">{donations.length}</td>
                  <td>Tổng số tiền</td>
                  <td colSpan="5">
                    {totalAmount.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
