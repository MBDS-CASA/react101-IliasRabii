import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import ClassIcon from '@mui/icons-material/Class';
import InfoIcon from '@mui/icons-material/Info';
// 1. On importe NavLink
import { NavLink } from 'react-router-dom';

function Menu() {
  // On ajoute le chemin (path) pour chaque item
  const menuItems = [
    { name: "Notes", icon: <SchoolIcon className="menu-icon" />, path: "/notes" },
    { name: "Étudiants", icon: <PeopleIcon className="menu-icon" />, path: "/etudiants" },
    { name: "Matières", icon: <ClassIcon className="menu-icon" />, path: "/matieres" },
    { name: "À propos", icon: <InfoIcon className="menu-icon" />, path: "/a-propos" },
  ];

  return (
    <nav className="menu">
      <div className="menu-title">GST. NOTES</div>
      <ul>
        {menuItems.map((item) => (
          // 2. On utilise NavLink à la place de <li>
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
          >
            {item.icon}
            <span className="menu-text">{item.name}</span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;