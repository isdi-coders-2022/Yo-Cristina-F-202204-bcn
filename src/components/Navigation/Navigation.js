import MobileNavbarStyle from "./NavigationStyle";

const Navigation = () => {
  return (
    <MobileNavbarStyle>
      <div>
        <div className="mobile-navbar__icon-button">
          <img
            className="mobile-navbar__image--home"
            src="images/home.png"
            alt="Navigation icon to Fish Aquarium"
          />
          <h6 className="mobile-navbar__tittle">Aquarium</h6>
        </div>
      </div>
      <div>
        <div className="mobile-navbar__icon-button">
          <img
            className="mobile-navbar__image--fish"
            src="images/favicon.png"
            alt="Navigation icon to Fish tank"
          />
          <h6 className="mobile-navbar__tittle">Fish Tank</h6>
        </div>
      </div>
    </MobileNavbarStyle>
  );
};

export default Navigation;
