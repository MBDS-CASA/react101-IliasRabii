// src/compenents/Menu.jsx
function Menu({ activePage, setActivePage }) {
  const menuItems = ["Notes", "Étudiants", "Matières", "À propos"];

  return (
    <nav className="menu">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            className={activePage === item ? "active" : ""}
            onClick={() => setActivePage(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;