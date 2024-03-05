"use client";
import { useEffect, useState } from "react";
import Serch from "../serch/Serch";
import { getURL } from "next/dist/shared/lib/utils";
import NavContentButton from "./navContentButton/NavContentButton";
import "./navContent.css";

export default function NavContent() {
  const [Path, setPath] = useState("");

  useEffect(() => {
    setPath(getURL());
  }, []);

  const nameApp = () => {
    let url = Path.slice(1);

    if (url === "") {
      return "home";
    }

    return url;
  };

  return (
    <section className="app__content__card__nav">
      <div className="app__content__card__nav__content">
        <span>{nameApp()}</span>
        <Serch />
        <NavContentButton />
      </div>
    </section>
  );
}
