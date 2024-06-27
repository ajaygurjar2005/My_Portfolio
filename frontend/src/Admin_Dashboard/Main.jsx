import React, { useEffect, useState } from "react";
import Admin_Header from "./Admin_Header";
import Sidebar from "./Sidebar";
import axios from "axios";
import MainContent from "./MainContent";

const Main = () => {
  const [storeUsers, setStoreUsers] = useState([]);
  useEffect(() => {
    const response = axios
      .get("http://localhost:8000/getuser")
      .then((succes) => {
        console.log(succes.data.data);
        setStoreUsers(succes.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(storeUsers.length, "lenth");
  return (
    <div>
      <div
        x-data="{ sidebarOpen: false }"
        className="flex h-screen bg-gray-200">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Admin_Header />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Main;
