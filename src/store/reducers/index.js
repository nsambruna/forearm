import { combineReducers } from "redux";
import * as types from "../types";

const initialNavState = {
  header: null,
  footer: null,
};

const navReducer = (state = initialNavState, { type, payload }) => {
  switch (type) {
    case types.SET_NAV:
      return { ...state, ...payload };
    case types.SET_FOOTER:
      return { ...state, ...payload };
    default:
      return state;
  }
};

const initialConfigState = {
  locale: null,
  mainTitle: true,
};

const configReducer = (state = initialConfigState, { type, payload }) => {
  switch (type) {
    case types.SET_LOCALE:
      return { ...state, ...payload };
    case types.SET_MAINTITLE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  nav: navReducer,
  config: configReducer,
};

export default combineReducers(reducers);
