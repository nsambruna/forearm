import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import {useCountdown} from "usehooks-ts";
import ArrowDown from "../svg/arrowdown";

const MainTitle = () => {
    let princetonorange = "#ee7b30";
    let morningblue = "#8aa8a1";

    const [visible, setVisible] = useState(true);

    const [count, { startCountdown, stopCountdown }] =
        useCountdown({
            countStart: 1,
            countStop: 101,
            intervalMs: 100,
            isIncrement: true,
        })


    let valore = {background: "linear-gradient(to right, "+princetonorange+", "+princetonorange+" "+count+"%, "+morningblue+" "+count+"%, "+morningblue+" 100%)"};


    useEffect(() => {
        startCountdown();
        return () => {
            stopCountdown()
        };
    }, []);

function CloseMainTitle(){
    setVisible(false);
    stopCountdown();
}

  return (
    <div className={`${style.faMainTitle} ${count === 101 || !visible ? style.xVisible : ""}`}>
       <h1 style={valore}>FOREARMS</h1>
        <a className={style.faMainTitle__close} onClick={CloseMainTitle}>
            <ArrowDown />
        </a>
    </div>
  );
};

export default MainTitle;
