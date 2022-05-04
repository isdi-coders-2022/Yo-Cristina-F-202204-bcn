import Fish from "../Fish/Fish";

const FishAquariumList = ({ fishes }) => {
  return (
    <>
      <ul className="fish__list">
        {fishes.map((fish) => (
          <li className="fish" key={fish.id}>
            <Fish fish={fish} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FishAquariumList;
