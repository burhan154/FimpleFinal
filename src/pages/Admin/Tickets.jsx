import * as React from "react";
import {  useDispatch ,useSelector} from 'react-redux';
import { getTickets } from "../../store/modules/ticket/action";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link as RouterLink,useNavigate } from "react-router-dom";

function Row(props) {
  const { row } = props;
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          {row.code}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name} {row.lastname}
        </TableCell>
        <TableCell>{row.createdAt}</TableCell>
        <TableCell width={100}> 
        <RouterLink to={"/admin/basvuru/"+row.code}>
          <Button variant="contained">Detay</Button>
        </RouterLink>
        </TableCell>    
      </TableRow>
      <TableRow>
      </TableRow>
    </React.Fragment>
  );
}

export function TicketsPage() {
    const dispatch = useDispatch();
    const tickets = useSelector((state) => state.ticket);

    React.useEffect(() => {
      dispatch(getTickets());
    }, []);


  return (<div style={{marginTop:20}}>
    <TableContainer component={Paper} style={{marginTop:20}}>
      <Table sx={{ minWidth: 450}} aria-label="simple table">
        <TableHead>
          <TableRow >
          <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>Başvuru No</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>Ad Soyad</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>Başvuru Tarihi</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}} align="center">İşlem</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.tickets.map((row) => (
           <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}