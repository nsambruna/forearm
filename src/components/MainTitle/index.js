import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { useCountdown } from "usehooks-ts";
//import ArrowDown from "../svg/arrowdown";
import { useDispatch } from "react-redux";
import { setMainTitle } from "../../store/actions";

const MainTitle = () => {
  let goldenrod = "#e6af2e";
  let eerieblack = "#191716";

  //const mainTitle = useSelector((state) => state.config.mainTitle);
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();

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

  function CloseMainTitle() {
    setVisible(false);
    stopCountdown();
    dispatch(setMainTitle(false));
  }

  return (
    <>
      <div className={`${style.faMainTitle} ${!visible ? style.xVisible : ""}`}>
        <h1 style={valore}>FOREARMS</h1>
      </div>
      <div
        className={`${style.faMainTitle__bg} ${
          !visible ? style.xVisibleBg : ""
        }`}
      ></div>
    </>
  );
};

export default MainTitle;
