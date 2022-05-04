import { render, screen } from "@testing-library/react";
import FishAquariumList from "./FishAquariumList";

describe("Given a FishAquariumList component", () => {
  describe("When its invoked and receives a an array with 2 fishes", () => {
    test("Then it should render 2 Fish components with a heading", () => {
      const givenFishes = [
        {
          id: 1,
          "file-name": "bitterling",
          name: {
            "name-EUen": "bitterling",
          },
          availability: {
            "month-northern": "11-3",
            "month-southern": "5-9",
            time: "",
            isAllDay: true,
            isAllYear: false,
            location: "River",
            rarity: "Common",
            "month-array-northern": [],
            "month-array-southern": [],
            "time-array": [],
          },
          shadow: "Smallest (1)",
          price: 900,
          "price-cj": 1350,
          image_uri: "https://acnhapi.com/v1/images/fish/1",
          icon_uri: "https://acnhapi.com/v1/icons/fish/1",
        },
        {
          id: 2,
          "file-name": "bitterling",
          name: {
            "name-EUen": "bitterling",
          },
          availability: {
            "month-northern": "11-3",
            "month-southern": "5-9",
            time: "",
            isAllDay: true,
            isAllYear: false,
            location: "River",
            rarity: "Common",
            "month-array-northern": [],
            "month-array-southern": [],
            "time-array": [],
          },
          shadow: "Smallest (1)",
          price: 900,
          "price-cj": 1350,
          image_uri: "https://acnhapi.com/v1/images/fish/1",
          icon_uri: "https://acnhapi.com/v1/icons/fish/1",
        },
      ];

      render(<FishAquariumList fishes={givenFishes} />);
      const expectedFishContainers = screen.getAllByRole("heading");

      expect(expectedFishContainers.length).toBe(2);
    });
  });
});
