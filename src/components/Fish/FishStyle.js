import styled from "styled-components";
const FishStyle = styled.div`
  background: #faf4ed;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  align-content: center;

  .fishContainer {
    width: inherit;
    margin: 0;
    display: flex;
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
    width: 150px;
    border-radius: 5px;
    font-size: 18px;
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
  .fishContainer__monthDisplay {
    background: #75e0aa;
    color: #3c583b;
  }
  .fishContainer__hourDisplay {
    background: #8ebfa3;
    color: #faf4ed;
  }
  .fishContainer__locationDisplay,
  .fishContainer__rarityDisplay {
    background: #e6d0be;
    color: #583e3b;
    font-size: 12px;
  }
`;

export default FishStyle;
