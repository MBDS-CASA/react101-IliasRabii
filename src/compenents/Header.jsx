import logo from "../assets/logoEmsi.webp";

function Header() {
  return (
    <header className="header-container">
      <img src={logo} alt="Logo formation" />
      <h1>Introduction à React</h1>
      <h2>À la découverte des premières notions de React</h2>
    </header>
  );
}

export default Header;

