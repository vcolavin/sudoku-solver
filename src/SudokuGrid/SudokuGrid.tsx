import { Sudoku } from "../types";

interface SudokuGridProps {
  sudoku?: Sudoku;
  title?: string;
}
const SudokuGrid = ({ sudoku, title }: SudokuGridProps) => {
  return (
    <div className="sudoku-grid-container">
      {title && <h2 className="sudoku-grid-title">{title}</h2>}
      {sudoku && (
        <ul className="sudoku-grid">
          {sudoku.map((cell, i) => (
            <li className="sudoku-grid-cell" key={i}>
              {cell === "x" ? " " : cell}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SudokuGrid;
