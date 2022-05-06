import { loadLocalFishesActionType } from "../actions/actionTypes";

const localFishesReducer = (localFishes, action) => {
  let newLocalFishes;

  if (action.type === loadLocalFishesActionType) {
    newLocalFishes = [...action.localFishes];
    return newLocalFishes;
  }
  newLocalFishes = [...localFishes];
  return newLocalFishes;
};

export default localFishesReducer;
