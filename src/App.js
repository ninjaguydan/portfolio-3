import "./css/App.css";
import { useState } from "react";

//Components
import Frame from "./Components/Frame";
import Logo from "./Components/Logo";
import MenuBtn from "./Components/MenuBtn";
import Menu from "./Components/Menu";
import SiteContent from "./Components/SiteContent";

function App() {
  const [isActive, setActive] = useState("false");
  const [key, setKey] = useState(1);
  function menuToggle() {
    setActive(!isActive);
  }
  function remountLogo() {
    setKey(key + 1);
  }

  return (
    <>
      <MenuBtn menuToggle={menuToggle} isActive={isActive} />
      <Menu isActive={isActive} menuToggle={menuToggle} />
      <Logo key={key} handleClick={{ func: remountLogo, mount: key }} />
      <section className="gray nav" />
      <header id="projects">
        <h1>Daniel Thompson</h1>
        <h2>UX Engineer &#9733; UX Designer</h2>
      </header>
      <SiteContent />
      <Frame />
    </>
  );
}

export default App;
