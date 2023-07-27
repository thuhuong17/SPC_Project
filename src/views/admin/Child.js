import React from "react";

// components

//import CardSettings from "components/Cards/CardSettings.js";
//import CardProfile from "components/Cards/CardProfile.js";
//import CardAddChild from "components/Cards/CardAddChild";
import CardViewChild from "components/Cards/CardViewChild";
// import { CardAddChild } from "components/Cards/CardAddChild";

export default function Child() {
  return (
    <>
    
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          {/* <CardSettings /> */}
          <CardViewChild />
        </div>
      </div>
    </>
  );
}
