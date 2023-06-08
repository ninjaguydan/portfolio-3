import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";

import animationData from "../lottie/dt.json";

const Logo = () => {
  const [options, setOptions] = useState({});
  const { View: lottie } = useLottie(options);

  useEffect(() => {
    setTimeout(() => {
      setOptions({
        loop: false,
        autoplay: true,
        animationData: animationData,
      });
    }, 750);
  }, []);

  return <div id="dt-anim">{lottie}</div>;
};

export default Logo;
