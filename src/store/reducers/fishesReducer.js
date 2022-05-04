import actionsTypes from "../actions/actionTypes";

const fishesReducer = (actualFishes, action) => {
  let newFishes;

  switch (action.types) {
    case actionsTypes.loadFishes:
      newFishes = [...action.fishes];
      break;

    default:
      newFishes = [...actualFishes];
      break;
  }

  return newFishes;
};

export default fishesReducer;
