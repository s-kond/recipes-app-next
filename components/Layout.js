import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  margin: 0;
  padding: 1rem;
  min-height: calc(100vh - 8rem);
`;
