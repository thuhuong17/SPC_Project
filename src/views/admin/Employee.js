import React from "react";

// components

// import CardSettings from "components/Cards/CardSettings.js";
// import CardProfile from "components/Cards/CardProfile.js";
import CardTableEmployee from "../../components/Cards/CardTableEmployee";
export default function Employee() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardTableEmployee />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          
        </div>
      </div>
    </>
  );
}
