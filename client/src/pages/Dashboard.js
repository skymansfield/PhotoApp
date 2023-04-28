import React from "react";
import Jumbutron from "../components/Jumbutron";
import SearchField from "../components/SearchField";
import Images from "../components/Images";

const Dashboard = () => {
  return (
    <>
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </>
  );
};

export default Dashboard;
