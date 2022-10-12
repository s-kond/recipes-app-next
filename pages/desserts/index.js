import Image from "next/image";
import styled from "styled-components";
import GridList from "../../components/GridList";
import Head from "next/head";
import Link from "next/link";
import { getAllDesserts } from "../../services/productServives";

const dessertBackground =
  "https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400";

export async function getServerSideProps() {
  const desserts = await getAllDesserts();

  return {
    props: { desserts },
  };
}

export default function Desserts({ desserts }) {
  return (
    <>
      <Background>
        <Image
          src={dessertBackground}
          alt="some pieces of blueberry cake"
          layout="responsive"
          width={2400}
          height={1599}
        />
      </Background>
      <Head>
        <title>Desserts</title>
      </Head>
      <h2>Desserts</h2>
      <GridList>
        {desserts.map((dessert) => {
          return (
            <li key={dessert.id}>
              <Link href={`/desserts/${dessert.id}`}>{dessert.name}</Link>
            </li>
          );
        })}
      </GridList>
    </>
  );
}

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;
  opacity: 0.3;
  @media (max-width: 600px) {
    display: none;
  }
`;
