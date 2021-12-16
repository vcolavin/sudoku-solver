import { useState } from "react";

import { Sudoku } from "../types";
import { solve } from "../utils/solve";
import SolverForm from "../SolverForm/SolverForm";
import SudokuGrid from "../SudokuGrid/SudokuGrid";

import "./SudokuSolver.css";

const SudokuSolver = () => {
  const [currentPuzzle, setCurrentPuzzle] = useState<Sudoku>();
  const [solvedPuzzle, setSolvedPuzzle] = useState<Sudoku>();

  const handleSolve = () => {
    currentPuzzle && setSolvedPuzzle(solve(currentPuzzle));
  };

  return (
    <div className="sudoku-solver-container">
      <div className="sudoku-solver">
        <h1>Cool Sudoku Solver</h1>
        <SolverForm
          setCurrentPuzzle={setCurrentPuzzle}
          handleSubmit={handleSolve}
        />
        <SudokuGrid title="Current Puzzle" sudoku={currentPuzzle} />
        <SudokuGrid title="Solved Puzzle" sudoku={solvedPuzzle} />
      </div>
    </div>
  );
};

export default SudokuSolver;
