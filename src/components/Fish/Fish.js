import FishStyle from "./FishStyle";
import Button from "../Button/Button";
import useAPI from "../../hooks/useAPI";

const capitalizeName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const Fish = ({ fish, toDetail }) => {
  const { addToFishTank } = useAPI();

  return (
    <FishStyle>
      <ul className="fish-container" onClick={toDetail}>
        <li className="fish-container__header">
          <h3 className="fish-container__name">
            {capitalizeName(fish.name["name-EUen"])}
          </h3>
          <div className="fish-icon__container">
            <img
              className="fish-icon__image"
              src={fish.icon_uri}
              alt={fish.name["name-EUen"] + " image"}
              width="auto"
              height="80px"
            />
          </div>
        </li>
        <li>
          <div className="fish-container__monthDisplay">
            <i className="fas fa-calendar-alt"></i>
            <span>
              {fish.availability.isAllYear
                ? "All year"
                : fish.availability["month-northern"]}
            </span>
          </div>
          <div className="fish-container__hourDisplay">
            <i className="fas fa-clock"></i>
            <span>
              {fish.availability.isAllDay ? "All day" : fish.availability.time}
            </span>
          </div>
        </li>
        <li>
          <div className="fish-container__locationDisplay">
            <span>{fish.availability.location}</span>
          </div>
          <div className="fish-container__rarityDisplay">
            <span>{fish.availability.rarity}</span>
          </div>
        </li>
        <li className="fish-container__button">
          <Button text="Catch it!" action={() => addToFishTank(fish)} />
        </li>
      </ul>
    </FishStyle>
  );
};

export default Fish;
