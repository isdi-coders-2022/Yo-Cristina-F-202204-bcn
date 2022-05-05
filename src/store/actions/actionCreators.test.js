import {
  loadFishesActionCreator,
  loadLocalFishesActionCreator,
} from "./actionCreators";

describe("Given the ActionCreators loadFishes", () => {
  describe("When it receive a group of two fishes", () => {
    test("Then it should return an object with two properties: type and payload", () => {
      const fishes = [
        {
          id: 16,
          "file-name": "freshwater_goby",
        },
        {
          id: 17,
          "file-name": "loach",
        },
      ];

      const expectedAction = {
        type: "load-fishes",
        fishes,
      };

      const action = loadFishesActionCreator(fishes);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given the loadLocalFishesActionCreator function", () => {
  describe("When invoked with a group of two fishes", () => {
    test("Then it should return an object with the type property 'load-local-fishes'", () => {
      const fishes = [
        {
          id: 16,
          "file-name": "freshwater_goby",
        },
        {
          id: 17,
          "file-name": "loach",
        },
      ];

      const expectedAction = {
        type: "load-local-fishes",
        fishes,
      };
      const localActionResult = loadLocalFishesActionCreator(fishes);

      expect(localActionResult).toEqual(expectedAction);
    });
  });
});
