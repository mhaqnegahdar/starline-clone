//Components
import InfoBar from "./InfoBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header--background px-2 px-md-3 px-lg-4 p-0 m-0 pt-2">
      <InfoBar />
      <NavBar />
    </header>
  );
};

export default Header;
