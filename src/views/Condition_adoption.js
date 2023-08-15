import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Condi_adop() {
  return (
    <>
      <Navbar transparent />
      
      <main>

        <section className="pt-20">
          <div className=" w-80  pt-16">
            <div className="flex flex-wrap justify-center text-center mb-10 bg-white bg-cover leading-relaxed">
              <div className="w-full px-9 ">
                <h2 className="text-4xl font-semibold top-10 mb-12">Các điều kiện và thủ tục nhận con nuôi</h2>
              </div>
              <div>
              <div className="flex flex-wrap mb-24">
                <div className="w-64 text-justify mx-40">
                  <p>Với nhiều lý do và mục đích khác nhau, việc nhận con nuôi trong đời sống xã hội Việt Nam đã tồn tại 
                    từ lâu và dần trở nên phổ biến. Việc xác lập quan hệ nuôi con nuôi có thể được thực hiện theo những 
                    cách thức khá nhau, Tùy theo sự lựa chọn của cá nhân trong những điều kiện hoàn cảnh cụ thể. Tuy nhiên
                     có thể phân thành hai cách thức điển hình đó là xác lập quan hệ nuôi con nuôi về mặt xã hội và quan 
                     hệ nuôi con nuôi về mặt pháp lý. Để quan hệ nuôi con nuôi được đảm bảo bởi pháp luật thì người nhận 
                     con nuôi phải làm thủ tục đăng ký việc nuôi con nuôi với cơ quan nhà nước có thẩm quyền.</p>
                </div>
                <div className="mt-2 w-64 text-justify mx-40 mb-12">
                  <p className="text-xl font-bold">Điều kiện nhận nuôi con nuôi</p>
                  <p className="text-lg font-bold mt-1">Điều kiện đối với người nhận con nuôi</p>
                  <p>Cá nhân muốn nhận con nuôi thì phải đáp ứng đủ các điều kiện quy định tại khoản 1 Điều 14 Luật nuôi con nuôi năm 2010, cụ thể các điều kiện bao gồm:</p>
                  <ul className="list-decimal">
                    <li>Có năng lực hành vi dân sự đầy đủ;</li>
                    <li>Hơn con nuôi từ 20 tuổi trở lên;</li>
                    <li>Có điều kiện về sức khỏe, kinh tế, chỗ ở bảo đảm việc chăm sóc, nuôi dưỡng, giáo dục con nuôi;</li>
                    <li>Có tư các đạo đức tốt.</li>
                  </ul>
                  <p>Ngoài ra: Trường hợp cha dượng nhận con riêng của vơ, mẹ kế nhận con riêng của chồng làm con nuôi hoặc cô, cậu, dì, chú, bác ruột nhận cháu làm con nuôi thì không áp dụng hai điều kiện cuối;</p>
                  <p>Trường hợp người Việt Nam đinh cư ở nước ngoài nhận người Việt Nam làm con nuôi thì ngoài các điều 
                    kiện nêu trên, người đó còn phải đáp ứng các điều kiện theo quy định của pháp luật nước nơi người đó 
                    thường trú.</p>
                  <p>Bên cạnh đó, cá nhân thuộc một trong các trường hợp sau đây thì không được nhận con nuôi, bao gồm:</p>
                  <ul className="list-decimal">
                    <li>Đang bị hạn chế một số quyền của cha, mẹ đối với con chưa thành niên;</li>
                    <li>Đang bị cháp hành quyết định xử lý hành chính tại cơ sở giáo dục, cơ sở chữa bệnh;</li>
                    <li>Đang chấp hành hình phạt tù;</li>
                    <li>Chưa được xóa án tích về một trong các tội cố ý xâm phạm tính mạng, sức khỏe, nhân phẩm, danh dự của người 
                      khác; ngược đãi hoặc hành hạ ông bà, cha mẹ, vợ chồng, con, cháu, người có công nuôi dưỡng mình; dụ dỗ, ép buộc 
                      hoặc chứa chấp người chưa thanh niên vi phạm pháp luật; mua bán, đánh tráo, chiếm đoạt trẻ em.</li>
                  </ul>
                  <p className="text-lg font-bold">Điều kiện đối với người được nhận làm con nuôi</p>
                  <p>Theo quy định tại Điều 8 Luật nuôi con nuôi năm 2010 thì người được nhận làm con nuôi bao gồm:</p>
                    <ul className="list-decimal">
                      <li>Trẻ em dưới 16 tuổi;</li>
                      <li>Người từ đủ 16 tuổi đến dưới 18 tuổi nếu thuộc một trong các trường hợp: Được cha dượng, mẹ kế nhận làm con nuôi; Được cô, cậu, dì, chú, bác ruột nhận làm con nuôi.</li>
                    </ul>
                  <p className="text-xl font-bold mt-1">Thủ tục nhận con nuôi</p>
                  <p>Để đăng ký việc nuôi con nuôi thì cần thực hiện theo trình tự thủ tục như sau:</p>
                  <p className="text-lg font-bold">Bước 1: Nộp hồ sơ</p>
                  <p>Người nhận con nuôi phải nộp hồ sơ của mình và hồ sơ của người được giới thiệu làm con nuôi tại Uỷ ban nhân dân cấp xã nơi người được giới thiệu làm con nuôi thường trú hoặc nơi người nhận con nuôi thường trú.</p>

                  <p>Hồ sơ của người nhận con nuôi bao gồm:</p>
                  <ul className="list-decimal">
                    <li>Đơn xin nhận con nuôi;</li>
                    <li>Bản sao Hộ chiếu, Giấy chứng minh nhân dân hoặc giấy tờ có giá trị thay thế;</li>
                    <li>Phiếu lý lịch tư pháp;</li>
                    <li>Văn bản xác nhận tình trạng hôn nhân;</li>
                    <li>Giấy khám sức khỏe do cơ quan y tế cấp huyện trở lên cấp; van bản xác nhận hoàn cảnh gia đình, tình trạng chỗ ở, điều kiện kinh tế do ủy ban nhân dân cấp xã nơi người nhận con nuôi thường trú cấp.</li>
                  </ul>

                    <p>Hồ sơ của người được giới thiệu làm con nuôi trong nước bao gồm các giấy tờ sau đây:</p>
                  <ul className="list-decimal">
                    <li>Giấy khai sinh;</li>
                    <li>Giấy khám sức khỏe do cơ quan y tế cấp huyện trở lên cấp;</li>
                    <li>Hai ảnh toan thân, nhìn thẳng chụp không quá 06 tháng;</li>
                    <li>Biên bản xác nhận do Ủy ban nhân dân hoặc Công an cấp xã nơi phát hiện trẻ bị bỏ rơi lập đối với trẻ em bị bỏ rơi; Giấy chứng tử của cha đẻ, mẹ đẻ hoặc quyết định của Tòa án tuyên bố cha đẻ, mẹ đẻ của trẻ em là đã chết đối với trẻ em mồ côi; quyết định của Tòa án tuyên bố cha đẻ, mẹ đẻ của người được giới thiệu làm con nuôi mất tích đối với người được giới thiệu làm con nuôi mà cha đẻ, mẹ đẻ mất tích; quyết định của Tòa án tuyên bố cha đẻ, mẹ đẻ của người được giới thiệu làm con nuôi mất năng lực hành vi dân sự đối với người được giới thiệu làm con nuôi mà cha đẻ, mẹ để mất năng lực hành vi dân sự;</li>
                    <li>Quyết định tiếp nhận đối với trẻ em ở cơ sở nuôi dưỡng.</li>
                  </ul>
                <p className="font-semibold italic mb-2 mt-2">Lưu ý: Thời hạn giải quyết việc nuôi con nuôi là 30 ngày, kể từ ngày Uỷ ban nhân dân cấp xã nhận đủ hồ sơ hợp lệ.</p>
                <p className="text-lg font-bold">Bước 2: Kiểm tra hồ sơ, lấy ý kiến của những người có liên quan</p>
                <p>Ủy ban nhân dân cấp xã nơi nhận hồ sơ có trách nhiệm kiểm tra hồ sơ, trong thwoif hạn 10 ngày, kể từ ngày nhận đủ hồ sơ hợp lệ, tiến hành xong việc lấy ý kiến của những người quy định tại Điều 21 Luật Nuôi con nuôi năm 2010.</p>
                <p>Việc lấy ý kiến phải lập thành văn bản và có chữ ký hoặc điểm chỉ của người được lấy ý kiến.</p>
                <p className="text-lg font-bold">Bước 3: Đăng ký việc nuôi con nuôi</p>
                <p>Khi xét thấy người nhận con nuôi và người được giới thiệu làm con nuôi có đủ điều kiện theo quy định 
                  của Luật này thì Ủy ban nhân dân cấp xã tổ chức đăng ký nuôi con nuôi, trao Giấy chứng nhận nuôi con 
                  nuôi cho cha mẹ nuôi, cha mẹ đẻ hoặc người giám hộ hoặc đại diện cơ sở nuôi dưỡng, tổ chức giao nhận 
                  con nuôi và ghi vào sổ hộ tịch trong thời hạn 20 ngày, kể từ ngày có ý kiến đồng ý của những người quy 
                  định tại Điều 21 của Luật này.</p>
                <p>Trường hợp Ủy ban nhân dân cấp xã từ chối đăng ký thì phải trả lời bằng văn bản cho người nhận con 
                  nuôi, cha mẹ đẻ hoặc người giám hộ hoặc đại diện cơ sở nuôi dưỡng và nêu rõ lý do trong thời hạn 10 
                  ngày kể từ ngày có ý kiến của người liên quan.</p>
                <p>Giấy chứng nhận nuôi con được Ủy ban nhân dân cấp xã nơi thường trú của người nhận con nuôi hoặc của người được nhận làm con nuôi.</p>
                <p className="font-semibold italic mb-2 mt-2">Lưu ý: Kể từ ngày giao nhận con nuôi, giữa cha mẹ nuôi và 
                con nuôi có đầy đủ các quyền, nghĩa vụ của cha mẹ và con; giữa con nuôi và các thành viên khác của gia 
                đình cha mẹ nuôi cũng có các quyền, nghĩa vụ đối với nhau theo quy định của pháp luật về hôn nhân và gia 
                đình, pháp luật dân sự và các quy định khác của pháp luật có liên quan.</p>

                <p className="font-semibold italic mb-2 mt-2">Theo yêu cầu của cha mẹ nuôi, cơ quan nhà nước có thẩm quyền
                 quyết định việc thay đổi họ, tên của con, con từ đủ 09 tuổi trở lên phải được sự đồng ý của người đó.
                 Dân tộc của con nuôi là trẻ em bị bỏ rơi đươc xác định theo dân tộc của cha nuôi, mẹ nuôi.</p>

                <p className="font-semibold italic mb-2 mt-2">Trừ trường hợp giữa cha mẹ đẻ và cha mẹ nuôi có thỏa thuận khác, kể từ ngày giao nhận con nuôi, cha mẹ đẻ không còn quyền, nghĩa vụ chăm sóc, nuôi dưỡng, cấp dưỡng, đại diện theo pháp luật, bồi thường thiệt hại, quản lý, định đoạt tài sản riêng đối với con đã cho làm con nuôi.</p>
                <p className="font-semibold italic mb-2 mt-2 color text-red-500">Chú ý: Bạn hãy đọc kĩ thông tin để đăng ký 
                thủ tục nhận nuôi. Sau khi đăng ký thành công, bạn vui lòng chờ. Chúng tôi sẽ liên hệ qua số điện thoại của bạn. Cảm ơn !!</p>
              </div>
              </div>
        </div>
              </div>
            </div>
            
        </section>
      </main>
      <Footer />
       
    </>
  );
}
