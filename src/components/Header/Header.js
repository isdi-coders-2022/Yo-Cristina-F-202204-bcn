import styled from "styled-components";

const HeaderStyle = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap");
  background: #91d9d9;
  font-family: "Nunito", sans-serif;
  height: 88px;
  color: #583e3b;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;

  li {
    margin: 0 20px 10px 20px;
  }
  h1,
  h2 {
    margin: auto 0;
    font-weight: 800;
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 16px;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <li>
        <h1>Fishypedia</h1>
      </li>
      <li>
        <h2>AQUARIUM</h2>
      </li>
    </HeaderStyle>
  );
};

export default Header;
