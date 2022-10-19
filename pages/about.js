import React from "react";
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import Head from "next/head";
import CountrySelector from "../src/components/CountrySelector";
import MainTitle from "../src/components/MainTitle";
import Footer from "../src/components/Footer";
import initStore from "./fragment/helper";

export default function About({ data, pageId }) {
  const router = useRouter();
  initStore();

  return (
    <>
      <Head>
        <title>{data.metaTitle}</title>
      </Head>
      <MainTitle />
      <CountrySelector locale={router.locale} pageId={pageId} />
      <Header locale={router.locale} pathname={router.pathname} />
      <div className="faWrapper">
        <div>about {router.locale}</div>
      </div>
      <Footer locale={router.locale} />
    </>
  );
}

export async function getServerSideProps(context) {
  let data = require("../src/static_data/pages/" +
    context.locale +
    "/about.json");

  return {
    props: { data: data, pageId: "about" },
  };
}
