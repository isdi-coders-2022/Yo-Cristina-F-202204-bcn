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
export const loadLocalFishesActionCreator = (localFishes) => ({
  type: loadLocalFishesActionType,
  localFishes,
});
export const addLocalFishesActionCreator = (localFishes) => ({
  type: addLocalFishesActionType,
  localFishes,
});
export const deleteLocalFishesActionCreator = (localFishes) => ({
  type: deleteLocalFishesActionType,
  localFishes,
});
export const modifyLocalFishesActionCreator = (localFishes) => ({
  type: modifyLocalFishesActionType,
  localFishes,
});
export const deleteLocalFishesActionCreator = (fishes) => ({
  type: deleteLocalFishesActionType,
  fishes,
});
export const modifyLocalFishesActionCreator = (fishes) => ({
  type: modifyLocalFishesActionType,
  fishes,
});
