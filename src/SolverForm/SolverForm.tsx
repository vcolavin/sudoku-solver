import "./SolverForm.css";
import { solve } from "./solve";

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
          solve([]);
        }}
      />
    </form>
  );
}

export default SolverForm;
