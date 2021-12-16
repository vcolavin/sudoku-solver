import { Sudoku } from "../types";
import "./SudokuGrid.css";

interface SudokuGridProps {
  sudoku?: Sudoku;
  title?: string;
}
const SudokuGrid = ({ sudoku, title }: SudokuGridProps) => {
  return (
    <div className="sudoku-grid-container">
      {title && <h2 className="sudoku-grid-title">{title}</h2>}
      {sudoku ? (
        <ul className="sudoku-grid">
          {sudoku.map((cell, i) => (
            <li className="sudoku-grid-cell" key={i}>
              {cell === "x" ? " " : cell}
            </li>
          ))}
        </ul>
      ) : (
        <span>no sudoku to display :(</span>
      )}
    </div>
  );
};

export default SudokuGrid;
