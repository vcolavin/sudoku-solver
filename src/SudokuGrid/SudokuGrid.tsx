import { Sudoku } from "../SolverForm/solve";

interface SudokuGridProps {
  sudoku: Sudoku;
}
const SudokuGrid = ({ sudoku }: SudokuGridProps) => {
  return (
    <ul className="sudoku-grid">
      {sudoku.map((cell, i) => (
        <li key={i}>{cell}</li>
      ))}
    </ul>
  );
};

export default SudokuGrid;
