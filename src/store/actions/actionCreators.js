import { loadFishesActionType, loadLocalFishesActionType } from "./actionTypes";

export const loadFishesActionCreator = (fishes) => ({
  type: loadFishesActionType,
  fishes,
});
export const loadLocalFishesActionCreator = (fishes) => ({
  type: loadLocalFishesActionType,
  fishes,
});
