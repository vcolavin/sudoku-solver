import { Sudoku } from "../types";
import { sudokuIsSolved } from "./sudokuIsSolved";

export const solve = (inputSudoku: Sudoku): Sudoku => {
  if (sudokuIsSolved(inputSudoku)) {
    return inputSudoku;
  }

  // TODO: Solve sudoku and return it
  return [] as any;
};
