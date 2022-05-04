import { screen, render } from "@testing-library/react";
import FishTankList from "./FishTankList";

describe("Given the Componant FishTankList", () => {
  describe("When given invoked with an array of Fishes", () => {
    test("Than it should return the fishes contained in the array", () => {
      const amountFishes = 2;
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
      render(<FishTankList fishes={givenFishes} />);
      const expectedFishContainers = screen.getAllByRole("heading");

      expect(expectedFishContainers.length).toBe(amountFishes);
    });
  });
});
