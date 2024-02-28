"use client";
import React, { useState } from "react";
import HeaderCardLink from "../headerCardLink/HeaderCardLink";
import imgHands from "../../static/svg/hand-shake-shake-hands-svgrepo-com.svg";
import imgPaper from "../../static/svg/paper-svgrepo-com.svg";
import imgScreen from "../../static/svg/screen.svg";
import imgShop from "../../static/svg/shop-2-svgrepo-com.svg";
import imgComunication from "../../static/svg/comunication.svg";
import "./HeaderNavTop.css";

const JSON_NAV = [
  {
    img: imgScreen,
    url: "",
    title: "Conócenos",
  },
  {
    img: imgShop,
    url: "",
    title: "Encuentra tu super",
  },
  {
    img: imgPaper,
    url: "",
    title: "Folleto",
  },
  {
    img: imgComunication,
    url: "",
    title: "Atención al cliente",
  },
  {
    img: imgHands,
    url: "",
    title: "Trabaja con nosotros",
  },
];

const HeaderNavTop = () => {
  const [menuActive, setMenuActive] = useState(false);

  const ChangeMenuToggle = () => setMenuActive(!menuActive);
  return (
    <nav className="app__header__top">
      <section className="app__header__top__menu">
        <section className="app__heeader__top__menu__hamburger" onClick={ChangeMenuToggle}>
          <span className="app__header__top__menu__hamburger__content__span"></span>
        </section>
        <section className={`app__header__top__content menu-${menuActive}`}>
          <header className="app__header__top__content__header">
            <div
              className="app__header__top__content__header__content"
              onClick={ChangeMenuToggle}
            >
              <span className="app__header__top__content__header__close"></span>
            </div>
          </header>
          <div className="app__header__top__content__links">
            {JSON_NAV.map((data, index) => {
              return (
                <HeaderCardLink
                  key={index}
                  url={data.url}
                  img={data.img}
                  alt={`ahorra más img arweb ${data.name}`}
                  classFlex
                  classAdd={
                    index === 0
                      ? "first"
                      : index === JSON_NAV.length - 1
                      ? "last"
                      : "border"
                  }
                  title={data.title}
                />
              );
            })}
          </div>
        </section>
      </section>
    </nav>
  );
};

export default HeaderNavTop;
