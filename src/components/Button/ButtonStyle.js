import styled from "styled-components";
import theme from "../../theme/theme";

export const ButtonStyle = styled.button`
  display: flex;
  background-color: #60bec4;
  color: #faf4ed;
  width: 100%;
  font-size: 1.25em;
  font-weight: bold;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  border-radius: 10px;
  border: none;
  font-family: "Nunito", sans-serif;
  cursor: pointer;

  ${(props) =>
    props.styleType === "primary"
      ? `
      background: ${theme.blueDark};
      color: ${theme.white};
    `
      : ""}

  ${(props) =>
    props.styleType === "secondary"
      ? `
      background: rgba(${theme.bluelightRgb},.25);
      color: ${theme.blueDark};
      border: 3.5px solid ${theme.blueDark};
      border-color: ${theme.blueDark}
    `
      : ""}
`;

export default ButtonStyle;
