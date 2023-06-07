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
  function menuToggle() {
    setActive(!isActive);
  }

  return (
    <>
      <MenuBtn
        menuToggle={menuToggle}
        isActive={isActive}
      />
      <Menu
        isActive={isActive}
        menuToggle={menuToggle}
      />
      <Logo />
      <section className="gray nav" />
      <header id="projects">
        <h1>Daniel Thompson</h1>
        <h2>Front End Engineer &#9733; UX Designer</h2>
      </header>
      <SiteContent />
      <Frame />
    </>
  );
}

export default App;
