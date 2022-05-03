import actionsTypes from "./actionTypes";

export const loadFishes = (fishes) => ({
  type: actionsTypes.loadFishes,
  fishes,
});
