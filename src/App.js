import { useEffect, useState } from "react";
import "./App.css";
import Benefits from "./components/Benefits";
import Comminty from "./components/Comminty";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import PanterShip from "./components/PanterShip";
import Roadmap from "./components/Roadmap";
import Tokenimics from "./components/Tokenimics";
import WhitePaper from "./components/WhitePaper";
import Load from "./components/Load";

function App() {
  console.log(window.innerWidth);
  const [lorder, setLorder] = useState(false);
  useEffect(() => {
    setLorder(true);
    setTimeout(() => {
      setLorder(false);
    }, 3000);
  }, []);
  document.title = `The Future of E-Commerce (${window.innerWidth})`;
  return (
    <>
      <div>
        {" "}
        {lorder ? (
          <div>
            {" "}
            <Load />{" "}
          </div>
        ) : (
          <div>
            <HeroSection />
            <Benefits />
            <WhitePaper />
            <Roadmap />
            <Comminty />
            <Tokenimics />
            <PanterShip />
            <FooterSection />
          </div>
        )}{" "}
      </div>{" "}
    </>
  );
}

export default App;
