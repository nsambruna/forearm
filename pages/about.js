import React from "react";
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import Head from "next/head";
import CountrySelector from "../src/components/CountrySelector";
import { useDispatch } from "react-redux";
import { setLocale } from "../src/store/actions";
import MainTitle from "../src/components/MainTitle";

export default function About({ data, pageId }) {
  const router = useRouter();
  const dispatch = useDispatch();
  dispatch(setLocale(router.locale));
  return (
    <>
      <Head>
        <title>{data.metaTitle}</title>
      </Head>
      <MainTitle />
      <div className="faWrapper">
        <CountrySelector locale={router.locale} pageId={pageId} />
        <Header locale={router.locale} pathname={router.pathname} />
        <div>about {router.locale}</div>
      </div>
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
