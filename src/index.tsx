import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SudokuSolver from "./SudokuSolver/SudokuSolver";

ReactDOM.render(
  <React.StrictMode>
    <SudokuSolver />
  </React.StrictMode>,
  document.getElementById("root")
);
