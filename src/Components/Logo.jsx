import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";

import animationData from "../lottie/dt.json";

const Logo = ({ handleClick }) => {
  const [options, setOptions] = useState({});
  const { View: lottie } = useLottie(options);

  useEffect(() => {
    setTimeout(
      () => {
        setOptions({
          loop: false,
          autoplay: true,
          animationData: animationData,
        });
      },
      handleClick.mount === 1 ? 750 : 0
    );
  }, []);

  return (
    <button
      id="dt-anim"
      onClick={handleClick.func}>
      {lottie}
    </button>
  );
};

export default Logo;
