import "./SolverForm.css";
import { Sudoku } from "../types";
import { puzzle1, puzzle2, puzzle3 } from "../utils/data";

interface SolverFormProps {
  currentPuzzle?: Sudoku;
  setCurrentPuzzle: (sudoku: Sudoku) => void;
  handleSubmit: () => void;
}

function SolverForm({
  // currentPuzzle,
  setCurrentPuzzle,
  handleSubmit,
}: SolverFormProps) {
  return (
    <form>
      <button
        onClick={() => {
          setCurrentPuzzle(puzzle1);
        }}
      >
        input puzzle 1
      </button>
      <button
        onClick={() => {
          setCurrentPuzzle(puzzle2);
        }}
      >
        input puzzle 2
      </button>
      <button
        onClick={() => {
          setCurrentPuzzle(puzzle3);
        }}
      >
        input puzzle 3
      </button>
      {/* <input type="text" value={currentPuzzle.join(",")} onChange={() => {}} /> */}
      <input
        type="submit"
        value="solve!!"
        onClick={() => {
          handleSubmit();
        }}
      />
    </form>
  );
}

export default SolverForm;
