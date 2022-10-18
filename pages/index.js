import React from "react";
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import Head from "next/head";
import CountrySelector from "../src/components/CountrySelector";
import MainTitle from "../src/components/MainTitle";

export default function Home({ data,pageId }) {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{data.metaTitle}</title>
      </Head>

        <MainTitle />

        <CountrySelector locale={router.locale} pageId={pageId} /><br />
      <Header locale={router.locale} pathname={router.pathname} />

      <div>index {router.locale}</div>
    </>
  );
}

export async function getServerSideProps(context) {


  let data = require("../src/static_data/pages/" +
    context.locale +
    "/index.json");

  return {
    props: { data: data , pageId:"homepage"},
  };
}
