import React from "react";
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import Head from "next/head";
import CountrySelector from "../src/components/CountrySelector";

export default function About({ data,pageId }) {

  const router = useRouter();
  return (
    <>
      <Head>
        <title>{data.metaTitle}</title>
      </Head>
        <CountrySelector locale={router.locale} pageId={pageId} />
      <Header locale={router.locale} pathname={router.pathname} />
      <div>about {router.locale}</div>
    </>
  );
}

export async function getServerSideProps(context) {

  let data = require("../src/static_data/pages/" +
    context.locale +
    "/about.json");

  return {
    props: { data: data , pageId:"about"},
  };
}
