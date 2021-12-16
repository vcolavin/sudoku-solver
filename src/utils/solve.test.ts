import {
  puzzle1,
  puzzle1solution,
  puzzle2,
  puzzle2solution,
  puzzle3,
  puzzle3Solution,
} from "./data";
import { solve } from "./solve";

describe("solver function", () => {
  it("returns an already solved puzzle", () => {
    expect(solve(puzzle1solution)).toEqual(puzzle1solution);
  });

  it("solves puzzle1", () => {
    expect(solve(puzzle1)).toEqual(puzzle1solution);
  });

  it("solves puzzle2", () => {
    expect(solve(puzzle2)).toEqual(puzzle2solution);
  });

  it("solves puzzle3", () => {
    expect(solve(puzzle3)).toEqual(puzzle3Solution);
  });
});
