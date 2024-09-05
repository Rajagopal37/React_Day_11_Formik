import React from "react";
import BookManagement from "./BookManagement";
import AuthorManagement from "./AuthorManagement";

const Dashboard = () => (
  <div className="container mt-4">
    <h1>Library Management Dashboard</h1>
    <BookManagement />
    <AuthorManagement />
  </div>
);

export default Dashboard;
