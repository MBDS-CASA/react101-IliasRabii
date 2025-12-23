function About() {
  return (
    <div className="main-content" style={{ textAlign: "left" }}>
      <h2 style={{ color: "#00ff99", marginBottom: "20px" }}>À propos du projet</h2>
      <p><strong>Réalisé par :</strong> RABII Ilyass</p>
      <p><strong>École :</strong> EMSI</p>
      <p><strong>Année :</strong> 2025</p>
      <hr style={{ margin: "20px 0", borderColor: "rgba(255,255,255,0.1)" }} />
      <p>Ce projet est une introduction à React gérant la navigation dynamique et l'affichage de données JSON via Material UI.</p>
    </div>
  );
}

export default About;