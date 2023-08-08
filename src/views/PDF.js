import React from 'react';
import Pdf from 'react-to-pdf';
import "../assets/styles/PDF.css"
const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <div className='start-don'>
          <h1 className='uppercase-text'>cộng hoà xã hội chủ nghĩa việt nam</h1>
          <h3 className='under-line'>Độc lập - Tự do - Hạnh phúc</h3>
          <h1 className='uppercase-text title-text'>ĐƠN ĐĂNG KÝ NHU CẦU NHẬN TRẺ EM SỐNG Ở CƠ SỞ NUÔI DƯỠNG <br /> LÀM CON NUÔI TRONG NƯỚC</h1>
        </div>
        
        <br />
        {/* <h1>{props.title}</h1>
        <img src={props.image} alt={props.title} />
        <p>{props.content}</p> */}

        <div className='information'>
          <p>Kính gửi: Sở tư pháp tỉnh/thành phố</p>
          
          <p>I. Thông tin cơ bản về người đăng ký nhu cầu nhận con nuôi</p>
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Ông</th>
                  <th>Bà</th>
                </tr>
              </thead>

              <tbody>
                <tr>Họ và tên
                    <td>{props.firstName} {props.lastName}</td>
                </tr>
                <tr>Ngày, tháng, năm sinh
                    <td> {props.birthday} </td>
                </tr>
                <tr>Số CCCD
                    <td> {props.citizenIdentNumber} </td>
                </tr>
                <tr>Địa chỉ tạm trú
                    <td> {props.addressTemporary} </td>
                </tr>
                <tr>Địa chỉ thường trú
                    <td> {props.addressPermanent} </td>
                </tr>
                <tr>Điện thoại
                    <td> {props.phoneNumber} </td>
                </tr>
                <tr>Email
                    <td> {props.email} </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <p>II. Quan hệ giữa người xin nhận con nuôi và trẻ em được nhận làm con nuôi:</p>
          <p>............................................................................................................................................................</p>
          <p>............................................................................................................................................................</p>
          <p>............................................................................................................................................................</p>

          <p>III. Lý do xin nhận con nuôi: </p>
          <p>............................................................................................................................................................</p>
          <p>............................................................................................................................................................</p>
          <p>............................................................................................................................................................</p>
        </div>

      </div>
      <div className='btn-container'>
        <Pdf targetRef={ref} filename="don-xin-con-nuoi.pdf">
          {({ toPdf }) => <button className='btn-download' onClick={toPdf}>Tải Đơn</button>}
        </Pdf>
      </div>

    </>
  );
}

export default PDF;