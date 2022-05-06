import { useContext, useEffect } from "react";
import FishAquariumList from "../../components/FishAquariumList/FishAquariumList";
import useAPI from "../../hooks/useAPI";
import FishesDataContext from "../../store/context/FishesDataContext";

const FishTankListPage = () => {
  const { loadLocalFishes } = useAPI();
  const { localFishes } = useContext(FishesDataContext);

  useEffect(() => {
    loadLocalFishes();
  }, [loadLocalFishes]);

  return <FishAquariumList fishes={localFishes} />;
};
export default FishTankListPage;
