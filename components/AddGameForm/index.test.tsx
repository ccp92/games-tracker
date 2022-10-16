import { render, screen } from "@testing-library/react";
import AddGameForm from "../AddGameForm";

describe("AddGameForm", () => {
  it("renders the form elements", () => {
    render(<AddGameForm />);
    screen.getByLabelText("Game Name");
    screen.getByLabelText("Console");
    screen.getByLabelText("Completion Status");
    screen.getByRole("button", { name: "Add Game" });
  });
});
