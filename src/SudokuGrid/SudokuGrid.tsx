import { Sudoku } from "../types";

interface SudokuGridProps {
  sudoku?: Sudoku;
}
const SudokuGrid = ({ sudoku }: SudokuGridProps) => {
  if (!sudoku) {
    return <span>no sudoku provided!</span>;
  }

  return (
    <ul className="sudoku-grid">
      {sudoku.map((cell, i) => (
        <li className="sudoku-grid-cell" key={i}>
          {cell}
        </li>
      ))}
    </ul>
  );
};

export default SudokuGrid;
