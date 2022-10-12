import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <p>Made by Stefan</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 20px;
  border-top: 2px dotted grey;
`;
