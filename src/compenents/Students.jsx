import { useState } from "react";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, 
  TextField, TablePagination, TableSortLabel, IconButton 
} from "@mui/material";
// NOUVEAUX IMPORTS
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import notesData from "../data.json";

function Students() {
  const navigate = useNavigate(); // Hook de navigation
  
  // --- ÉTATS ---
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("lastname");

  // 1. Extraire les étudiants uniques
  const uniqueStudents = notesData.reduce((acc, current) => {
    const x = acc.find(item => item.student.firstname === current.student.firstname && item.student.lastname === current.student.lastname);
    if (!x) return acc.concat([current]);
    return acc;
  }, []);

  // 2. Gestion du Tri
  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // 3. Filtrage
  const filteredStudents = uniqueStudents.filter((item) => 
    item.student.firstname.toLowerCase().includes(search.toLowerCase()) ||
    item.student.lastname.toLowerCase().includes(search.toLowerCase())
  );

  // 4. Tri
  const sortedStudents = filteredStudents.sort((a, b) => {
    const valA = a.student[orderBy];
    const valB = b.student[orderBy];
    if (valA < valB) return order === "asc" ? -1 : 1;
    if (valA > valB) return order === "asc" ? 1 : -1;
    return 0;
  });

  // 5. Pagination
  const paginatedStudents = sortedStudents.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "20px", color: "white" }}>
      
      <TextField
        label="Rechercher un étudiant..."
        variant="outlined"
        fullWidth
        style={{ marginBottom: "20px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "5px" }}
        InputLabelProps={{ style: { color: "#aaa" } }}
        InputProps={{ style: { color: "white" } }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TableContainer>
        <Table aria-label="students table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>
                <TableSortLabel
                  active={orderBy === "firstname"}
                  direction={orderBy === "firstname" ? order : "asc"}
                  onClick={() => handleSort("firstname")}
                  style={{ color: "#00ff99" }}
                >
                  Prénom
                </TableSortLabel>
              </TableCell>

              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>
                <TableSortLabel
                  active={orderBy === "lastname"}
                  direction={orderBy === "lastname" ? order : "asc"}
                  onClick={() => handleSort("lastname")}
                  style={{ color: "#00ff99" }}
                >
                  Nom
                </TableSortLabel>
              </TableCell>

              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>ID</TableCell>
              
              {/* NOUVELLE COLONNE ACTIONS */}
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedStudents.map((note, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell style={{ color: "white" }}>{note.student.firstname}</TableCell>
                <TableCell style={{ color: "white" }}>{note.student.lastname}</TableCell>
                <TableCell style={{ color: "#aaa" }}>{note.student.id}</TableCell>
                
                {/* BOUTON VOIR DETAILS */}
                <TableCell>
                  <IconButton 
                    onClick={() => navigate(`/etudiants/${note.student.id}`)}
                    style={{ color: "#00bcd4" }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredStudents.length}
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

export default Students;