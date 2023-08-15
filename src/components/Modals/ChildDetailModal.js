export const ChildDetailModal = ({ onClose, child }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") onClose();
      }}
      style={{ zIndex: "100", paddingTop: "15px" }}
    >
      <div
        className="modal max-w-580-px p-4"
        style={{
          height: "700px",
          width: "auto",
          maxWidth: "1024px",
          padding: "1rem",
        }}
      >
        <h1 className="font-semibold text-xl text-center ">Thông tin trẻ</h1>
        <br />
        <div className="block w-full overflow-x-auto">
          <div className="table-wrapper">
            <div className="detal-wr-img">
              <img src={child.image.imageUrl} />
            </div>
            <br />
            <div className="dt-war">
              <div className="child-det-wr">
                <div className="detal-wrapper font-semibold">
                  <div>Thông tin chi tiết trẻ: </div>
                </div>
                <div className="detal-wrapper">
                  <div className="proper">Họ và tên </div>
                  <div className="value">{child.fullName}</div>
                </div>
                <div className="detal-wrapper">
                  <div className="proper">Giới tính </div>
                  <div className="value">{child.gender}</div>
                </div>
                <div className="detal-wrapper">
                  <div className="proper">Ngày sinh </div>
                  <div className="value">{child.birthDay}</div>
                </div>
                <div className="detal-wrapper">
                  <div className="proper">Địa chỉ thường trú</div>
                  <div className="value">{child?.addressPermanent}</div>
                </div>
                <div className="detal-wrapper">
                  <div className="proper">Địa chỉ tạm trú</div>
                  <div className="value">{child?.addressTemporary}</div>
                </div>
                <div className="detal-wrapper">
                  <div className="proper">Loại mồ côi: </div>
                  <div className="value">
                    {child?.typeOfOrphan.orphanTypeName}
                  </div>
                </div>
                <div className="detal-wrapper">
                  <div className="proper">Trạng thái: </div>
                  <div className="value">{child?.childrenStatus.status}</div>
                </div>
                <div className="detal-wrapper">
                  <div className="proper">Ngày tiếp nhận: </div>
                  <div className="value">{child?.dateIn}</div>
                </div>
                <div className="detal-wrapper">
                  <div className="proper">Nhân viên quản lý: </div>
                  <div className="value">{child?.employee?.fullName}</div>
                </div>
              </div>

              {child.guardian && (
                <div className="wr-guardian">
                  <div className="detal-wrapper font-semibold">
                    <div>Thông tin người giám hộ: </div>
                  </div>
                  <div className="detal-wrapper">
                    <div className="proper">Họ và tên: </div>
                    <div className="value">{child.guardian.fullName}</div>
                  </div>
                  <div className="detal-wrapper">
                    <div className="proper">Giới tính </div>
                    <div className="value">{child.guardian.gender}</div>
                  </div>
                  <div className="detal-wrapper">
                    <div className="proper">Ngày sinh </div>
                    <div className="value">{child.guardian.birthDay}</div>
                  </div>
                  <div className="detal-wrapper">
                    <div className="proper">Quan hệ với trẻ</div>
                    <div className="value">
                      {child.guardian?.relationshipType}
                    </div>
                  </div>
                  <div className="detal-wrapper">
                    <div className="proper">Địa chỉ thường trú</div>
                    <div className="value">
                      {child.guardian?.addressPermanent}
                    </div>
                  </div>
                  <div className="detal-wrapper">
                    <div className="proper">Số điện thoại</div>
                    <div className="value">{child.guardian?.phoneNumber}</div>
                  </div>
                  <div className="detal-wrapper">
                    <div className="proper">Địa chỉ email</div>
                    <div className="value">{child.guardian?.email}</div>
                  </div>
                </div>
              )}
            </div>
            {child.citizenId && (
              <div className="wr-cccd mt-4">
                <div className="detal-wrapper font-semibold">
                  <div>Thông tin CCCD: </div>
                </div>
                <div className="detal-wrapper">
                  <div className="proper">Số CCCD: </div>
                  <div className="value">
                    {child?.citizenId?.citizenIdentNumber}
                  </div>
                </div>
                <div className="detal-wrapper">
                  <div className="proper">Ngày cấp: </div>
                  <div className="value">{child?.citizenId?.issueDate}</div>
                </div>
                <div className="detal-wrapper">
                  <div className="proper">Nơi cấp: </div>
                  <div className="value">{child?.citizenId?.issuePlace}</div>
                </div>
              </div>
            )}
            {child.circumstance && (
              <div className="mt-4">
                <div className="detal-wrapper font-semibold">
                  <div>Hoàn cảnh: </div>
                </div>
                <div
                  id="textmt"
                  dangerouslySetInnerHTML={{
                    __html: child.circumstance,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
