
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// // import { AuthProvider } from "./context/AuthContext";
// import App from "./App";
// import "antd/dist/reset.css";


// ReactDOM.createRoot(document.getElementById("root")!).render(
// <BrowserRouter>
// {/* <AuthProvider> */}
// <App />
// {/* </AuthProvider> */}
// </BrowserRouter>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



