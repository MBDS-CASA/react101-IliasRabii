import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import notesData from "../data.json";

function Notes() {
  return (
    <TableContainer component={Paper} style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "white" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Matière</TableCell>
            <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Étudiant</TableCell>
            <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Note</TableCell>
            <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notesData.map((note, index) => (
            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell style={{ color: "white" }}>{note.course}</TableCell>
              <TableCell style={{ color: "white" }}>
                {note.student.firstname} {note.student.lastname}
              </TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                <span style={{ color: note.grade >= 10 ? "#4caf50" : "#f44336" }}>
                  {note.grade}
                </span>
              </TableCell>
              <TableCell style={{ color: "#aaa" }}>{note.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Notes;