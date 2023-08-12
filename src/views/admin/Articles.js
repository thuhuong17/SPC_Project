import { useState } from "react";
import { useEffect } from "react";
import {
  Card,
  CardBody,
  Form,
  Input,
  Label,
  Button,
  Container,
} from "reactstrap";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import "../../assets/styles/FormEditor.css";
import apiMethod from "api/apiMethod";
import PrivateFormDataApi from "api/privateFormDataApi";
import Validation from "./Validate";

const Articles = (color) => {
// Khai báo
  const editor = useRef('');
  const imgRef = useRef('');
  const cateRef = useRef('');

  const privateFDataApi = PrivateFormDataApi();
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  // const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  // const [user, setUser] = useState(undefined);
  const [post, setPost] = useState({
    title: "",
    content: "",
    articleUrl: "",
    category: {
      categoryId: "",
    },
  });
  const [image, setImage] = useState(null);
  const config = {
    readonly: false,
    placeholder: "Nhập nội dung bài viết",
  };

  const [errors, setErrors] = useState({})
  // restAPI 
  useEffect(() => {
    const getCategories = async () => {
      const response = await apiMethod.getCategories();
      setCategories(response);
    };
    getCategories();
  }, []);



  // Handle function
  const handleInputChange = (e) => {
    // setPost({ ...post, title: e.target.value });
    setPost({ ...post, [e.target.name]: e.target.value });
    
  };



  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    const category = post.category;
    category.categoryId = e.target.value;
    setPost({
      ...post,
      category: category,
    });
  };

  const handleContentChange = (content) => {
    post.content = content;
  };


  // // validate form
  // const [validataMsg, setValidateMsg] = useState('')

  // const validataAll = () => {
  //   const msg = {}
  //   if(isEmpty(title)){
  //     msg.title = "Vui lòng nhập tiêu đề bài viết"
  //   }
  //   if(isEmpty(category)){
  //     msg.category = "Vui lòng chọn danh mục bài viết"
  //   }
    
  //   if(isEmpty(content)){
  //     msg.content = "Vui lòng nhập nội dung bài viết"
  //   }

  //   setValidateMsg(msg)
  //   if(Object.keys(msg).length > 0) return false

  //   return true
  // }

  const handleSubmit = async (e) => {
    // const isValid = validataAll()
    // if (!isValid) return
      // call API
    const data = new FormData();
    e.preventDefault();
    data.append(
        "article",
        new Blob(
          [
            JSON.stringify({
              title: post.title,
              content: post.content,
              articleUrl: post.articleUrl,
              category: post.category,
            }),
          ],
          {
            type: "application/json",
          }
        )
      );
    data.append("image", image);
    console.log(image);
    const response = await privateFDataApi.addArticle(data);
    console.log(response);
      // setPost({
      //   title: "",
      //   content: "",
      //   articleUrl: "",
      //   category: {
      //     categoryId: null,
      //   },
      // });
      // setImage();
      // editor.current.value = "";
      // imgRef.current.value = "";
      // cateRef.current.value = -1;
    
    
  };

  function handleValidation(e){
    e.preventDefault()
    setErrors(Validation(post))
  }
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Thêm bài viết của bạn
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <Card className="shadow-sm border-0 mt-2">
          <CardBody className="p-8">
            <Form onSubmit={handleValidation}>
              <div className="form-group">
                <Label htmlFor="title" id="title-lable">Tiêu đề <p className="validata-star">(*)</p></Label>
                <input
                  type="text"
                  name="title"
                  placeholder="Nhập tiêu đề"
                  value={post.title}
                  onChange={handleInputChange}
                />
                {errors.title && <p style={{color: "red"}}>{errors.title}</p>}
              </div>
              <div className="form-group">
                <Label htmlFor="title" id="title-lable">Danh mục bài viết <p className="validata-star">(*)</p></Label>
                <select
                  value={post.category?.categoryId} 
                  onChange={handleCategoryChange}
                  ref={cateRef}
                >
                  <option defaultValue={-1}>
                    Chọn danh mục
                  </option>
                  {categories.map((category, index) => (
                    <option value={category.categoryId} key={index}>
                      {category.name}
                    </option>
                  ))}
                  
                </select>
                {errors.category && <p style={{color: "red"}}>{errors.category}</p>}
              </div>
              <div className="form-group">
                <Label htmlFor="title" id="title-lable">Đường dẫn</Label>
                <input
                  type="text"
                  name="articleUrl"
                  placeholder="Nhập đường dẫn"
                  value={post.articleUrl}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <Label htmlFor="title" id="title-lable">Chọn ảnh <p className="validata-star">(*)</p></Label>
                <input
                  ref={imgRef}
                  id="image"
                  accept="image/*"
                  type="file"
                  onChange={handleFileChange}
                />
                
              </div>
              <div className="form-group">
                <Label htmlFor="title" id="title-lable">Nội dung<p className="validata-star">(*)</p></Label>
                <JoditEditor
                  id="editor"
                  ref={editor}
                  value={post.content}
                  config={config}
                  onChange={(newContent) => {
                    handleContentChange(newContent);
                  }}
                />
                {errors.content && <p style={{color: "red"}}>{errors.content}</p>}
              </div>

              <Container className="text-center">
                <Button
                  id="submit"
                  className="rounded-0"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Đăng bài
                </Button>
                <Button id="reset" className="rounded-0 ms-2" color="danger">
                  Reset
                </Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default Articles;
