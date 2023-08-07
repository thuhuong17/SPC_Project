import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function EventDetail() {
  return (
    <>
    
      <Navbar transparent />
      
      <main>

        <section className="pt-20 bg-black">
          <div className=" w-full bg-white pt-16">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4 ">
                <h2 className="text-4xl font-semibold top-10">Làng trẻ em SOS Gò Vấp – Cái nôi nuôi dưỡng ước mơ trở thành MC cho chàng trai trẻ La Chí Hùng</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Thứ Tư, ngày 03 tháng 08 năm 2023
                </p>
              </div>
              <div className="flex flex-wrap mb-24">
              <p className="mb-24">
                Xuất hiện tại chương trình "Cơ hội cho ai" với vẻ ngoài thư sinh cùng học vấn “khủng”, không ai nghĩ phía sau La Chí Hùng là 
                cả một quá khứ buồn, không có cha và mẹ. “Khác với mỗi người ở đây được sinh ra và nuôi nấng bởi một người cha và một người mẹ, 
                em được lớn lên và trưởng thành tại Làng trẻ em SOS TP Hồ Chí Minh”, La Chí Hùng chia sẻ tại chương trình.
                Tuy nhiên, La Chí Hùng không hề mặc cảm với điều đó, trái lại anh cảm thấy bản thân mình may mắn vì đã được nuôi dưỡng, lớn lên
                 và thành tài dưới một mái nhà đầy ắp tình yêu thương như gia đình mình.
                 Chàng trai sinh năm 1993 tâm sự: “Giá trị cốt lõi của Làng trẻ SOS là tình yêu thương của một người mẹ dành cho các con của mình.
                  Bản thân em là trẻ mồ côi, đến tận bây giờ vẫn chưa tìm được cha mẹ của mình. Em chỉ có một người mẹ nuôi, là mẹ Re (tên đầy đủ
                   là Huỳnh Thị Ngọc Re) của Làng trẻ SOS Gò Vấp”.
                </p><br></br>
                <img
                    alt="/ảnh"
                    src={require("assets/img/tre_em1.jpg").default}
                    className="shadow-lg rounded mx-auto w-200-px"
                  />
                  {/* <p>tên bucws anh</p> */}
                  <p className="">
                  Khi được hỏi vì sao muốn trở thành một MC nổi tiếng, chàng trai cho biết, ngoài để hiện thực hoá ước mơ trở thành MC nổi tiếng cũng là cách để anh gửi lời cảm ơn chân thành nhất đến với gia đình thứ hai của mình, Làng trẻ em SOS Gò Vấp.

“Khi bạn là một người bình thường, lời cảm ơn của bạn dù ý nghĩa nhưng cũng chưa đủ sức nặng. Nhưng khi đã trở thành người nổi tiếng và nói lời cảm ơn, đó chính là lời cảm ơn chân thành và giá trị nhất”, Chí Hùng xúc động.

Ngoài ra, theo Chí Hùng, thành công và nổi tiếng cũng là một cách để mình tìm kiếm các cơ hội tài trợ, hỗ trợ từ các mạnh thường quân cho Làng trẻ em SOS Gò Vấp, để các em nhỏ tại đây sẽ có cuộc sống tốt hơn, nhiều cơ hội phát triển trong tương lai.

"Khi Hùng thành công, các Mạnh Thường Quân sẽ nhìn thấy được Làng trẻ em SOS Gò Vấp là một nơi nuôi dưỡng trẻ em rất tốt, không chỉ cho các em chỗ ăn, chỗ ngủ mà còn đào tạo các em trở thành những người tài, có ích cho xã hội; Từ đó họ sẽ tin tưởng và mạnh dạn tài trợ cho làng", Chí Hùng nói

Đôi lời gửi gắm đến các em nhỏ của Làng trẻ em SOS Gò Vấp nói riêng và tất cả các bạn trẻ đang trên con đường chinh phục ước mơ nói chung, chàng MC trẻ La Chí Hùng mong muốn: "Các bạn hãy cố gắng học tập, rèn giũa bản thân thật tốt, cũng như mạnh dạn theo đuổi ước mơ, nắm bắt mọi cơ hội… rồi ngày nào đó thành công sẽ tự tìm đến các bạn".
                  </p>

              </div>
              
            </div>
            
              </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
