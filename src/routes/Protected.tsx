import React from "react";
import { Navigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

interface ProtectedProps {
  role: "USER" | "RECRUITER" | "ADMIN";
  children: JSX.Element;
}

const Protected: React.FC<ProtectedProps> = ({ role, children }) => {
  const userRole = localStorage.getItem("role"); // USER / RECRUITER / ADMIN

  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;