import FishStyle from "./FishStyle";
import Button from "../Button/Button";

const capitalizeName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const Fish = ({ fish, toDetail }) => {
  return (
    <FishStyle>
      <div className="fishContainer" onClick={toDetail}>
        <ul>
          <li>
            <h3 className="fishContainer__name">
              {capitalizeName(fish.name["name-EUen"])}
            </h3>
            <img
              className="fishContainer__icon"
              src={fish.icon_uri}
              alt={fish.name["name-EUen"] + " image"}
            />
          </li>
          <li>
            <div className="fishContainer__monthDisplay">
              <i className="fas fa-calendar-alt"></i>
              <span>{fish.availability["month-northern"]}</span>
            </div>
            <div className="fishContainer__hourDisplay">
              <i className="fas fa-clock"></i>
              <span>
                {fish.availability.isAllDay
                  ? "All day"
                  : fish.availability.time}
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
      </div>
    </FishStyle>
  );
};

export default Fish;
