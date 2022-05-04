import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given the App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a Header", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const headerResult = screen.getByRole("list");

      expect(headerResult).toBeInTheDocument();
    });
  });
});
