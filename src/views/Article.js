import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";
import apiMethod from "../api/apiMethod";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    const getArticle = async () => {
      const response = await apiMethod.getArticle(id);
      setArticle(response);
    };
    getArticle();
  }, [id]);

  return (
    <>
      <Navbar transparent />

      <main>
        <section className="pt-20 bg-black">
          <div className=" w-full bg-white pt-16">
            <div className="flex flex-wrap justify-center mb-24 px-48">
              <div className="w-full lg:w-6/12 px-4 text-center ">
                <h2 className="text-4xl font-semibold top-10">
                  {article?.title}
                </h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  {/* Thứ Tư, ngày 03 tháng 08 năm 2023 */}
                  {article?.postDate}
                </p>
              </div>
              <div className="w-full lg:w-9/12 mr-auto ml-auto">
                {article && (
                  <div
                    id="textmt"
                    dangerouslySetInnerHTML={{
                      __html: article.content,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
