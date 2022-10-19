import { SET_FOOTER, SET_LOCALE, SET_MAINTITLE, SET_NAV } from "../types";

export const setNav = (header) => ({
  type: SET_NAV,
  payload: { header: header },
});
export const setFooter = (header) => ({
  type: SET_FOOTER,
  payload: { footer: header },
});

export const setLocale = (locale) => ({
  type: SET_LOCALE,
  payload: { locale: locale },
});

export const setMainTitle = (value) => ({
  type: SET_MAINTITLE,
  payload: { mainTitle: value },
});
