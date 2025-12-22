function Menu() {
  const handleClick = (item) => {
    // Vous pourrez remplacer l'alert par une navigation plus tard
    console.log(`Navigation vers : ${item}`);
  };

  return (
    <nav className="menu">
      <ul>
        <li onClick={() => handleClick("Notes")}>Notes</li>
        <li onClick={() => handleClick("Étudiants")}>Étudiants</li>
        <li onClick={() => handleClick("Matières")}>Matières</li>
        <li onClick={() => handleClick("À propos")}>À propos</li>
      </ul>
    </nav>
  );
}

export default Menu;