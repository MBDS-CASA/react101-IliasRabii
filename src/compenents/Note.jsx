function Note({ course, firstname, lastname, grade, date }) {
  const noteClass = grade >= 10 ? "note-good" : "note-bad"; // J'ai supposé que la note est sur 20. Si c'est sur 100, changez 10 par 50.

  return (
    <div className={`note-card ${noteClass}`}>
      <span className="note-badge">{grade}</span>
      <h3>{course}</h3>
      <div className="note-info">
        <strong>Étudiant :</strong> {firstname} {lastname}
      </div>
      <div className="note-info">
        <strong>Date :</strong> {date}
      </div>
      <div className="note-info" style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.9em', opacity: 0.7 }}>
        {grade >= 10 ? "Validation réussie" : "Module non validé"}
      </div>
    </div>
  );
}

export default Note;