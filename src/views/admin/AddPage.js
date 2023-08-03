import { useState } from "react"
import { useEffect } from "react"
import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap"
import { loadAllCategories } from "../../services/category-service"
import JoditEditor from "jodit-react"
import { useRef } from "react"
import { createPost as doCreatePost, uploadPostImage } from "../../services/post-service"
import { getCurrentUserDetail } from "../../auth"
import { toast } from "react-toastify"
import "../../assets/styles/FormEditor.css"
const AddPage = (color) => {
<<<<<<< HEAD
=======

>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
    const editor = useRef(null)
    // const [content,setContent] =useState('')
    const [categories, setCategories] = useState([])
    const [user, setUser] = useState(undefined)
<<<<<<< HEAD
=======

>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
    const [post, setPost] = useState({
        title: '',
        content: '',
        categoryId: ''
    })
<<<<<<< HEAD
    const [image, setImage] = useState(null)
    // const config={
    //     placeholder:"Start typing...",
    // }
    useEffect(
        () => {
=======

    const [image, setImage] = useState(null)


    // const config={
    //     placeholder:"Start typing...",

    // }

    useEffect(
        () => {

>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
            setUser(getCurrentUserDetail())
            loadAllCategories().then((data) => {
                console.log(data)
                setCategories(data)
            }).catch(error => {
                console.log(error)
            })
        },
        []
    )
<<<<<<< HEAD
=======

>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
    //field changed function
    const fieldChanged = (event) => {
        // console.log(event)
        setPost({ ...post, [event.target.name]: event.target.value })
    }
<<<<<<< HEAD
    const contentFieldChanaged = (data) => {
        setPost({ ...post, 'content': data })
    }
    //create post function
    const createPost = (event) => {
        event.preventDefault();
=======

    const contentFieldChanaged = (data) => {

        setPost({ ...post, 'content': data })


    }


    //create post function
    const createPost = (event) => {

        event.preventDefault();

>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
        // console.log(post)
        if (post.title.trim() === '') {
            toast.error("post  title is required !!")
            return;
        }
<<<<<<< HEAD
=======

>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
        if (post.content.trim() === '') {
            toast.error("post content is required !!")
            return
        }
<<<<<<< HEAD
=======

>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
        if (post.categoryId === '') {
            toast.error("select some category !!")
            return;
        }
<<<<<<< HEAD
        //submit the form one server
        post['userId'] = user.id
        doCreatePost(post).then(data => {
=======


        //submit the form one server
        post['userId'] = user.id
        doCreatePost(post).then(data => {


>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
            uploadPostImage(image,data.postId).then(data=>{
                toast.success("Image Uploaded !!")
            }).catch(error=>{
                toast.error("Error in uploading image")
                console.log(error)
            })
<<<<<<< HEAD
=======



>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
            toast.success("Post Created !!")
            // console.log(post)
            setPost({
                title: '',
                content: '',
                categoryId: ''
            })
        }).catch((error) => {
            toast.error("Post not created due to some error !!")
            // console.log(error)
        })
<<<<<<< HEAD
    }
=======

    }

>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
    //handling file chagne event
    const handleFileChange=(event)=>{
        console.log(event.target.files[0])
        setImage(event.target.files[0])
    }
<<<<<<< HEAD
=======


>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
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
                    <CardBody>
                                {/* {JSON.stringify(post)} */}
                        <br /> <br />
                        <Form onSubmit={createPost}>
                            <div className="my-3">
                                        <Label for="title" >Tiêu đề</Label>
                                        <Input
                                            type="text"
                                            id="title"
                                            placeholder="Nhập tiêu đề"
                                            className="rounded-0"
                                            name="title"
                                            onChange={fieldChanged}
                                        />
                            </div>

                            <div className="my-3">
                                        <Label for="content" id="content">Nội dung</Label>
                                        <JoditEditor
                                            id="editor"
                                            ref={editor}
                                            value={post.content}
                                            placeholder="Nhập nội dung"
                                            onChange={(newContent) => contentFieldChanaged(newContent)}
                                        />
                            </div>

                                    {/* file field  */}

                            <div className="mt-3">
                                        <Label for="image">Chọn ảnh</Label>
                                        <br />
<<<<<<< HEAD
                                        <Input id="image" accept="image/*" type="file" onChange={handleFileChange} />
=======
                                        <Input id="image" type="file" onChange={handleFileChange} />
>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
                            </div>

                            <div className="my-3">
                                        <Label for="category" >Danh mục</Label>
                                        <Input
                                            type="select"
                                            id="category"
<<<<<<< HEAD
                                        >
=======
                                            placeholder="Enter here"
                                            className="rounded-0"
                                            name="categoryId"
                                            onChange={fieldChanged}
                                            defaultValue={0}

                                        >

>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
                                            <option disabled value={0} >--Chọn danh mục--</option>

                                            {

                                                categories.map((category) => (
                                                    <option value={category.categoryId} key={category.categoryId}>
                                                        {category.categoryTitle}
                                                    </option>
                                                ))
<<<<<<< HEAD
=======

>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
                                            }
                                        </Input>
                            </div>
                            <Container className="text-center">
                                        <Button id="submit" type="submit" className="rounded-0" color="primary">Đăng bài</Button>
                                        <Button id="reset" className="rounded-0 ms-2" color="danger">Reset</Button>
                            </Container>
                        </Form>
                    </CardBody>
<<<<<<< HEAD
                    </Card>
=======
                </Card>
>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
            </div>
        </>
        
    )
}
<<<<<<< HEAD
export default AddPage;
=======

export default AddPage
>>>>>>> 92996f6c6abe554b46dfd14466746b1ed80d6dfd
