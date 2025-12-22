import { useEffect, useState } from "react";

function MainContent() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const jour = now.getDate();
  const mois = now.getMonth() + 1;
  const annee = now.getFullYear();

  const heure = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const seconde = String(now.getSeconds()).padStart(2, "0");

  return (
    <main className="main-content">
      <p>
        Bonjour, on est le {jour}/{mois}/{annee} et il est{" "}
        {heure}:{minute}:{seconde}
      </p>
    </main>
  );
}

export default MainContent;
