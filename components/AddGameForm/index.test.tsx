import { render, screen } from "@testing-library/react";
import AddGame from "../../pages/games/add";

describe("AddGameForm", () => {
  xit("renders the header", () => {
    render(<AddGame />);
    screen.getByRole("heading", { name: "Add Game" });
  });

  xit("renders the form elements", () => {
    render(<AddGame />);
    screen.getByLabelText("Game Name");
    screen.getByLabelText("Console");
    screen.getByLabelText("Completion Status");
    screen.getByRole("button", { name: "Add Game" });
  });
});
