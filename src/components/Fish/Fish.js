import FishStyle from "./FishStyle";
import Button from "../Button/Button";

const capitalizeName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const Fish = ({ fish, toDetail }) => {
  return (
    <FishStyle>
      <ul className="fishContainer" onClick={toDetail}>
        <li className="fishContainer__header">
          <h3 className="fishContainer__name">
            {capitalizeName(fish.name["name-EUen"])}
          </h3>
          <div className="fish-icon__container">
            <img
              className="fish-icon__image"
              src={fish.icon_uri}
              alt={fish.name["name-EUen"] + " image"}
            />
          </div>
        </li>
        <li>
          <div className="fishContainer__monthDisplay">
            <i className="fas fa-calendar-alt"></i>
            <span>
              {" "}
              {fish.availability.isAllYear
                ? "All year"
                : fish.availability["month-northern"]}
            </span>
          </div>
          <div className="fishContainer__hourDisplay">
            <i className="fas fa-clock"></i>
            <span>
              {fish.availability.isAllDay ? "All day" : fish.availability.time}
            </span>
          </div>
        </li>
        <li>
          <div className="fishContainer__locationDisplay">
            <span>{fish.availability.location}</span>
          </div>
          <div className="fishContainer__rarityDisplay">
            <span>{fish.availability.rarity}</span>
          </div>
        </li>
        <li>
          <Button text="Catch it!" />
        </li>
      </ul>
    </FishStyle>
  );
};

export default Fish;
