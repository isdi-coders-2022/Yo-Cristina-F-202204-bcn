import { render, screen } from "@testing-library/react";
import FishesDataProvider from "../../store/context/FishesDataProvider";
import FishAquariumList from "./FishAquariumList";

describe("Given a FishAquariumList component", () => {
  describe("When its invoked and receives a an array with 2 fishes", () => {
    test("Then it should render 2 Fish components with a heading", () => {
      render(
        <FishesDataProvider>
          <FishAquariumList />
        </FishesDataProvider>
      );
      const expectedFishContainers = screen.getAllByRole("list");

      expect(expectedFishContainers.length).toBe(1);
    });
  });
});
