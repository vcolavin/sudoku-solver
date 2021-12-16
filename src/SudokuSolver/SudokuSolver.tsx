import { useState } from "react";

import { Sudoku } from "../types";
import { solve } from "../utils/solve";
import SolverForm from "../SolverForm/SolverForm";
import SudokuGrid from "../SudokuGrid/SudokuGrid";

const SudokuSolver = () => {
  const [currentPuzzle, setCurrentPuzzle] = useState<Sudoku>();
  const [solvedPuzzle, setSolvedPuzzle] = useState<Sudoku>();

  const handleSolve = () => {
    currentPuzzle && setSolvedPuzzle(solve(currentPuzzle));
  };

  return (
    <div>
      <SolverForm
        currentPuzzle={currentPuzzle}
        setCurrentPuzzle={setCurrentPuzzle}
        handleSubmit={handleSolve}
      />
      <SudokuGrid title="Current Puzzle" sudoku={currentPuzzle} />
      <SudokuGrid title="Solved puzzle" sudoku={solvedPuzzle} />
    </div>
  );
};

export default SudokuSolver;
