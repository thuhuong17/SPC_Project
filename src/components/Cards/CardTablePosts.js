import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import "../../assets/styles/tableItems.css"
// import usePrivateApi from "api/usePrivateApi";

export default function CardTablePost({ color, articles, deleteRow, editRow }) {

  return (
    <>
    {/* Bảng 1: Danh sách bài viết */}
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded mb-0 py-3 border-1">
          <div className="flex flex-wrap">
            <div className="relative w-full px-1 margin-top: 10 max-w-full flex-grow flex-1" align="center">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                DANH SÁCH BÀI VIẾT
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <div className="table-wrapper">
            <table className="table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tiêu đề bài viết</th>
                      <th className="expand">Hình ảnh</th>
                      <th>Ngày đăng</th>
                      <th>Đường dẫn</th>
                      
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      articles.map((post, idx)=> {
                        // const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);

                        return <tr key={idx}>
                          <td> {idx+1} </td>
                          <td>{post.title}</td>
                          <td className="expand"><img src={post.image.imageUrl}/></td>
                          <td>{post.postDate}</td>
                          <td>
                            <Link to={`../thong-tin/${post.category.categoryUrl}/${post.articleUrl}/${post.articleId}`}>
                              {`http://localhost:3000/thong-tin/${post.category.categoryUrl}/${post.articleUrl}/${post.articleId}`}
                            </Link>
                          </td>
                          {/* <link */}
                          {/* <td>
                            <span className={`label label-${rows.status}`}>
                              {statusText}
                            </span>
                          </td> */}
                          <td>
                            <span className="actions">
                              <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(post.articleId)}/>
                              {/* <BsFillPencilFill onClick={() => editRow(idx)}/> */}
                            </span>
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

CardTablePost.defaultProps = {
  color: "light",
};

CardTablePost.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};