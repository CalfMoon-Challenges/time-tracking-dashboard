import React from "react";
import ReactDOM from "react-dom/client";
import UserCard from "./UserCard";
import MainBody from "./MainBody";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserCard />
    <MainBody />
  </React.StrictMode>,
);
