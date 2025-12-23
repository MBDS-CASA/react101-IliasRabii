import { useParams, useNavigate } from "react-router-dom";
import notesData from "../data.json";
import { Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function StudentDetails() {
  const { id } = useParams(); // On récupère l'ID depuis l'URL
  const navigate = useNavigate();

  // On cherche toutes les infos liées à cet étudiant
  const studentGrades = notesData.filter(note => String(note.student.id) === id);

  if (studentGrades.length === 0) {
    return <div style={{color: "white"}}>Étudiant non trouvé</div>;
  }

  // On prend les infos fixes (Nom/Prénom) depuis la première note trouvée
  const studentInfo = studentGrades[0].student;

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
        <h2 style={{ color: "#00ff99", marginBottom: "10px" }}>{studentInfo.firstname} {studentInfo.lastname}</h2>
        <p style={{ color: "#aaa" }}>ID Étudiant : {studentInfo.id}</p>
      </Paper>

      <h3 style={{ color: "white", marginBottom: "15px" }}>Bulletin de notes</h3>
      
      <TableContainer component={Paper} style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Matière</TableCell>
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Note</TableCell>
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Date</TableCell>
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentGrades.map((item, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: "white" }}>{item.course}</TableCell>
                <TableCell style={{ color: "white", fontWeight: "bold" }}>{item.grade}</TableCell>
                <TableCell style={{ color: "#aaa" }}>{item.date}</TableCell>
                <TableCell style={{ color: item.grade >= 10 ? "#4caf50" : "#f44336" }}>
                  {item.grade >= 10 ? "Validé" : "Non Validé"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default StudentDetails;