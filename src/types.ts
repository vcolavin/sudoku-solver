interface FixedLengthArray<T extends any, L extends number> extends Array<T> {
  0: T;
  length: L;
}

export type Sudoku = FixedLengthArray<string, 81>;
