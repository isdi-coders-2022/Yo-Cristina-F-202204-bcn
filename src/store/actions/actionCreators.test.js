import {
  addLocalFishesActionCreator,
  loadFishesActionCreator,
  loadLocalFishesActionCreator,
  deleteLocalFishesActionCreator,
  modifyLocalFishesActionCreator,
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
describe("Given the addLocalFishesActionCreator function", () => {
  describe("When invoked with a group of 2 fishes", () => {
    test("Then it should return an object with the type of property 'add-local-fishes'", () => {
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

      const expectedLocalResult = {
        type: "add-local-fishes",
        fishes,
      };

      const localActionResult = addLocalFishesActionCreator(fishes);

      expect(localActionResult).toEqual(expectedLocalResult);
    });
  });
});
describe("Given the deleteLocalFishesActionCreator function", () => {
  describe("When invoked with a group of 2 fishes", () => {
    test("Then it should return an object with the type of property 'delete-local-fishes'", () => {
      const fishes = [
        {
          id: 3,
          "file-name": "boris_fish",
        },
        {
          id: 1,
          "file-name": "nacho_lil_fish",
        },
      ];
      const expectedLocalResult = {
        type: "delete-local-fishes",
        fishes,
      };
      const localActionResult = deleteLocalFishesActionCreator(fishes);

      expect(localActionResult).toEqual(expectedLocalResult);
    });
  });
});

describe("Given the modifyFishesActionCreator function", () => {
  describe("When invoked with a group of 3 fishes", () => {
    test("Then it should return an object with the type of property 'modify-local-fishes'", () => {
      const fishes = [
        {
          id: 3,
          "file-name": "boris_fish",
        },
        {
          id: 2,
          "file-name": "Mariam_fish",
        },
        {
          id: 1,
          "file-name": "nacho_lil_fish",
        },
      ];
      const expectedLocalResult = {
        type: "modify-local-fishes",
        fishes,
      };
      const localActionResult = modifyLocalFishesActionCreator(fishes);

      expect(localActionResult).toEqual(expectedLocalResult);
    });
  });
});
