import localFishesReducer from "./localFishesReducer";
import { loadFishesActionCreator } from "../actions/actionCreators";

describe("Given a localFishesReducer", () => {
  const fishes = [
    {
      id: 1,
      "file-name": "boris_fish",
    },
    {
      id: 7,
      "file-name": "nacho_lil_fish",
    },
  ];
  describe("When invoked receiving two fishes an action with the type property 'load-local-fishes", () => {
    test("Then it should return a copy of the given fishes", () => {
      const givenAction = {
        type: "load-local-fishes",
        fishes,
      };

      const expectedLocalAction = localFishesReducer(fishes, givenAction);

      expect(fishes).toEqual(expectedLocalAction);
    });
  });

  describe("When invoked receiving two fishes and no action", () => {
    test("Then it should return a copy of the given fishes", () => {
      const givenAction = {
        type: "",
        fishes,
      };
      const expectedFishes = [
        {
          id: 1,
          "file-name": "boris_fish",
        },
        {
          id: 7,
          "file-name": "nacho_lil_fish",
        },
      ];
      const expectedLocalAction = localFishesReducer(fishes, givenAction);

      expect(expectedFishes).toEqual(expectedLocalAction);
    });
  });
});
