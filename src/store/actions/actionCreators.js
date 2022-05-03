import actionsTypes from "./ActionTypes";

export const loadFishes = (fishes) => ({
  type: actionsTypes.loadFishes,
  fishes,
});
