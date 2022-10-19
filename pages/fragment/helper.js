import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFooter, setLocale, setNav } from "../../src/store/actions";
import { useRouter } from "next/router";

export default function initStore() {
  const router = useRouter();
  const dispatch = useDispatch();

  const localeStore = useSelector((state) => state.config.locale);
  const header = useSelector((state) => state.nav.header);
  const footer = useSelector((state) => state.nav.footer);

  if (localeStore !== router.locale || localeStore === null) {
    dispatch(setLocale(router.locale));
    //dispatch(setMainTitle(true));
  }

  if (header === null || footer === null) {
    let jsonNav = require("../../src/static_data/commons/" +
      router.locale +
      "/nav.json");
    dispatch(setNav(jsonNav.header));
    dispatch(setFooter(jsonNav.footer));
  }
}
