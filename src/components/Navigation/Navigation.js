import styled from "styled-components";
import theme from "../../theme/theme";

const MobileNavbarStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  .mobile-navbar__icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mobile-navbar__image--home {
    width: 25px;
  }
  .mobile-navbar__image--fish {
    width: 35px;
  }

  .mobile-navbar__tittle {
    margin-bottom: 0;
    margin-top: 10px;
    color: ${theme.brownDark};
    font-size: 0.7em;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

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
