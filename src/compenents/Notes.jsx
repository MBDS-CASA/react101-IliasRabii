import { useState } from "react";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, 
  TextField, TablePagination, TableSortLabel, Box 
} from "@mui/material";
import notesData from "../data.json";

function Notes() {
  // --- ÉTATS (STATES) ---
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc"); // 'asc' ou 'desc'
  const [orderBy, setOrderBy] = useState("grade"); // Colonne triée par défaut

  // --- LOGIQUE DE TRI ---
  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // --- FILTRAGE (RECHERCHE) ---
  const filteredNotes = notesData.filter((note) => 
    note.course.toLowerCase().includes(search.toLowerCase()) ||
    note.student.firstname.toLowerCase().includes(search.toLowerCase()) ||
    note.student.lastname.toLowerCase().includes(search.toLowerCase())
  );

  // --- TRI DES DONNÉES FILTRÉES ---
  const sortedNotes = filteredNotes.sort((a, b) => {
    if (orderBy === "grade") {
        return order === "asc" ? a.grade - b.grade : b.grade - a.grade;
    }
    // Pour les textes (Matière, Date...)
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  // --- PAGINATION ---
  const paginatedNotes = sortedNotes.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "20px", color: "white" }}>
      
      {/* BARRE DE RECHERCHE */}
      <TextField
        label="Rechercher (Matière ou Étudiant)..."
        variant="outlined"
        fullWidth
        style={{ marginBottom: "20px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "5px" }}
        InputLabelProps={{ style: { color: "#aaa" } }}
        InputProps={{ style: { color: "white" } }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Matière</TableCell>
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Étudiant</TableCell>
              
              {/* En-tête triable pour la NOTE */}
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>
                <TableSortLabel
                  active={orderBy === "grade"}
                  direction={orderBy === "grade" ? order : "asc"}
                  onClick={() => handleSort("grade")}
                  style={{ color: "#00ff99" }}
                >
                  Note
                </TableSortLabel>
              </TableCell>

              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedNotes.map((note, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell style={{ color: "white" }}>{note.course}</TableCell>
                <TableCell style={{ color: "white" }}>
                  {note.student.firstname} {note.student.lastname}
                </TableCell>
                <TableCell style={{ color: "white", fontWeight: "bold" }}>
                  <span style={{ 
                    color: note.grade >= 10 ? "#4caf50" : "#f44336",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(0,0,0,0.2)"
                  }}>
                    {note.grade}
                  </span>
                </TableCell>
                <TableCell style={{ color: "#aaa" }}>{note.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* COMPOSANT DE PAGINATION */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredNotes.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
        style={{ color: "white" }}
      />
    </Paper>
  );
}

export default Notes;