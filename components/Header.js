import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Recipes App</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  border-bottom: 2px dotted grey;
`;
