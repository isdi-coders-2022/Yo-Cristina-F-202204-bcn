import { useReducer } from "react";
import fishesReducer from "../reducers/fishesReducer";
import localFishesReducer from "../reducers/localFishesReducer";
import FishesDataContext from "./FishesDataContext";

const FishesDataProvider = ({ children }) => {
  const [fishes, dispatch] = useReducer(fishesReducer, []);
  const [localFishes, localDispatch] = useReducer(localFishesReducer, []);

  return (
    <FishesDataContext.Provider
      value={{ fishes, dispatch, localFishes, localDispatch }}
    >
      {children}
    </FishesDataContext.Provider>
  );
};

export default FishesDataProvider;
