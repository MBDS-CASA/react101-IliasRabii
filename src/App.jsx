import Header from "./compenents/Header";
import Footer from "./compenents/Footer";
import Menu from "./compenents/Menu";
import Notes from "./compenents/Notes";
import Students from "./compenents/Students";
import Subjects from "./compenents/Subjects";
import About from "./compenents/About";
import "./App.css";
import StudentDetails from "./compenents/StudentDetails"; // Nouvel import
import SubjectDetails from "./compenents/SubjectDetails"; // Nouvel import
// 1. Import des composants de Routing
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

function App() {
  // Le hook useLocation nous permet de savoir sur quelle page on est (pour l'animation)
  const location = useLocation();

  return (
    <div className="app">
      <div className="background-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Le Menu n'a plus besoin de props ! Il gère ses liens tout seul */}
      <Menu />
      
      <div className="content-area">
        <Header />
        
        {/* Zone de contenu dynamique gérée par le Routeur */}
        <div key={location.pathname} className="fade-in">
           <Routes>
              {/* Si l'URL est /notes, on affiche <Notes /> */}
              <Route path="/notes" element={<Notes />} />
              <Route path="/etudiants" element={<Students />} />
              <Route path="/matieres" element={<Subjects />} />
              <Route path="/a-propos" element={<About />} />
    <Route path="/notes" element={<Notes />} />
    <Route path="/etudiants" element={<Students />} />
    <Route path="/matieres" element={<Subjects />} />
    <Route path="/a-propos" element={<About />} />

    {/* --- NOUVELLES ROUTES DYNAMIQUES --- */}
    {/* ":id" signifie que cette partie de l'URL est variable */}
    <Route path="/etudiants/:id" element={<StudentDetails />} />
    <Route path="/matieres/:id" element={<SubjectDetails />} />

    <Route path="/" element={<Navigate to="/notes" replace />} />

              {/* Route par défaut : Si l'utilisateur arrive sur la racine "/", on le redirige vers "/notes" */}
              <Route path="/" element={<Navigate to="/notes" replace />} />
           </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;