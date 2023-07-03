import { useState } from "react";
//Components
import InfoBar from "./InfoBar";
import NavBar from "./NavBar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header--background px-2 px-md-3 px-lg-4 p-0 m-0 pt-2">
      <InfoBar toggle={toggle} setToggle={setToggle} />
      <NavBar toggle={toggle} setToggle={setToggle} />
    </header>
  );
};

export default Header;
