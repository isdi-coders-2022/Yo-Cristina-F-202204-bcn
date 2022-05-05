import {
  addLocalFishesActionType,
  loadFishesActionType,
  loadLocalFishesActionType,
} from "./actionTypes";

export const loadFishesActionCreator = (fishes) => ({
  type: loadFishesActionType,
  fishes,
});
export const loadLocalFishesActionCreator = (fishes) => ({
  type: loadLocalFishesActionType,
  fishes,
});
export const addLocalFishesActionCreator = (fishes) => ({
  type: addLocalFishesActionType,
  fishes,
});
