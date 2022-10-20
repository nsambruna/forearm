import React from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import labels from "../../label/label";

const Definition = () => {
  const locale = useSelector((state) => state.config.locale);

  return (
    <div
      className={style.faDefinition}
      dangerouslySetInnerHTML={{
        __html: labels[locale || "en"]["definizione"],
      }}
    ></div>
  );
};

export default Definition;
