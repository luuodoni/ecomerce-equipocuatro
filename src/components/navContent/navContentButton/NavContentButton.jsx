import Image from "next/image";
import imgBuy from "../../static/svg/buy.svg";
import { useContext } from "react";
import Context from "@/components/context/Context";
import "./navContentButton.css"

export default function NavContentButton() {
  const { buyElement } = useContext(Context);

  const NumBuyElement = () => {
    let cantElement = buyElement.length;

    if (cantElement === 0) {
      console.log(buyElement, "d");
      return "";
    }
    return cantElement;
  };
  return (
    <button className="app__content__card__nav__content__button">
      <picture className="app__content__card__nav__content__button__picture">
        <Image
          src={imgBuy}
          alt="image buy button erwab ecommers"
          width={"auto"}
          height={"auto"}
          className="app__content__card__nav__content__button__picture__img"
        />
      </picture>
      {NumBuyElement()}
    </button>
  );
}
