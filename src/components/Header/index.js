import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./style.module.scss";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { setNav } from "../../store/actions";

const Header = ({ locale, pathname }) => {
  const [nav, setNavState] = useState({});
  const dispatch = useDispatch();
  const header = useSelector((state) => state.nav.header);

  const _pathname = locale === "en" ? pathname : "/" + locale + "" + pathname;

  useEffect(() => {
    if (header === null) {
      let jsonNav = require("../../static_data/commons/" +
        locale +
        "/nav.json");
      setNavState(jsonNav.header);
      dispatch(setNav(jsonNav.header));
    } else {
      setNavState(header);
    }
  }, []);

  return (
    <div>
      {_pathname}

      {nav?.menu?.map((_nav) => (
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
