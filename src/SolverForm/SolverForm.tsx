import "./SolverForm.css";
import { Sudoku } from "../types";
import { solve } from "../utils/solve";

function SolverForm() {
  return (
    <form>
      <label>
        input the sudoku thingie
        <input type="text"></input>
      </label>
      <input
        type="submit"
        onClick={() => {
          solve([] as any as Sudoku);
        }}
      />
    </form>
  );
}

export default SolverForm;
