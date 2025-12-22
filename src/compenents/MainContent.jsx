import { useEffect, useState } from "react";
import notes from "../data.json";
import Note from "./Note";

function getRandomNote() {
  return notes[Math.floor(Math.random() * notes.length)];
}

function MainContent() {
  const [now, setNow] = useState(new Date());
  const [note, setNote] = useState(getRandomNote());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const jour = String(now.getDate()).padStart(2, "0");
  const mois = String(now.getMonth() + 1).padStart(2, "0");
  const annee = now.getFullYear();
  const heure = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const seconde = String(now.getSeconds()).padStart(2, "0");

  return (
    <main className="main-content">
      <p className="date-text">
        Bonjour, on est le {jour}/{mois}/{annee} et il est{" "}
        {heure}:{minute}:{seconde}
      </p>

      <button
        onClick={() => setNote(getRandomNote())}
        className="btn-random"
      >
        Changer de note
      </button>

      <Note
        course={note.course}
        firstname={note.student.firstname}
        lastname={note.student.lastname}
        grade={note.grade}
        date={note.date}
      />
    </main>
  );
}

export default MainContent;
