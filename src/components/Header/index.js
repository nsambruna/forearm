import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./style.module.scss";
import { useSelector } from "react-redux";

const Header = ({ locale, pathname }) => {
  const header = useSelector((state) => state.nav.header);

  const _pathname = locale === "en" ? pathname : "/" + locale + "" + pathname;

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (checked) {
      document.body.classList.add("faModalOpen");
    } else {
      document.body.classList.remove("faModalOpen");
    }
    return () => {
      document.body.classList.remove("faModalOpen");
    };
  }, [checked]);

  return (
    <>
      <>
        <input
          type="checkbox"
          id="navcheck"
          role="button"
          title="menu"
          className={style.faHeader__button}
          onChange={handleChange}
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
