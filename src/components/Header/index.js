import React from "react";
import Link from "next/link";
import style from "./style.module.scss";
import { useSelector } from "react-redux";

const Header = ({ locale, pathname }) => {
  const header = useSelector((state) => state.nav.header);

  const _pathname = locale === "en" ? pathname : "/" + locale + "" + pathname;

  return (
    <>
      <>
        <input
          type="checkbox"
          id="navcheck"
          role="button"
          title="menu"
          className={style.faHeader__button}
        />
        <label
          htmlFor="navcheck"
          aria-hidden="true"
          title="menu"
          className={style.faHeader__label}
        >
          <span className={style.faHeader__burger}>
            <span className={style.faHeader__bar}></span>
          </span>
        </label>
        <nav id="menu" className={style.faHeader__nav}>
          {header?.menu?.map((_nav) => (
            <Link href={_nav.path} key={_nav.id} locale={locale}>
              <a
                className={` ${_pathname !== _nav.path ? "" : style.xActive}`}
                data-text={_nav.label}
              >
                {_nav.label}
              </a>
            </Link>
          ))}
        </nav>
      </>
    </>
  );
};

export default Header;
