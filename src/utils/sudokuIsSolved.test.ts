import { puzzle1, invalidSudoku, puzzle1solution } from "./data";
import { sudokuIsSolved } from "./sudokuIsSolved";

describe("sudokuIsSolved", () => {
  it("can tell if a sudoku is solved", () => {
    expect(sudokuIsSolved(puzzle1solution)).toBeTruthy();
  });

  it("returns false for an invalid solution", () => {
    expect(sudokuIsSolved(invalidSudoku)).toBeFalsy();
  });

  it("returns false for incomplete sudoku", () => {
    expect(sudokuIsSolved(puzzle1)).toBeFalsy();
  });
});
