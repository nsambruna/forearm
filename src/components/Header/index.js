import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./style.module.scss";

const Header = ({ locale, pathname }) => {
  const [nav, setNav] = useState({});

  const _pathname = locale === "en" ? pathname : "/" + locale + "" + pathname;

  useEffect(() => {
    setNav(require("../../static_data/commons/" + locale + "/nav.json"));
  }, [locale]);

  return (
    <div>
      {_pathname}

      {nav.header?.menu?.map((_nav) => (
        <Link href={_nav.path} key={_nav.id} locale={false}>
          <a className={` ${_pathname !== _nav.path ? "" : style.xActive}`}>
            {_nav.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Header;
