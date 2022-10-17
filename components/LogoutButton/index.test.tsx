import { render, screen } from "@testing-library/react";
import { useUser } from "@auth0/nextjs-auth0";

import LogoutButton from "../LogoutButton";

jest.mock("@auth0/nextjs-auth0", () => ({
  useUser: jest.fn().mockImplementation(() => ({
    user: {
      name: "Test User",
    },
  })),
}));

describe("LogoutButton", () => {
  it("renders a logout button", () => {
    render(<LogoutButton />);
    expect(screen.getByText("Logout")).toBeTruthy();
  });
});
