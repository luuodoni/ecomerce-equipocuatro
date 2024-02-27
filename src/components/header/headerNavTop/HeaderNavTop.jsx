import React from "react";
import HeaderCardLink from "../headerCardLink/HeaderCardLink";
import imgHands from "../../static/svg/hand-shake-shake-hands-svgrepo-com.svg";
import imgPaper from "../../static/svg/paper-svgrepo-com.svg";
import imgScreen from "../../static/svg/screen.svg";
import imgShop from "../../static/svg/shop-2-svgrepo-com.svg";
import imgComunication from "../../static/svg/comunication.svg";
import "./HeaderNavTop.css"

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
  return (
    <nav className="app__header__top">
      <section className="app__header__top__content">
        {JSON_NAV.map((data, index) => {
          console.log(index)
          return (
            <HeaderCardLink
              key={data.name}
              url={data.url}
              img={data.img}
              alt={`ahorra más img arweb ${data.name}`}
              classFlex
              classAdd={index === 0 ? "": "border"}
              title={data.title}
            />
          );
        })}
      </section>
    </nav>
  );
};

export default HeaderNavTop;
