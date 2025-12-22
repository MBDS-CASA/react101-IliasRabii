// src/compenents/ContentDisplay.jsx
function ContentDisplay({ page }) {
  return (
    <main className="main-content">
      <h2>Page actuelle : {page}</h2>
      <p>Le contenu pour "{page}" sera affiché ici bientôt.</p>
    </main>
  );
}

export default ContentDisplay;