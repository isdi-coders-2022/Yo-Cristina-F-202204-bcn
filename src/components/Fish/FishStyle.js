import styled from "styled-components";
import theme from "../../theme/theme";

const FishStyle = styled.div`
  background: #faf4ed;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  align-content: center;

  .fishContainer__header {
    align-items: center;
  }
  li {
    gap: 10px;
  }

  .fish-icon__container {
    margin: 0;
    padding: 0;
    background-color: ${theme.blueDark};
    display: flex;
    width: 90px;
    height: 90px;
    margin: 0;
    padding: 0;
    justify-content: center;
    border-radius: 50px;
    align-items: center;
    flex: 0 0 90px;
  }

  .fish-icon__image {
    width: auto;
    height: 70px;
  }

  .fishContainer {
    width: inherit;
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  ul {
    padding: 0 20px;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 36px;
    color: #583e3b;
    font-weight: 800;
  }
  .fish {
    margin-bottom: 20px;
  }

  .fishContainer__monthDisplay,
  .fishContainer__hourDisplay,
  .fishContainer__locationDisplay,
  .fishContainer__rarityDisplay {
    padding: 5px;
    width: 100%;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    height: 30px;
    font-weight: 700;
    i {
      flex-grow: 1;
    }
    span {
      flex-grow: 5;
    }
  }

  .fishContainer__monthDisplay,
  .fishContainer__hourDisplay {
    background: #8ebfa3;
    color: #faf4ed;
    font-size: 1.3em;
  }

  .fishContainer__locationDisplay,
  .fishContainer__rarityDisplay {
    background: #e6d0be;
    color: #583e3b;
    font-size: 1em;
    text-transform: uppercase;
  }
`;

export default FishStyle;
