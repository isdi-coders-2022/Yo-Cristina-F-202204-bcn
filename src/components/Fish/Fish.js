const capitalizeName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const Fish = ({ fish, toDetail }) => {
  return (
    <div className="fishContainer" onClick={toDetail}>
      <h3 className="fishContainer__name">
        {capitalizeName(fish.name["name-EUen"])}
      </h3>
      <img
        className="fishContainer__icon"
        src={fish.icon_uri}
        alt={fish.name["name-EUen"] + " image"}
      />
      <ul>
        <li>
          <i class="fas fa-calendar-alt"></i>
          <span>{fish.availability["month-northern"]}</span>
        </li>
        <li>
          <i class="fas fa-clock"></i>
          <span>
            {fish.availability.isAllDay ? "All day" : fish.availability.time}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Fish;
