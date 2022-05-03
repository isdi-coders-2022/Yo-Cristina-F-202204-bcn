import { useReducer } from "react";
import fishesReducer from "../reducers/FishesReducer";
import FishesDataContext from "./FishesDataContext";

const FishesDataProvider = ({ children }) => {
  const [fishes, dispatchFishes] = useReducer(fishesReducer);

  return (
    <FishesDataContext.Provider values={(fishes, dispatchFishes)}>
      {children}
    </FishesDataContext.Provider>
  );
};

export default FishesDataProvider;
