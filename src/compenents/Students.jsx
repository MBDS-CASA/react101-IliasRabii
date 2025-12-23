import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import notesData from "../data.json";

function Students() {
  // On filtre pour avoir une liste unique d'étudiants (basé sur le nom complet)
  const uniqueStudents = notesData.reduce((acc, current) => {
    const x = acc.find(item => item.student.firstname === current.student.firstname && item.student.lastname === current.student.lastname);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <TableContainer component={Paper} style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "white" }}>
      <Table aria-label="students table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Prénom</TableCell>
            <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Nom</TableCell>
            <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>ID (fictif)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {uniqueStudents.map((note, index) => (
            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell style={{ color: "white" }}>{note.student.firstname}</TableCell>
              <TableCell style={{ color: "white" }}>{note.student.lastname}</TableCell>
              <TableCell style={{ color: "#aaa" }}>{note.student.id || `STU-${1000 + index}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Students;