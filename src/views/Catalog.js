import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";
import apiMethod from "../api/apiMethod";

export default function Catalog() {
  const { name, id } = useParams();
  const [category, setCategory] = useState();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await apiMethod.getCategoryById(id);
      setCategory(response);
    };
    getCategory();
  }, [id, name]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await apiMethod.getArticlesByCateId(id);
      setArticles(response);
    };
    getArticles();
  }, [id, name]);

  return (
    <>
      <Navbar transparent />

      <main>
        <section className="pt-32 pb-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-12">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">{category?.name}</h2>
                {/* <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Các chương trình quyên góp cho các bé
                </p> */}
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
                      to={`/thong-tin/${category?.categoryUrl}/${article.articleUrl}/${article.articleId}`}
                    >
                      <div className="px-6">
                        <img
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
              {/* <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/tre_em1.jpg").default}
                    className="shadow-lg rounded mx-auto max-w-250-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Quyên góp cho trẻ em cùng cao Tây Bắc
                    </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Cần rất nhiều tấm lòng từ miền xuôi
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
