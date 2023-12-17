import React, { useEffect, useState } from "react";

const useDimension = () => {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const findInnerWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", findInnerWidth);

    return () => {
      window.removeEventListener("resize", findInnerWidth);
    };
  });

  return innerWidth;
};

export default useDimension;
