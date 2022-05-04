import styled from "styled-components";
import theme from "../../theme/theme";

const MobileNavbarStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  .mobile-navbar {
    &__icon-button {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__image {
      &--home {
        width: 25px;
      }
      &--fish {
        width: 35px;
      }
    }

    &__tittle {
      margin-bottom: 0;
      margin-top: 10px;
      color: ${theme.brownDark};
      font-size: 0.7em;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;

export default MobileNavbarStyle;
