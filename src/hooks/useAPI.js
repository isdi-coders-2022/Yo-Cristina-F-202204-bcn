import { endpoint } from "../paths/endpoint";
import { useCallback, useContext } from "react";
import FishesDataContext from "../store/context/FishesDataContext";
import { loadFishesActionCreator } from "../store/actions/actionCreators";

const useAPI = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const { dispatch } = useContext(FishesDataContext);

  const loadFishes = useCallback(async () => {
    const response = await fetch(`${urlAPI}${endpoint.fish}`);
    const dataFishes = await response.json();
    dispatch(loadFishesActionCreator(dataFishes));
    return dataFishes;
  }, [urlAPI, dispatch]);

  return { loadFishes };
};

export default useAPI;
