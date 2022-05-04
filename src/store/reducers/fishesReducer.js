import { loadFishesActionType } from "../actions/actionTypes";

const fishesReducer = (actualFishes, action) => {
  let newFishes;


  switch (action.type) {
    case loadFishesActionType:
      newFishes = [...action.fishes];
      break;

    default:
      newFishes = [...actualFishes];
      break;
  }

  return newFishes;
};

export default fishesReducer;
