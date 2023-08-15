import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Infor_payment() {
  return (
    <>
      <Navbar transparent />
      
      <main>

        <section className="pt-20">
          <div className=" w-80  pt-16">
            <div className="flex flex-wrap justify-center text-center mb-10 bg-white bg-cover">
              <div className="w-full px-9 ">
                <h2 className="text-4xl font-semibold top-10 mb-12">Thông tin chuyển khoản</h2>
              </div>
              <div>
              <div className="flex flex-wrap mb-24">
              <table className=" border-black border-separate border border-slate-400 table-row text-xl tracking-wide" >
                  <thead className=" h-20">
                    <tr>
                      <th className="border border-slate-300 ...">STT</th>
                      <th className="border border-slate-300 ...">Ngân hàng</th>
                      <th className="border border-slate-300 ...">Số tài khoản</th>
                      <th className="border border-slate-300 ...">Tên tài khoản</th>
                      <th className="border border-slate-300 ...">Chi nhánh</th>
                    </tr>
                  </thead>
                  <tbody className=" h-20">
                    <tr>
                      <td className="border border-slate-300 ...">1</td>
                      <td className="border border-slate-300 ...">VIETINBANK</td>
                      <td className="border border-slate-300 ...">NGUYỄN THỊ THU HƯƠNG</td>
                      <td className="border border-slate-300 ...">102770697265</td>
                      <td className="border border-slate-300 ...">Tân Chính Nam Đà Nẵng</td>
                    </tr>
                    <tr>
                    <td className="border border-slate-300 ...">2</td>
                      <td className="border border-slate-300 ...">VIETINBANK</td>
                      <td className="border border-slate-300 ...">NGUYỄN THỊ THU HƯƠNG</td>
                      <td className="border border-slate-300 ...">102770697265</td>
                      <td className="border border-slate-300 ...">Tân Chính Nam Đà Nẵng</td>
                    </tr>
                  </tbody>
                </table>
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
