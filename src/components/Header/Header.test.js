import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Given an AquariumHeader component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a list", () => {
      render(<Header />);

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });
  });
});
