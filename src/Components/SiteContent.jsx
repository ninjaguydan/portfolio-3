import React from "react";
// Components
import Project from "./Project";
import Illustration from "./Illustration";
import About from "./About";
import Contact from "./Contact";

//Mockups
import dexapp from "../media/mockups/Dexapp.png";
import dt from "../media/mockups/DT.png";
import render from "../media/mockups/RENDER.png";
import myfi from "../media/mockups/MYFI.png";

//Icons
import react from "../media/icons/react.svg";
import next from "../media/icons/next.svg";
import ms from "../media/icons/makeswift.svg";
import ts from "../media/icons/ts.svg";
import angular from "../media/icons/angular.svg";

//Data
import { description } from "../data/desc";

const SiteContent = () => {
  return (
    <div className="site-content">
      <Project title="Dex App" image={dexapp} icons={[react, ts]} desc={description.DEXAPP} project_link="https://ninjaguydan.github.io/dexapp_REACT" code="https://github.com/ninjaguydan/dexapp_REACT" />
      <Project title="Firebird Insurance" image={myfi} icons={[react, ts]} desc={description.MYFI} project_link="https://ninjaguydan.github.io/firebird" code="https://github.com/ninjaguydan/firebird" />
      <Project title="Render ATL 2023" image={render} icons={[react, next, ts, ms]} desc={description.RENDER} project_link="https://www.renderatl.com/" code={null} />
      <Project title="Portfolio Site" image={dt} icons={[react]} desc={description.DT} project_link="/" code="https://github.com/ninjaguydan/portfolio-3" />
      <About />
      <Contact />
    </div>
  );
};
export default SiteContent;
