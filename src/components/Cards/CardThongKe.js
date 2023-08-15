import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import apiMethod from "api/apiMethod";
export default function CardT () {
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
        <div className='container mx-auto px-4'>
            <div className='flex flex-wrap'>
            <div className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400'>
                    <i className='fas fa-child'></i>
                    </div>
                    <h1 className='text-xl font-semibold'>
                    {childrenCount ? childrenCount : 0}
                    </h1>
                    <h6 className='text-xl font-semibold'>
                    Tổng số trẻ đã và đang được nuôi dưỡng tại trung tâm
                    </h6>
                </div>
                </div>
            </div>
            <div className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'>
                <div className=' relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400'>
                    <i className='fas fa-money-bill-wave'></i>
                    </div>
                    <h1 className='text-xl font-semibold'>
                    {amount.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </h1>
                    <h6 className='text-xl font-semibold'>
                    Số tiền quyên góp từ mạnh thường quân
                    </h6>
                </div>
                </div>
            </div>
            <div className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400'>
                    <i className='fas fa-heart'></i>
                    </div>
                    <h1 className='text-xl font-semibold'>
                    {adoptCount ? adoptCount : 0}
                    </h1>
                    <h6 className='text-xl font-semibold'>
                    Số trẻ đã được các gia đình nhận nuôi
                    </h6>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </>
    )
}