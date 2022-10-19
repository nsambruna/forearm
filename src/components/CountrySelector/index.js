import React, { useEffect, useState } from "react";
import style from "./style.module.scss";

const CountrySelector = ({ locale, pageId }) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    setCountry(
      require("../../static_data/commons/hreflang/" + pageId + ".json")
    );
  }, []);

  return (
    <div>
      {country && (
        <>
          {country.map((_country, i) => (
            <a
              href={_country.url}
              key={i}
              className={` ${
                locale !== _country.siteLocale ? "" : style.xActive
              }`}
            >
              {_country.hreflang} {_country.url}
            </a>
          ))}
        </>
      )}
    </div>
  );
};

export default CountrySelector;
