import logo from "../assets/logoEmsi.webp";

function Header() {
  return (
    <header className="header-container">
      <img src={logo} alt="Logo formation" />
      <div className="header-texts">
        <h1>Dashboard React</h1>
        <h2>Gestion des notes et étudiants</h2>
      </div>
    </header>
  );
}

export default Header;