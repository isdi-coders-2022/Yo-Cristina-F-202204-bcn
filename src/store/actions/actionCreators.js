import { loadFishesActionType } from "./actionTypes";

export const loadFishesActionCreator = (fishes) => ({
  type: loadFishesActionType,
  fishes,
});
