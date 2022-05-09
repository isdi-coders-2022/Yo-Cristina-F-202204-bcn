import Fish from "./Fish";
import { getByText, render, screen } from "@testing-library/react";
import FishesDataProvider from "../../store/context/FishesDataProvider";
import TestRenderer from "react-test-renderer";
import FishesDataContext from "../../store/context/FishesDataContext";
import { aquariumPage, fishTankPage } from "../../paths/pages";
import { Children } from "react";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a Fish component.", () => {
  const fish = {
    id: 16,
    "file-name": "freshwater_goby",
    name: {
      "name-EUen": "freshwater goby",
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "4pm - 9am",
      isAllDay: false,
      isAllYear: true,
      location: "River",
      rarity: "Common",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    shadow: "Small (2)",
    icon_uri: "https://acnhapi.com/v1/icons/fish/16",
  };

  describe("When invoked with a fish whose name is 'freshwater goby'", () => {
    test("Then it should render a heading with 'Freshwater goby on it'", () => {
      const expectedName = "Freshwater goby";

      render(
        <FishesDataProvider>
          <Fish fish={fish} />
        </FishesDataProvider>
      );
      const expectedHeading = screen.getByRole("heading").textContent;

      expect(expectedHeading).toEqual(expectedName);
    });
  });

  describe("When it's invoked with a fish whose name is 'freshwater goby' at aquarium page", () => {
    test("Then it should render button", async () => {
      const page = aquariumPage;

      render(
        <FishesDataContext.Provider
          value={{
            page,
          }}
        >
          <Fish fish={fish} />
        </FishesDataContext.Provider>
      );

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it's invoked with a fish whose name is 'freshwater goby' at fishtank page", () => {
    test("Then it should render button", async () => {
      const page = fishTankPage;

      render(
        <FishesDataContext.Provider
          value={{
            page,
          }}
        >
          <Fish fish={fish} />
        </FishesDataContext.Provider>
      );

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
