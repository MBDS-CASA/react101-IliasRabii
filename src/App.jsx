import { useState } from "react";
import Header from "./compenents/Header";
import Footer from "./compenents/Footer";
import Menu from "./compenents/Menu";
import ContentDisplay from "./compenents/ContentDisplay"; // Import du nouveau composant
import "./App.css";

function App() {
  // État pour savoir quelle page est affichée (par défaut "Notes")
  const [activePage, setActivePage] = useState("Notes");

  return (
    <div className="app">
      {/* On passe la page active et la fonction pour la changer au Menu */}
      <Menu activePage={activePage} setActivePage={setActivePage} />
      
      <Header />
      
      {/* On affiche le composant qui change selon la page */}
      <ContentDisplay page={activePage} />
      
      <Footer />
    </div>
  );
}

export default App;