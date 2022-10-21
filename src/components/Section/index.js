import React, { useEffect } from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import Image from "next/image";

const showTrigger = () => {
  gsap.utils.toArray("section").forEach((section, index) => {
    const w = section.querySelector(".jsSection__wrapper");
    const [x, xEnd] =
      index % 2
        ? [w?.scrollWidth * -1, 0]
        : ["100%", (w?.scrollWidth - section.offsetWidth) * -1];
    gsap.fromTo(
      w,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
        },
      }
    );
  });
};

const Section = ({ title }) => {
  //const locale = useSelector((state) => state.config.locale);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    showTrigger();
    return () => {};
  }, []);

  return (
    <div className={style.faSection}>
      <section className={style.faSection__text}>
        <div className={`${style.faSection__wrapper} jsSection__wrapper`}>
          {title}
        </div>
      </section>
      <section className={style.faSection__gallery}>
        <ul className={`${style.faSection__wrapper} jsSection__wrapper`}>
          <li>
            <Image
              src="https://source.unsplash.com/random/1240x874?sig=187"
              alt="Picture of the author"
              width={1240}
              height={874}
            />
          </li>
          <li>
            <Image
              src="https://source.unsplash.com/random/1240x874?sig=206"
              alt="Picture of the author"
              width={1240}
              height={874}
            />
          </li>
          <li>
            <Image
              src="https://source.unsplash.com/random/1240x874?sig=91"
              alt="Picture of the author"
              width={1240}
              height={874}
            />
          </li>
          <li>
            <Image
              src="https://source.unsplash.com/random/1240x874?sig=105"
              alt="Picture of the author"
              width={1240}
              height={874}
            />
          </li>
        </ul>
      </section>
      <section className={style.faSection__gallery}>
        <ul className={`${style.faSection__wrapper} jsSection__wrapper`}>
          <li>
            <Image
              src="https://source.unsplash.com/random/1240x874?sig=187"
              alt="Picture of the author"
              width={1240}
              height={874}
            />
          </li>
          <li>
            <Image
              src="https://source.unsplash.com/random/1240x874?sig=206"
              alt="Picture of the author"
              width={1240}
              height={874}
            />
          </li>
          <li>
            <Image
              src="https://source.unsplash.com/random/1240x874?sig=91"
              alt="Picture of the author"
              width={1240}
              height={874}
            />
          </li>
          <li>
            <Image
              src="https://source.unsplash.com/random/1240x874?sig=105"
              alt="Picture of the author"
              width={1240}
              height={874}
            />
          </li>
        </ul>
      </section>
      <section className={style.faSection__gallery}>
        <ul className={`${style.faSection__wrapper} jsSection__wrapper`}>
          <li>
            <Image
              src="https://source.unsplash.com/random/1240x874?sig=187"
              alt="Picture of the author"
              width={1240}
              height={874}
            />
          </li>
          <li>
            <Image
              src="https://source.unsplash.com/random/1240x874?sig=206"
              alt="Picture of the author"
              width={1240}
              height={874}
            />
          </li>
          <li>
            <Image
              src="https://source.unsplash.com/random/1240x874?sig=91"
              alt="Picture of the author"
              width={1240}
              height={874}
            />
          </li>
          <li>
            <Image
              src="https://source.unsplash.com/random/1240x874?sig=105"
              alt="Picture of the author"
              width={1240}
              height={874}
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Section;
