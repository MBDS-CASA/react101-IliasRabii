import { useState } from "react";
import Header from "./compenents/Header";
import Footer from "./compenents/Footer";
import Menu from "./compenents/Menu";
import Notes from "./compenents/Notes";
import Students from "./compenents/Students"; // Nouvel import
import Subjects from "./compenents/Subjects"; // Nouvel import
import About from "./compenents/About";       // Nouvel import
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
      <div style={{ width: "90%", maxWidth: "800px", margin: "0 auto 100px" }}>
         {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default App;