import { render, screen } from "@testing-library/react";
import SolverForm from "./SolverForm";

test("renders learn react link", () => {
  render(<SolverForm />);
  const solverForm = screen.getByText(/learn react/i);
  expect(solverForm).toBeInTheDocument();
});
