import actionTypes from "./actionTypes";

export const loadFishes = (fishes) => ({
  type: actionTypes.loadFishes,
  fishes,
});
