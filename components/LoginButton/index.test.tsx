import { render, screen } from "@testing-library/react";

import LoginButton from "../LoginButton";

jest.mock("@auth0/nextjs-auth0", () => ({
  useUser: jest.fn().mockImplementation(() => ({
    user: undefined,
  })),
}));

describe("LoginButton", () => {
  it("renders a login button", () => {
    render(<LoginButton />);
    expect(screen.getByText("Login")).toBeTruthy();
  });
});
