import { useState } from "react";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, 
  TextField, TablePagination, TableSortLabel 
} from "@mui/material";
import notesData from "../data.json";

function Subjects() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("course");

  // 1. Matières uniques
  const uniqueSubjects = [...new Set(notesData.map(item => item.course))];

  // 2. Transformer en objets pour le tri (car c'est juste des strings au début)
  const subjectsObjects = uniqueSubjects.map(sub => ({ course: sub, prof: "Prof. Démo" }));

  // 3. Filtrage
  const filteredSubjects = subjectsObjects.filter((item) => 
    item.course.toLowerCase().includes(search.toLowerCase())
  );

  // 4. Tri
  const sortedSubjects = filteredSubjects.sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  // 5. Pagination
  const paginatedSubjects = sortedSubjects.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Paper style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "20px", color: "white" }}>
      <TextField
        label="Rechercher une matière..."
        variant="outlined"
        fullWidth
        style={{ marginBottom: "20px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "5px" }}
        InputLabelProps={{ style: { color: "#aaa" } }}
        InputProps={{ style: { color: "white" } }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TableContainer>
        <Table aria-label="subjects table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>
                <TableSortLabel
                  active={orderBy === "course"}
                  direction={orderBy === "course" ? order : "asc"}
                  onClick={() => handleSort("course")}
                  style={{ color: "#00ff99" }}
                >
                  Matière
                </TableSortLabel>
              </TableCell>
              <TableCell style={{ color: "#00ff99", fontWeight: "bold" }}>Professeur</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedSubjects.map((row, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell style={{ color: "white", fontWeight: "bold" }}>{row.course}</TableCell>
                <TableCell style={{ color: "#aaa" }}>{row.prof}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredSubjects.length}
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

export default Subjects;