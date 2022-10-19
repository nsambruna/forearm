import React from "react";
import Link from "next/link";
import style from "./style.module.scss";
import { useSelector } from "react-redux";

const Header = ({ locale, pathname }) => {
  const header = useSelector((state) => state.nav.header);

  const _pathname = locale === "en" ? pathname : "/" + locale + "" + pathname;

  return (
    <div>
      {header?.menu?.map((_nav) => (
        <Link href={_nav.path} key={_nav.id} locale={locale}>
          <a className={` ${_pathname !== _nav.path ? "" : style.xActive}`}>
            {_nav.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Header;
