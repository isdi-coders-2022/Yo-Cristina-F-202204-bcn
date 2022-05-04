import styled from "styled-components";
import theme from "../../theme/theme";

const FooterStyle = styled.footer`
  background-color: ${theme.white};
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 10px;
  box-shadow: 0px -1px 50px 0px rgba(${theme.brownDarkRgb}, 0.4);
`;

export default FooterStyle;
