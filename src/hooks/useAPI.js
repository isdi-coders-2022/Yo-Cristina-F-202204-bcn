import { endpoint } from "../paths/endpoint";
import { useCallback } from "react";

const useAPI = () => {
  const urlAPI = process.env.REACT_APP_API_URL;

  const loadFishes = useCallback(async () => {
    const response = await fetch(`${urlAPI}${endpoint.fish}`);
    const data = await response.json();
    return data;
  }, [urlAPI]);

  return { loadFishes };
};

export default useAPI;
