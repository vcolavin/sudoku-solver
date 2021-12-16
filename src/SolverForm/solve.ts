interface FixedLengthArray<T extends any, L extends number> extends Array<T> {
  0: T;
  length: L;
}

export type Sudoku = FixedLengthArray<string, 81>;

export const sudokuIsValid = (sudoku: Sudoku): boolean => {
  return true;
};

export const solve = (inputString: Sudoku): Sudoku => {
  if (sudokuIsValid(inputString)) {
    // TODO: solve the sudoku
  }

  throw ":( the sudoku wasn't valid";
};
