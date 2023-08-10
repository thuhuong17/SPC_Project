import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import apiMethod from "api/apiMethod";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [childrenCount, setChildrenCount] = useState(0);
  const [adoptCount, setAdoptCount] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const getArticles = async () => {
      const params = {
        limit: 4,
      };
      const response = await apiMethod.getArticles(params);
      setArticles(response);
    };
    getArticles();
  }, []);

  useEffect(() => {
    const getChildrenCount = async () => {
      const response = await apiMethod.countChildren();
      setChildrenCount(response.data);
    };
    getChildrenCount();
  }, []);
  useEffect(() => {
    const getAdoptCount = async () => {
      const params = {
        status: "Đã được nhận nuôi",
      };
      const response = await apiMethod.countChildren(params);
      setAdoptCount(response.data);
    };
    getAdoptCount();
  }, []);

  useEffect(() => {
    const getAmount = async () => {
      const response = await apiMethod.gelTotalDonationAmount();
      setAmount(response);
    };
    getAmount();
  }, []);


  console.log(childrenCount);
  console.log(amount);
  console.log(adoptCount);
  return (
    <>
      <Navbar transparent />

      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('https://sldtbxh.bacgiang.gov.vn/documents/21423/16555458/1682048223663_20.4.23.jpg/557d4aa4-a634-4031-b364-2eaa0cd8d53e?t=1682048223666')`,
              // "url('./src/assets/img/home.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white bold text-4xl">
                    Chào mừng đến với trung tâm bảo trợ xã hội của chúng tôi!
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Mỗi trẻ em đều có một nơi nương tựa. Đây là ngôi nhà giúp
                    các em có điểm tựa phát triển trong tương lai tươi sáng!!!
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
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-child"></i>
                    </div>
                    <h1 className="text-xl font-semibold">{childrenCount ? childrenCount : 0}</h1>
                    <h6 className="text-xl font-semibold">
                      Tổng số trẻ đã và đang được nuôi dưỡng tại trung tâm
                    </h6>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-money-bill-wave"></i>
                    </div>
                    <h1 className="text-xl font-semibold">
                      {amount.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </h1>
                    <h6 className="text-xl font-semibold">
                      Số tiền quyên góp từ mạnh thường quân
                    </h6>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-heart"></i>
                    </div>
                    <h1 className="text-xl font-semibold">{adoptCount ? adoptCount : 0}</h1>
                    <h6 className="text-xl font-semibold">
                      Số trẻ đã được các gia đình nhận nuôi
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Bài hát Giấc mơ đêm qua
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Bài hát Giấc mơ đêm qua của Nhạc sĩ Trịnh Nguyên Bình đã nói
                  lên mong ước của hàng ngàn trẻ em mồ côi, bị bỏ rơi. Mong ước
                  của các con nghe thật giản đơn “Con luôn mong sao bên mình một
                  tổ ấm, cho con như bao nhiêu người” nhưng cũng đầy trăn
                  trở.Với sự chung tay, góp sức của bạn, Làng trẻ em SOS sẽ mang
                  lại cho các con một gia đình thay thế, giúp các con viết tiếp
                  ước mơ của mình.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Làng trẻ em SOS sẽ mang lại cho các con một gia đình thay thế,
                  giúp các con viết tiếp ước mơ của mình.
                </p>
                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                  Đọc thêm
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={require("assets/img/home.jpg").default}
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
                      Bài hát Giấc mơ đêm qua
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Bài hát Giấc mơ đêm qua của Nhạc sĩ Trịnh Nguyên Bình đã
                      nói lên mong ước của hàng ngàn trẻ em mồ côi, bị bỏ rơi.
                      Mong ước của các con nghe thật giản đơn “Con luôn mong sao
                      bên mình một tổ ấm, cho con như bao nhiêu người” nhưng
                      cũng đầy trăn trở.Với sự chung tay, góp sức của bạn, Làng
                      trẻ em SOS sẽ mang lại cho các con một gia đình thay thế,
                      giúp các con viết tiếp ước mơ của mình.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* start event */}
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Sự kiện - tin tức mới
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap">
              {articles.map((article, index) => {
                return (
                  <div
                    key={index}
                    className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
                  >
                    <Link
                      to={`/thong-tin/${article.category?.categoryUrl}/${article.articleUrl}/${article.articleId}`}
                    >
                      <div className="px-6">
                        <img
                          style={{ height: "200px" }}
                          alt="..."
                          src={article.image.imageUrl}
                          className="shadow-lg rounded mx-auto max-w-250-px"
                        />
                        <div className="pt-6 ">
                          <h5 className="text-xl font-bold">{article.title}</h5>
                          <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                            {article.postDate}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  ĐĂNG KÝ ĐỠ ĐẦU NGAY
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Hãy liên hệ với chúng tôi để biết thêm chi tiết
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Hoàn thành đơn và chúng tôi sẽ phản hồi bạn trong vòng 24h
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Thông điệp
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Gửi thông điệp
                      </button>
                    </div>
                  </div>
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
