import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { useCountdown } from "usehooks-ts";
import { useDispatch } from "react-redux";
import { setMainTitle } from "../../store/actions";
import labels from "../../label/label";
import Header from "../Header";
import Definition from "../Definition";
import Link from "next/link";

const MainTitle = ({ locale, pathname }) => {
  let goldenrod = "#e6af2e";
  let eerieblack = "#191716";

  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  dispatch(setMainTitle(true));
  const [count, { startCountdown, stopCountdown }] = useCountdown({
    countStart: 1,
    countStop: 101,
    intervalMs: 50,
    isIncrement: true,
  });

  let valore = {
    background:
      "linear-gradient(100deg, " +
      goldenrod +
      ", " +
      goldenrod +
      " " +
      count +
      "%, " +
      eerieblack +
      " " +
      count +
      "%, " +
      eerieblack +
      " 100%)",
  };

  useEffect(() => {
    startCountdown();
    return () => {
      stopCountdown();
    };
  }, []);

  useEffect(() => {
    if (count > 100) {
      CloseMainTitle();
      stopCountdown();
    }
  }, [count]);

  useEffect(() => {
    if (visible) {
      document.body.classList.add("faModalOpen");
    } else {
      document.body.classList.remove("faModalOpen");
    }
    return () => {
      document.body.classList.remove("faModalOpen");
    };
  }, [visible]);

  function CloseMainTitle() {
    setVisible(false);
    stopCountdown();
    dispatch(setMainTitle(false));
  }

  return (
    <>
      <div className={`${style.faMainTitle} ${!visible ? style.xVisible : ""}`}>
        {visible ? (
          <h1 style={valore}>{labels[locale || "en"]["titolo"]}</h1>
        ) : (
          <Link href={"/"} locale={locale}>
            <h1 style={valore} className={style.faMainTitle__link}>
              {labels[locale || "en"]["titolo"]}
            </h1>
          </Link>
        )}
        <h2>{labels[locale || "en"]["subtitolo"]}</h2>
      </div>
      <div
        className={`${style.faMainTitle__bg} ${
          !visible ? style.xVisibleBg : ""
        }`}
      ></div>
      {!visible && <Header locale={locale} pathname={pathname} />}

      <Definition />
    </>
  );
};

export default MainTitle;
