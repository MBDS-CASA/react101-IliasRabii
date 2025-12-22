function Note({ course, firstname, lastname, grade, date }) {
  const noteClass = grade >= 60 ? "note-good" : "note-bad";

  return (
    <div className={`note-card ${noteClass}`}>
      <h3>{course}</h3>
      <p><strong>Étudiant :</strong> {firstname} {lastname}</p>
      <p><strong>Note :</strong> {grade}</p>
      <p><strong>Date :</strong> {date}</p>
    </div>
  );
}

export default Note;
