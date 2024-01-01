import * as React from "react";
import {  useDispatch ,useSelector} from 'react-redux';
import { searchTicket } from "../../store/modules/ticket/action";
import { useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {row.code}
        </TableCell>
        <TableCell component="th" scope="row">{row.name}</TableCell>
        <TableCell>{row.lastname}</TableCell>
        <TableCell>{row.age}</TableCell>
        <TableCell>{row.address}</TableCell>
        <TableCell width={220}> 
          {row.createdAt}
        </TableCell>    
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Ekler</TableCell>
                    <TableCell >Başvuru Nedeni</TableCell>
                    <TableCell >Cevap</TableCell>
                    <TableCell align="right">Çözüldü mü</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                      <TableCell component="th" scope="row">
                      <img 
                      width='100'
                        src={row.photo}
                        alt={row.photo}
                        />
                      </TableCell>
                      <TableCell >{row.reason}</TableCell>
                      <TableCell >{row.response}</TableCell>
                      <TableCell  align="right"> 
                      {row.isSolved? 'Tamamlandı':'Tamamlanmadı'}      
                        </TableCell> 
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export function GetTicketPage() {
    const dispatch = useDispatch();
    const tickets = useSelector((state) => state.ticket);

    const {basvuruNo} = useParams();

    React.useEffect(() => {
      dispatch(searchTicket(basvuruNo));
    }, []);

  return (<div style={{margin:60 }}>
    {tickets.isLoading?<h2>Yükleniyor</h2> :   tickets.ticket.id? 
    
    <TableContainer component={Paper} style={{}}>

      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow >
          <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>Başvuru No</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>Ad</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>Soyad</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>Yaş</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>Adres</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}} align="center">Başvuru Tarihi</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
         <Row row={tickets.ticket} /> 
        </TableBody>
      </Table>
    </TableContainer>
    : <h2>{tickets.error}</h2> }
    </div>
  );
}