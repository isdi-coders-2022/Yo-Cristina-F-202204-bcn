import { useContext, useEffect } from "react";
import FishAquariumList from "../../components/FishAquariumList/FishAquariumList";
import useAPI from "../../hooks/useAPI";
import { aquariumPage } from "../../paths/pages";
import FishesDataContext from "../../store/context/FishesDataContext";

const FishAquariumListPage = () => {
  const { loadFishes, addToFishTank } = useAPI();
  const { fishes, setPage } = useContext(FishesDataContext);

  useEffect(() => {
    setPage(aquariumPage);
    loadFishes();
  }, [loadFishes, setPage]);

  const addFish = (fish) => {
    addToFishTank(fish);
    loadFishes();
  };

  return <FishAquariumList fishes={fishes} action={addFish} />;
};

export default FishAquariumListPage;
