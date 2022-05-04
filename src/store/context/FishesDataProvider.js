import { useReducer } from "react";
import fishesReducer from "../reducers/fishesReducer";
import FishesDataContext from "./FishesDataContext";

const FishesDataProvider = ({ children }) => {
  const [fishes, dispatch] = useReducer(fishesReducer, []);

  return (
    <FishesDataContext.Provider value={{ fishes, dispatch }}>
      {children}
    </FishesDataContext.Provider>
  );
};

export default FishesDataProvider;
