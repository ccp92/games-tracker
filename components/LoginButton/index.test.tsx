import { render, screen } from "@testing-library/react";


import LoginButton from "../LoginButton";

describe("LoginButton", () => {
  it("renders a login button", () => {
    render(<LoginButton />);
    expect(screen.getByText("Login")).toBeTruthy();
  });
});
