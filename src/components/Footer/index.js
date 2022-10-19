import React from "react";
import Link from "next/link";
import style from "./style.module.scss";
import { useSelector } from "react-redux";

const Footer = ({ locale }) => {
  const header = useSelector((state) => state.nav.header);
  const footer = useSelector((state) => state.nav.footer);

  return (
    <div className={style.faFooter}>
      <div className="faWrapper">
        <div className={style.faFooterText}>{footer?.legals?.copy}</div>
        <div className={style.faFooterMenu}>
          {header?.menu?.map((_nav) => (
            <Link href={_nav.path} key={_nav.id} locale={locale}>
              <a className={``}>{_nav.label}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
