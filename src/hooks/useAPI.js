import { endpoint } from "../paths/endpoint";
import { useCallback } from "react";

const useAPI = () => {
  const urlAPI = process.env.REACT_APP_API_URL;

  const loadFishes = useCallback(async () => {
    const response = await fetch(`${urlAPI}${endpoint.fish}`);
    return await response.json();
  }, [urlAPI]);

  return { loadFishes };
};

export default useAPI;
