import { useParams, useNavigate } from "react-router-dom";
import notesData from "../data.json";
import { Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SubjectDetails() {
  const { id } = useParams(); // Ici "id" sera le nom de la matière (ex: "Math 101")
  const navigate = useNavigate();

  // On filtre pour avoir seulement les notes de cette matière
  const subjectData = notesData.filter(note => note.course === id);

  // Calcul de la moyenne de la classe
  const average = subjectData.reduce((acc, curr) => acc + curr.grade, 0) / subjectData.length;

  return (
    <div style={{ width: "100%" }}>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate(-1)} 
        style={{ color: "#00ff99", marginBottom: "20px" }}
      >
        Retour
      </Button>

      <Paper style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "30px", color: "white", marginBottom: "30px" }}>
        <h2 style={{ color: "#00ff99", marginBottom: "10px" }}>Matière : {id}</h2>
        <p style={{ color: "#aaa" }}>Nombre d'étudiants notés : {subjectData.length}</p>
        <p style={{ color: "#aaa" }}>Moyenne de la classe : <span style={{ color: "white", fontWeight: "bold" }}>{average.toFixed(2)}</span></p>
      </Paper>

      <TableContainer component={Paper} style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Étudiant</TableCell>
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Note</TableCell>
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjectData.map((item, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: "white" }}>{item.student.firstname} {item.student.lastname}</TableCell>
                <TableCell style={{ color: item.grade >= 10 ? "#4caf50" : "#f44336", fontWeight: "bold" }}>
                    {item.grade}
                </TableCell>
                <TableCell style={{ color: "#aaa" }}>{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SubjectDetails;