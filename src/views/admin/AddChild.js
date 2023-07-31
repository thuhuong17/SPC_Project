import React from "react";

// components

//import CardSettings from "components/Cards/CardSettings.js";
//import CardProfile from "components/Cards/CardProfile.js";
//import CardAddChild from "components/Cards/CardAddChild";
// import CardViewChild from "components/Cards/CardViewChild";
import CardAddChild from "components/Cards/CardAddChild";
// import { CardAddChild } from "components/Cards/CardAddChild";

export default function AddChild() {
  return (
    <>
    
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          {/* <CardSettings /> */}
          <CardAddChild />
        </div>
      </div>
    </>
  );
}
