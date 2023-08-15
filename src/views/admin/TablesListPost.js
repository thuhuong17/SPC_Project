import React from "react";
// Add account
import { useState, useEffect } from "react";
// components
import "../../assets/styles/tableAccountCard.css"
import { Link, useNavigate  } from "react-router-dom";
import CardTablePost from "components/Cards/CardTablePosts";
import usePrivateApi from "api/usePrivateApi";
import { Modal } from "components/Modals/ModalPostsList";
// import { Modal } from "components/Modals/ModalPostsList";

export default function TablesListPost() {
  const [modalOpen, setModalOpen] = useState(false);
  const api = usePrivateApi()

  const navigate  = useNavigate ();
  // const routeChange = () => {
  //   let path = `/admin/add-page`;
  //   navigate.push(path);
  // }

  const [rows, setRows] = useState([
    {stt:"1", title:"Hỗ trợ trẻ em miền núi", datePost:"15/08/2023", url: "service", image:""}
  ])

  const [rowToEdit, setRowToEdit] = useState(null);

  const privateApi = usePrivateApi();
  const [articles, setArticles] = useState([]);

  const getArticles = async () =>{
    const response = await privateApi.getAllArticles();
    setArticles(response.data)
  }
  useEffect(() => {
    getArticles();
  },[])

  const handleDeleteRow = async (targetIndex) => {
    const res = await api.deleteListPost(targetIndex)
    // setRows(rows.filter((_, idx) => idx !== targetIndex))
    getArticles();
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  }

  const handleSubmit = (newRow) => {
    rowToEdit === null
    ? setRows([...rows, newRow])
    : setRows(
      rows.map((currRow, idx) => {
        if(idx !== rowToEdit) return currRow;

        return newRow;
      }))
  }
  console.log(articles[2]);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <div className="tableStyle">
              <CardTablePost articles={articles} rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
              <Link to="/admin/add-page">
              <button className="btn">Thêm</button>
              </Link>
              {modalOpen && <Modal 
              closeModal={() => {
                setModalOpen(false);
                setRowToEdit(null);
              }}
              onSubmit={handleSubmit}
              defaultValue={rowToEdit !== null && articles[rowToEdit]}
            />}

          </div>
        </div>
      </div>
    </>
  );
}