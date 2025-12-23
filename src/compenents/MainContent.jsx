import { useEffect, useState } from "react";
import notesData from "../data.json"; 

function MainContent() {
  const [now, setNow] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  
  // Gestion de l'horloge
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Formatage de la date et heure
  const formatTime = (num) => String(num).padStart(2, "0");
  const dateStr = `${formatTime(now.getDate())}/${formatTime(now.getMonth() + 1)}/${now.getFullYear()}`;
  const timeStr = `${formatTime(now.getHours())}:${formatTime(now.getMinutes())}:${formatTime(now.getSeconds())}`;

  // Filtrage des données pour la recherche
  const filteredNotes = notesData.filter((item) => {
    const search = searchTerm.toLowerCase();
    return (
      item.course.toLowerCase().includes(search) ||
      item.student.lastname.toLowerCase().includes(search) ||
      item.student.firstname.toLowerCase().includes(search)
    );
  });

  /* CORRECTION ICI : 
     J'ai supprimé 'style={{ maxWidth: "800px" }}'. 
     Maintenant, c'est le CSS (1600px) qui va s'appliquer !
  */
  return (
    <main className="main-content"> 
      
      {/* Horloge */}
      <div style={{ marginBottom: "20px" }}>
        <p className="date-text">
          {dateStr} • {timeStr}
        </p>
      </div>

      {/* Barre de Recherche */}
      <input
        type="text"
        placeholder="Rechercher (Matière ou Étudiant)..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Tableau */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Matière</th>
              <th>Étudiant</th>
              <th>Note ↑</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: "bold" }}>{note.course}</td>
                  <td>
                    {note.student.firstname} {note.student.lastname}
                  </td>
                  <td>
                    <span 
                      className="grade-badge"
                      style={{ 
                        color: note.grade >= 10 ? "#00ff99" : "#ff4757" 
                      }}
                    >
                      {note.grade}
                    </span>
                  </td>
                  <td style={{ color: "#a0a0a0", fontSize: "0.9em" }}>
                    {note.date}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "30px" }}>
                  Aucun résultat trouvé 😕
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default MainContent;