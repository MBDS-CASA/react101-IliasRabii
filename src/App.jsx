import { useState } from "react";
import Header from "./compenents/Header";
import Footer from "./compenents/Footer";
import Menu from "./compenents/Menu";
import Notes from "./compenents/Notes"; // <--- Import du tableau
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Notes");

  // Cette fonction choisit quel composant afficher selon le menu
  const renderContent = () => {
    switch (activePage) {
      case "Notes":
        return <Notes />;
      case "Étudiants":
        return <div className="main-content">Contenu Étudiants à venir...</div>;
      case "Matières":
        return <div className="main-content">Contenu Matières à venir...</div>;
      case "À propos":
        return <div className="main-content">Contenu À propos à venir...</div>;
      default:
        return <Notes />;
    }
  };

  return (
    <div className="app">
      <Menu activePage={activePage} setActivePage={setActivePage} />
      <Header />
      
      {/* Zone de contenu dynamique */}
      <div style={{ width: "90%", maxWidth: "800px", margin: "0 auto 100px" }}>
         {renderContent()}
      </div>

      <Footer />
    </div>
  );
}

export default App;