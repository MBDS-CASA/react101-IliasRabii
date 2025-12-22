function StudentNote({ course, firstname, lastname, grade, date }) {
  return (
    <div className="note">
      <h3>{course}</h3>
      <p>
        Étudiant : <strong>{firstname} {lastname}</strong>
      </p>
      <p>Note : <strong>{grade}</strong></p>
      <p>Date : {date}</p>
    </div>
  );
}

export default StudentNote;
