import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./style.module.scss";

const CountrySelector = ({ locale, pageId }) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    setCountry(require("../../static_data/commons/hreflang/"+pageId+".json"));
  }, []);

  return (
    <div>
      {country &&
          <>
            {country.map((_country,i) => (
                <Link href={_country.url} key={i} locale={false}>
                  <a className={` ${locale !== _country.siteLocale ? "" : style.xActive}`}>
                    {_country.hreflang} {_country.url}
                    <br />
                  </a>
                </Link>
            ))}
          </>
      }
    </div>
  );
};

export default CountrySelector;
