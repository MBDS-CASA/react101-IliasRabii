import { useState } from "react";
import Header from "./compenents/Header";
import Footer from "./compenents/Footer";
import Menu from "./compenents/Menu";
import Notes from "./compenents/Notes";
import Students from "./compenents/Students";
import Subjects from "./compenents/Subjects";
import About from "./compenents/About";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Notes");

  const renderContent = () => {
    switch (activePage) {
      case "Notes":
        return <Notes />;
      case "Étudiants":
        return <Students />;
      case "Matières":
        return <Subjects />;
      case "À propos":
        return <About />;
      default:
        return <Notes />;
    }
  };

  return (
    <div className="app">
      <Menu activePage={activePage} setActivePage={setActivePage} />
      <Header />
      
      {/* L'ajout de key={activePage} force React à détruire et recréer ce bloc 
         à chaque changement de page, ce qui déclenche l'animation "fade-in".
      */}
      <div 
        key={activePage} 
        className="fade-in" 
        style={{ width: "90%", maxWidth: "800px", margin: "0 auto 100px" }}
      >
         {renderContent()}
      </div>

      <Footer />
    </div>
  );
}

export default App;