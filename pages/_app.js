import React, { useCallback, useEffect, useRef } from "react";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import { useStore } from "../src/store/store";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  const timeoutRef = useRef();

  const clearTimer = useCallback(() => clearTimeout(timeoutRef.current), []);

  useEffect(() => {
    if (timeoutRef.current) clearTimer();

    timeoutRef.current = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);

    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
