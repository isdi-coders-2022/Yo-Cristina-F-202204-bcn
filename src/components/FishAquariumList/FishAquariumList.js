import { useContext, useEffect } from "react";
import useAPI from "../../hooks/useAPI";
import FishesDataContext from "../../store/context/FishesDataContext";
import Fish from "../Fish/Fish";
import styled from "styled-components";

const FishListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 120px;
  margin-bottom: 30px;
`;

const FishAquariumList = () => {
  const { loadFishes } = useAPI();
  const { fishes } = useContext(FishesDataContext);

  useEffect(() => {
    loadFishes();
  }, [loadFishes]);

  return (
    <>
      <FishListStyle>
        {fishes.slice(0, 9).map((fish) => (
          <li className="fish" key={fish.id}>
            <Fish fish={fish} />
          </li>
        ))}
      </FishListStyle>
    </>
  );
};

export default FishAquariumList;
