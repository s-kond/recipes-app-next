import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <HeaderContainer>
      <h1>Recipes App</h1>
      <StyledNav>
        <Link href="/" passHref>
          <Anchor active={pathname === "/"}>Home</Anchor>
        </Link>
        <Link href="/Veggie" passHref>
          <Anchor active={pathname === "/Veggie"}>Veggie</Anchor>
        </Link>
        <Link href="/desserts" passHref>
          <Anchor active={pathname === "/desserts"}>Desserts</Anchor>
        </Link>
      </StyledNav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  background-color: black;
  border-bottom: 2px dotted grey;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 18px;
`;

const Anchor = styled.a`
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  text-underline-offset: 5px;
`;
