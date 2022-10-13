import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <p>Made by Stefan</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: block;
  background-color: black;
  width: 100%;
  padding: 20px;
  border-top: 2px dotted grey;

  @media (prefers-color-scheme: light) {
    background-color: white;
  }
`;
