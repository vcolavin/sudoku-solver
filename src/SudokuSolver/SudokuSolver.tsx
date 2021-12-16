import { useState } from "react";

import { Sudoku } from "../types";
import SolverForm from "../SolverForm/SolverForm";
import SudokuGrid from "../SudokuGrid/SudokuGrid";

const SudokuSolver = () => {
  const [initialSudoku, setInitialSudoku] = useState<Sudoku>();
  const [solvedSudoku, setSolvedSudoku] = useState<Sudoku>();

  return (
    <div>
      <SolverForm />
      <SudokuGrid sudoku={initialSudoku} />
      <SudokuGrid sudoku={solvedSudoku} />
    </div>
  );
};

export default SudokuSolver;
