import "./SolverForm.css";
import { Sudoku } from "../types";
import { puzzle1, puzzle2, puzzle3 } from "../utils/data";

interface SolverFormProps {
  setCurrentPuzzle: (sudoku: Sudoku) => void;
  handleSubmit: () => void;
}

function SolverForm({ setCurrentPuzzle, handleSubmit }: SolverFormProps) {
  return (
    <form className="solver-form">
      <button
        className="solver-form-set-puzzle-button"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPuzzle(puzzle1);
        }}
      >
        puzzle 1
      </button>
      <button
        className="solver-form-set-puzzle-button"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPuzzle(puzzle2);
        }}
      >
        puzzle 2
      </button>
      <button
        className="solver-form-set-puzzle-button"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPuzzle(puzzle3);
        }}
      >
        puzzle 3
      </button>
      <input
        className="solver-form-submit"
        type="submit"
        value="solve!!"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </form>
  );
}

export default SolverForm;
