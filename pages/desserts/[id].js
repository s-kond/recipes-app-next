import { getDessertsById } from "../../services/productServives";
import Link from "next/link";
import Head from "next/head";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const dessert = await getDessertsById(id);

  return {
    props: dessert,
  };
}

export default function Dessert({ name, description, time, category }) {
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h2>{name}</h2>
      <p>Zubereitungszeit: {time}min</p>
      <p>{description}</p>
      <Link href={`/desserts`}>Alle Desserts</Link>
    </>
  );
}
