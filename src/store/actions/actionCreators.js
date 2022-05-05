import {
  addLocalFishesActionType,
  loadFishesActionType,
  loadLocalFishesActionType,
  deleteLocalFishesActionType,
  modifyLocalFishesActionType,
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
export const deleteLocalFishesActionCreator = (fishes) => ({
  type: deleteLocalFishesActionType,
  fishes,
});
export const modifyLocalFishesActionCreator = (fishes) => ({
  type: modifyLocalFishesActionType,
  fishes,
});
