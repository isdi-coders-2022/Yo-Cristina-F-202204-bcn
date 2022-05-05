import { endpoint } from "../paths/endpoint";
import { useCallback, useContext } from "react";
import FishesDataContext from "../store/context/FishesDataContext";
import {
  loadFishesActionCreator,
  loadLocalFishesActionCreator,
} from "../store/actions/actionCreators";

const useAPI = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const localUrlAPI = process.env.REACT_APP_LOCAL_API_URL;
  const { dispatch, localDispatch } = useContext(FishesDataContext);

  const loadFishes = useCallback(async () => {
    const response = await fetch(`${urlAPI}${endpoint.fish}`);
    const dataFishes = await response.json();
    dispatch(loadFishesActionCreator(dataFishes));
    return dataFishes;
  }, [urlAPI, dispatch]);

  const loadLocalFishes = useCallback(async () => {
    const response = await fetch(`${localUrlAPI}${endpoint.fish}`);
    const dataFishes = await response.json();
    localDispatch(loadLocalFishesActionCreator(dataFishes));
    return dataFishes;
  }, [localDispatch, localUrlAPI]);

  return { loadFishes, loadLocalFishes };
};

export default useAPI;
