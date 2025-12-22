import logo from "../assets/logoEmsi.webp";

function Header() {
  return (
    <header style={{ textAlign: "center", padding: "20px" }}>
      <img
        src={logo}
        alt="Logo formation"
        width="100"
      />
      <h1>Introduction à React</h1>
      <h2>À la découverte des premières notions de React</h2>
    </header>
  );
}

export default Header;
