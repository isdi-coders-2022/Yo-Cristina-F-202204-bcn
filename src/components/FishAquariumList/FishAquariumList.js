import Fish from "../Fish/Fish";
import styled from "styled-components";

const FishListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 120px;
  margin-bottom: 30px;
`;

const FishAquariumList = ({ fishes, page }) => {
  return (
    <>
      <FishListStyle>
        {fishes.slice(0, 9).map((fish) => (
          <li className="fish" key={fish.id}>
            <Fish fish={fish} page={page} />
          </li>
        ))}
      </FishListStyle>
    </>
  );
};

export default FishAquariumList;
