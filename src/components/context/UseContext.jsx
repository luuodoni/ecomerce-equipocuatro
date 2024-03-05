"use client";
import { useState } from "react";
import Context from "./Context";

export default function UseState(params) {
  const [buyElement, setBuyElement] = useState([]);

  return (
    <Context.Provider
      value={{
        buyElement,
        setBuyElement,
      }}
    >
      {params.children}
    </Context.Provider>
  );
}
