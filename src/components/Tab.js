import React, { useState } from "react";
import "./Tab.css";
import cards from "../data/data.json";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div class="wrapper">
        {/* <div class="title">CSS Tabs Filtering</div> */}
        <div class="tabs_wrap">
          <ul>
            <li data-tabs="male" class="active">
              New York
            </li>
            <li data-tabs="female">Mumbai</li>
            <li data-tabs="both">Paris</li>
            <li data-tabs="both">London</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tab;
