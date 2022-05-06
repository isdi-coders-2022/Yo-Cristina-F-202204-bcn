import localFishesReducer from "./localFishesReducer";

describe("Given a localFishesReducer", () => {
  const localFishes = [
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
        localFishes,
      };

      const expectedLocalAction = localFishesReducer(localFishes, givenAction);

      expect(localFishes).toEqual(expectedLocalAction);
    });
  });

  describe("When invoked receiving two fishes and no action", () => {
    test("Then it should return a copy of the given fishes", () => {
      const givenAction = {
        type: "",
        localFishes,
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
      const expectedLocalAction = localFishesReducer(localFishes, givenAction);

      expect(expectedFishes).toEqual(expectedLocalAction);
    });
  });
});
