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
const Articles = (color) => {
  const editor = useRef(null);
  const imgRef = useRef(null);
  const cateRef = useRef(null);

  // const [content,setContent] =useState('')
  const privateFDataApi = PrivateFormDataApi();
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(undefined);
  const [post, setPost] = useState({
    title: "",
    content: "",
    articleUrl: "",
    category: {
      categoryId: null,
    },
  });
  const [image, setImage] = useState(null);
  const config = {
    readonly: false,
    placeholder: "Nhập nội dung bài viết",
  };

  useEffect(() => {
    const getCategories = async () => {
      const response = await apiMethod.getCategories();
      setCategories(response);
    };
    getCategories();
  }, []);

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
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
            <Form>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Nhập tiêu đề"
                  value={post.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <select
                  value={post.category?.categoryId}
                  onChange={handleCategoryChange}
                  ref={cateRef}
                >
                  <option value={-1} disabled selected>
                    Chọn danh mục
                  </option>
                  {categories.map((category, index) => (
                    <option value={category.categoryId} key={index}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="articleUrl"
                  placeholder="Nhập đường dẫn"
                  value={post.articleUrl}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  ref={imgRef}
                  id="image"
                  accept="image/*"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <div className="form-group">
                <JoditEditor
                  id="editor"
                  ref={editor}
                  value={post.content}
                  config={config}
                  onChange={(newContent) => {
                    handleContentChange(newContent);
                  }}
                />
              </div>

              <Container className="text-center">
                <Button
                  id="submit"
                  type="submit"
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
