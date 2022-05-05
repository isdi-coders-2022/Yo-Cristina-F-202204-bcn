import { useContext, useEffect } from "react";
import FishAquariumList from "../../components/FishAquariumList/FishAquariumList";
import useAPI from "../../hooks/useAPI";
import FishesDataContext from "../../store/context/FishesDataContext";

const FishAquariumListPage = () => {
  const { loadFishes } = useAPI();
  const { fishes } = useContext(FishesDataContext);

  useEffect(() => {
    loadFishes();
  }, [loadFishes]);

  return <FishAquariumList fishes={fishes} />;
};

export default FishAquariumListPage;
