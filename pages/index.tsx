import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Bible from "../components/Bible";
import { Book, Version } from "../store/bible/types";
import api from "../lib/api";
import Acessibility from "../components/Acessibility";
import { useEffect } from "react";

interface HomeProps {
  books: Book[];
  versions: Version[];
}

const Home: NextPage<HomeProps> = ({ books, versions }) => {
  return (
    <>
      <Head>
        <title>AppBíblia</title>
        <meta name="description" content="Aplicativo da Bíblia Sagrada" />
      </Head>
      <Header />
      <main className="relative w-full max-w-container mx-auto mt-[70px] lg:grid lg:grid-cols-[300px_1fr] lg:gap-6">
        <div className="hidden lg:block"></div>
        <Profile />
        <Bible versions={versions} books={books} />
        <Acessibility />
      </main>
    </>
  );
};

export const getServerSideProps: GetStaticProps = async () => {
  const { data: versions } = await api.get(`${process.env.URL}/versions`);

  const { data: books } = await api.get(`${process.env.URL}/books`);

  return {
    props: {
      versions,
      books,
    },
  };
};

export default Home;
