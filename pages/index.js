import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import MainTitle from "../src/components/MainTitle";
import Footer from "../src/components/Footer";
import InitStore from "./fragment/helper";
import Section from "../src/components/Section";

//https://codepen.io/noeldelgado/full/BaogqYy

export default function Home({ data }) {
  const router = useRouter();
  InitStore("homepage");

  return (
    <>
      <Head>
        <title>{data.metaTitle}</title>
      </Head>
      <MainTitle locale={router.locale} pathname={router.pathname} />

      <Section title={"IN THE SCIENCE"} />
      <Section title={"IN THE HYSTORY"} />
      <Section title={"IN THE PRESENT"} />
      <Section title={"IN THE FUTURE"} />

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
