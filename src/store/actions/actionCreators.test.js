import { loadFishesActionCreator } from "./actionCreators";

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
