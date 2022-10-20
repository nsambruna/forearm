import React from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import CountrySelector from "../CountrySelector";

const Footer = ({ locale, pageId }) => {
  const footer = useSelector((state) => state.nav.footer);
  const localeStore = useSelector((state) => state.config.locale);
  return (
    <div className={style.faFooter}>
      <div className="faWrapper">
        <div className={style.faFooterText}>{footer?.legals?.copy}</div>
        <div className={style.faFooterMenu}>
          <CountrySelector locale={localeStore} pageId={pageId} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
