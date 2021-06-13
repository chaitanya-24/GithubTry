import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// let App = function () {
//   let item = React.createElement("img", {
//     src: "https://i.pinimg.com/originals/a8/e5/a0/a8e5a0e32a340b875c5264e8211ec41d.jpg",
//     height : "300px",
//     width : "300px",
//   });
//   return item;

// return (
//   <img
//     src = "https://i.pinimg.com/originals/a8/e5/a0/a8e5a0e32a340b875c5264e8211ec41d.jpg"
//     height = "300px"
//     width ="300px"
//   />
// );
// };

let root = document.getElementById("root");

ReactDOM.render(<App />, root);
