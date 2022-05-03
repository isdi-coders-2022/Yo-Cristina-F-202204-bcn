import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When invoked", () => {
    test("Then a ButtonComponent should be visible in the DOM", () => {
      render(<Button />);

      const theButton = screen.getByRole("button");

      expect(theButton).toBeInTheDocument();
    });
  });
});
