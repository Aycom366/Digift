import React, { useEffect } from "react";

const useWindowDimension = () => {
  const [windowDimension, setWindowDimension] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimension;
};

export default useWindowDimension;
