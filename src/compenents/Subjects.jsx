import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import notesData from "../data.json";

function Subjects() {
  // On extrait les matières uniques
  const uniqueSubjects = [...new Set(notesData.map(item => item.course))];

  return (
    <TableContainer component={Paper} style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "white" }}>
      <Table aria-label="subjects table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Matière</TableCell>
            <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Professeur (Exemple)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {uniqueSubjects.map((subject, index) => (
            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>{subject}</TableCell>
              <TableCell style={{ color: "#aaa" }}>Prof. Démo {index + 1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Subjects;