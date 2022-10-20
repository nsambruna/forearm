import React from "react";
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import Head from "next/head";
import CountrySelector from "../src/components/CountrySelector";
import MainTitle from "../src/components/MainTitle";
import Footer from "../src/components/Footer";
import initStore from "./fragment/helper";

import labels from "../src/label/label";
import Definition from "../src/components/Definition";

export default function Home({ data, pageId }) {
  const router = useRouter();
  initStore("homepage");

  return (
    <>
      <Head>
        <title>{data.metaTitle}</title>
      </Head>
      <MainTitle locale={router.locale} pathname={router.pathname} />
      <div className="faWrapper">
        <div>index {router.locale}</div>
      </div>
      <Footer locale={router.locale} pageId={"homepage"} />
    </>
  );
}

export async function getServerSideProps(context) {
  let data = require("../src/static_data/pages/" +
    context.locale +
    "/index.json");

  return {
    props: { data: data, pageId: "homepage" },
  };
}
