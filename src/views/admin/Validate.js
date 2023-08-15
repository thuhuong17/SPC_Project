export default function Validation(post){
    const errors = {}
    

    if(post.title === ""){
        errors.title = "Vui lòng nhập tiêu đề bài viết"
    }

    if(post.category === "Chọn danh mục"){
        errors.category = "Vui lòng chọn danh mục bài viết"
    }

    if(post.content===""){
        errors.content = "Vui lòng nhập nội dung bài viết"
    }

    if(post.image === ""){
        errors.image = "Vui lòng chọn ảnh"
    }
    
    return errors
}