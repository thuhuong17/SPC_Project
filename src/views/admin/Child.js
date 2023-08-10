import React, { useEffect } from "react";

import { useState } from "react";
import { ChildModal } from "components/Modals/ChildModals";
import "../../assets/styles/tableAccountCard.css";
import CardTableChild from "components/Cards/CardTableChild";
export default function Child() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isAddChild, setIsAddChild] = useState(false);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <div className="tableStyle">
            <CardTableChild isAddChild={isAddChild} />
            <button className="btn" onClick={() => setModalOpen(true)}>
              Thêm
            </button>
            {modalOpen && (
              <ChildModal
                closeModal={() => {
                  setModalOpen(false);
                }}
                onSubmit={() => {
                  setIsAddChild(!isAddChild);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
