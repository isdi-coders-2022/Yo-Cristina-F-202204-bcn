import { useContext, useEffect } from "react";
import useAPI from "../../hooks/useAPI";
import FishesDataContext from "../../store/context/FishesDataContext";
import Fish from "../Fish/Fish";

const FishAquariumList = () => {
  const { loadFishes } = useAPI();
  const { fishes } = useContext(FishesDataContext);

  useEffect(() => {
    loadFishes();
  }, [loadFishes]);

  return (
    <>
      <ul className="fish__list">
        {fishes.slice(0, 9).map((fish) => (
          <li className="fish" key={fish.id}>
            <Fish fish={fish} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FishAquariumList;
