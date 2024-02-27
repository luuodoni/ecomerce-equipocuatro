import Image from "next/image";
import Link from "next/link";
import "./headerCardLink.css";

const HeaderCardLink = ({ url, img, alt, classFlex, title, classAdd }) => {
  return (
    <Link href={url} className={`app__header__link ${classAdd}`}>
      <div className={`${classFlex} app__header__link__content`}>
        <picture>
          <Image
            className="w-[3rem]"
            width="auto"
            height="auto"
            src={img}
            alt={alt}
          />
        </picture>
        <span className="app__header__link__content__title">{title}</span>
      </div>
    </Link>
  );
};

export default HeaderCardLink;
